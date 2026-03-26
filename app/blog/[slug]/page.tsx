import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/InnerPageHero";

const posts: Record<
  string,
  { title: string; date: string; content: string[] }
> = {
  "leadflow-basics": {
    title: "Leadflow basics for service businesses",
    date: "Jan 15, 2024",
    content: [
      "Most service businesses don’t have a “traffic problem.” They have a follow-up and conversion problem. Leadflow starts with clarity: what offer, what geography, what proof, and what next step.",
      "Once you can answer those, your website, ads, and CRM can align. The goal is simple: make it easy to book, easy to trust, and hard to fall through the cracks.",
    ],
  },
  "crm-follow-up": {
    title: "Why CRM follow-up beats “more leads”",
    date: "Dec 2, 2023",
    content: [
      "If you’re losing deals after the first conversation, the fix is rarely “more leads.” It’s a pipeline: reminders, stages, scripts, and speed-to-lead.",
      "A CRM isn’t a spreadsheet—it’s a system that protects revenue. When follow-up is consistent, marketing gets smarter because you can see what actually closes.",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not found" };
  return { title: post.title };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <InnerPageHero eyebrow={post.date} title={post.title} />
      <section className="bg-era-cream">
        <div className="container-site section-y">
          <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-era-muted">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm">
            <Link href="/blog" className="text-era-accent hover:underline">
              ← Back to blog
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
