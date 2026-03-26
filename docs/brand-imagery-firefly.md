# ERA — brand imagery guidelines (Adobe Firefly)

Use this document to keep generated images aligned with the live site: warm minimal layout, service-business credibility, and the palette below.

---

## Brand tone (one line)

**Professional, calm, human** — like a trusted operator who modernizes your business, not a flashy agency or a cold SaaS dashboard.

---

## Core palette (from the product)

| Role | Hex | Usage in imagery |
|------|-----|------------------|
| **Page cream / beige** | `#f8f4f0` | Primary background feel; airy, warm white |
| **Deep cream / banding** | `#efe8e2` | Secondary warm neutrals, card edges, depth |
| **Ink / charcoal** | `#2d333a` | Headlines, strong UI; use sparingly in photos (shadows, devices, text on paper) |
| **Brand blue (accent)** | `#5b8fd0` | UI accents, links, subtle props (notebook, UI glow), **not** neon |
| **Light blue on dark** | `#a3c8ee` | Reference only for dark UI scenes |
| **Dusty rose shell** | `#e8b4bc` | Soft panels, subtle props, **not** hot magenta |
| **Rose accent** | `#c98a9a` | Small highlights, sparing |
| **Software / dark base** | `#0a0a0c` | “Need custom software” mood: near-black, premium night |
| **Dark atmosphere glows** | Soft **indigo** `rgb(99,102,241)`, **violet** `rgb(139,92,246)`, **blue** `rgb(91,143,208)` at low opacity | Ambient light in dark scenes — **glows, not solid blocks** |

**Avoid:** Saturated orange/red, pure black backgrounds without warmth, stock “corporate handshake” clichés, neon gradients unrelated to the blues above.

---

## Typography (for context — Firefly usually ignores type)

- **Body / UI:** Inter-style clean sans  
- **Display / headings:** Montserrat-style geometric sans, bold  

Generated images rarely need readable text; if Firefly adds text, prefer **short English words** or **none**.

---

## Service card images (grid)

**Goal:** Match the reference layout — top half photographic, bottom white card with title (you’ll add copy in the site).

**Composition**

- **Aspect:** Landscape ~**16:10** (matches card image area).  
- **Subject:** Real-world work — desk, laptop, light office, hands on keyboard, notebook, calm collaboration (one or two people max).  
- **Lighting:** Bright, natural, soft shadows — **high-key**, not harsh contrast.  
- **Color grade:** Warm neutrals; **cool blue** only as a **small** accent (screen glow, mug, pen, clothing detail).  
- **Mood:** Focused, organized, **quietly successful** — not party, not sterile hospital.

**Firefly prompt pattern (copy and edit the bracketed part):**

```text
Professional marketing photography, [SUBJECT], bright natural soft daylight, warm beige and off-white tones, subtle dusty rose and soft blue accents, clean modern desk or office, shallow depth of field, high-end minimal aesthetic, no text, no logos, 16:10 landscape
```

**Example subjects to swap in**

- Top-down desk: laptop, notebook, plant, coffee, organized stationery  
- Side angle: person typing on laptop, window light  
- Two people: small meeting, laptop open, relaxed posture  

---

## “Need custom software” / dark section mood

**Goal:** Same trust as the rest of the site, but **night / product** energy — deep charcoal base with **soft** purple-blue ambient light (matches `.software-cta-atmosphere`).

**Visual recipe**

- Background: **near-black** `#0a0a0c` feel, not pure `#000`  
- Accents: **subtle** indigo / violet / blue **light blooms** (like UI glow on a wall or screen reflection)  
- Props: Code editor on screen (blurred), modern device, abstract nodes/lines **very subtle** — avoid sci-fi cliché  
- Still **clean** and **spacious**, not cluttered cyberpunk  

**Firefly prompt pattern:**

```text
Cinematic minimal tech photography, [SUBJECT], very dark charcoal background #0a0a0c, soft ambient glow indigo and violet and soft blue, premium software studio mood, shallow depth of field, no text, no logos, no harsh neon, 16:10 landscape
```

---

## Global dos and don’ts

**Do**

- Warm beige / cream as the dominant feel on light scenes  
- Soft blue as a **secondary** accent  
- Dusty rose only as a **light** wash or small prop — ties to summary UI on the site  
- Keep horizons and desks **straight**; generous margin / negative space  

**Don’t**

- Oversaturate pink or blue  
- Use rainbow gradients or unrelated brand colors  
- Fill the frame with faces or busy patterns  
- Add fake logos, watermarks, or illegible text blocks  

---

## Quick checklist before you export

- [ ] Dominant temperature: **warm neutral** (light cards) or **controlled dark** (software mood)  
- [ ] Blue appears **accent-only** on light sections  
- [ ] Pink, if used, is **dusty / muted**  
- [ ] No text (or trivial blur) so your site typography stays authoritative  
- [ ] **16:10** crop for service cards unless you’ve changed the layout  

---

*Aligned with `app/globals.css` and homepage sections as of project snapshot.*
