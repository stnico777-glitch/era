"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { heroVideos } from "@/lib/visuals";

/** Default time each clip stays visible before cutting to the next (when multiple clips work). */
const DEFAULT_DISPLAY_MS = 7000;

/** Slots 1 & 2 (indices 0–1). Slot 3 stays 1.0. */
const SLOW_PLAYBACK_RATE = 0.6;

function rateForIndex(i: number): number {
  return i <= 1 ? SLOW_PLAYBACK_RATE : 1;
}

/** Some browsers reset rate after seek/play — set both API fields and re-apply after play(). */
function applyPlaybackRate(v: HTMLVideoElement, index: number) {
  const r = rateForIndex(index);
  v.defaultPlaybackRate = r;
  v.playbackRate = r;
}

function displayMsFor(index: number) {
  const clip = heroVideos[index];
  return "displayMs" in clip ? clip.displayMs : DEFAULT_DISPLAY_MS;
}

export function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedIds, setFailedIds] = useState<Set<number>>(() => new Set());

  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const failedIdsRef = useRef(failedIds);

  const activeIndexRef = useRef(activeIndex);

  const displayTimeoutRef = useRef<number | null>(null);
  const bootstrappedRef = useRef(false);
  const initialDisplayScheduledRef = useRef(false);

  const advanceOnErrorRef = useRef<(index: number) => void>(() => {});
  const beginAdvanceFnRef = useRef<() => void>(() => {});

  useEffect(() => {
    failedIdsRef.current = failedIds;
  }, [failedIds]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (displayTimeoutRef.current !== null) {
        clearTimeout(displayTimeoutRef.current);
      }
    };
  }, []);

  const playableCount = heroVideos.length - failedIds.size;

  const firstPlayableIndex = useCallback((failed: Set<number>) => {
    for (let i = 0; i < heroVideos.length; i++) {
      if (!failed.has(i)) return i;
    }
    return 0;
  }, []);

  const nextPlayableAfter = useCallback(
    (from: number, failed: Set<number>) => {
      let next = (from + 1) % heroVideos.length;
      let guard = 0;
      while (failed.has(next) && guard < heroVideos.length) {
        next = (next + 1) % heroVideos.length;
        guard++;
      }
      return next;
    },
    [],
  );

  const clearDisplayTimeout = useCallback(() => {
    if (displayTimeoutRef.current !== null) {
      clearTimeout(displayTimeoutRef.current);
      displayTimeoutRef.current = null;
    }
  }, []);

  const kickPlayStable = useCallback((i: number) => {
    const v = refs.current[i];
    if (!v) return;
    applyPlaybackRate(v, i);
    if (v.ended) v.currentTime = 0;
    void v
      .play()
      .then(() => {
        if (refs.current[i] !== v) return;
        applyPlaybackRate(v, i);
      })
      .catch(() => advanceOnErrorRef.current(i));
  }, []);

  const scheduleDisplay = useCallback(() => {
    clearDisplayTimeout();
    const ms = displayMsFor(activeIndexRef.current);
    displayTimeoutRef.current = window.setTimeout(() => {
      beginAdvanceFnRef.current();
    }, ms);
  }, [clearDisplayTimeout]);

  const beginAdvance = useCallback(() => {
    if (playableCount <= 0) return;

    clearDisplayTimeout();

    if (playableCount === 1) {
      const i = activeIndexRef.current;
      const v = refs.current[i];
      if (v) {
        applyPlaybackRate(v, i);
        v.currentTime = 0;
        void v
          .play()
          .then(() => applyPlaybackRate(v, i))
          .catch(() => advanceOnErrorRef.current(i));
      }
      scheduleDisplay();
      return;
    }

    const failed = failedIdsRef.current;
    const current = activeIndexRef.current;
    const next = nextPlayableAfter(activeIndexRef.current, failed);
    const nextVideo = refs.current[next];

    if (!nextVideo) {
      setActiveIndex(next);
      queueMicrotask(() => {
        refs.current.forEach((v, j) => {
          if (!v) return;
          if (j === next) {
            kickPlayStable(j);
          } else {
            v.pause();
            v.currentTime = 0;
          }
        });
      });
      scheduleDisplay();
      return;
    }

    applyPlaybackRate(nextVideo, next);
    if (nextVideo.ended) nextVideo.currentTime = 0;
    void nextVideo
      .play()
      .then(() => {
        // Only cut once the next clip is actually playing.
        if (activeIndexRef.current !== current) return;
        if (refs.current[next] !== nextVideo) return;

        setActiveIndex(next);
        queueMicrotask(() => {
          refs.current.forEach((v, j) => {
            if (!v || j === next) return;
            v.pause();
            v.currentTime = 0;
          });
        });
        scheduleDisplay();
      })
      .catch(() => advanceOnErrorRef.current(next));
  }, [
    clearDisplayTimeout,
    kickPlayStable,
    nextPlayableAfter,
    playableCount,
    scheduleDisplay,
  ]);
  useEffect(() => {
    beginAdvanceFnRef.current = beginAdvance;
  }, [beginAdvance]);

  const advanceOnError = useCallback(
    (index: number) => {
      setFailedIds((prev) => {
        const nextFailed = new Set(prev).add(index);
        setActiveIndex((vis) => {
          if (vis !== index) return vis;
          const nv = firstPlayableIndex(nextFailed);
          queueMicrotask(() => {
            kickPlayStable(nv);
            clearDisplayTimeout();
            initialDisplayScheduledRef.current = false;
            scheduleDisplay();
          });
          return nv;
        });
        return nextFailed;
      });
    },
    [clearDisplayTimeout, firstPlayableIndex, kickPlayStable, scheduleDisplay],
  );

  useEffect(() => {
    advanceOnErrorRef.current = advanceOnError;
  }, [advanceOnError]);

  useLayoutEffect(() => {
    if (playableCount === 0 || bootstrappedRef.current) return;

    const start = () => {
      if (bootstrappedRef.current) return;
      const i = firstPlayableIndex(failedIdsRef.current);
      const v = refs.current[i];
      if (!v) {
        requestAnimationFrame(start);
        return;
      }
      bootstrappedRef.current = true;
      setActiveIndex(i);
      kickPlayStable(i);
    };

    start();
  }, [playableCount, firstPlayableIndex, kickPlayStable]);

  const handleEnded = useCallback(
    (index: number) => {
      if (failedIdsRef.current.has(index)) return;
      if (index !== activeIndexRef.current) return;
      if (playableCount <= 0) return;

      clearDisplayTimeout();
      beginAdvance();
    },
    [beginAdvance, clearDisplayTimeout, playableCount],
  );

  const handlePlaying = useCallback(
    (index: number, el: HTMLVideoElement) => {
      applyPlaybackRate(el, index);
      if (index !== activeIndexRef.current) return;
      if (!initialDisplayScheduledRef.current) {
        initialDisplayScheduledRef.current = true;
        scheduleDisplay();
      }
    },
    [scheduleDisplay],
  );

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {playableCount > 0
        ? heroVideos.map((clip, i) => {
            if (failedIds.has(i)) return null;
            const shouldRender =
              i === activeIndex || i === nextPlayableAfter(activeIndex, failedIds);
            if (!shouldRender) return null;
            return (
              <video
                key={clip.mp4}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`absolute inset-0 h-full min-h-full w-full min-w-full object-cover object-center transition-none ${
                  i === activeIndex
                    ? "z-[2] opacity-100"
                    : "z-[1] pointer-events-none opacity-0"
                }`}
                muted
                playsInline
                preload={i === activeIndex ? "metadata" : "none"}
                aria-hidden
                onLoadedMetadata={(e) =>
                  applyPlaybackRate(e.currentTarget, i)
                }
                onPlaying={(e) => handlePlaying(i, e.currentTarget)}
                onError={() => advanceOnError(i)}
                onEnded={() => handleEnded(i)}
              >
                <source src={clip.mp4} type="video/mp4" />
              </video>
            );
          })
        : null}
    </div>
  );
}
