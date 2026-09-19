import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Globe2,
} from "lucide-react";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import ShareButton from "@/components/blog/ShareButton";
import BlogCard from "@/components/blog/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found — AfriHub Founders",
    };
  }

  const title = `${post.title} — AfriHub Founders`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: [...post.tags, "African Startups", "AfriHub Founders", "African Tech Ecosystem"],
    authors: [{ name: post.author.name }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedIso,
      authors: [post.author.name],
      tags: post.tags,
      siteName: "AfriHub Founders",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@AfriHubFounders",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  // Schema.org Article Structured Data for Google Rich Snippets & Search
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedIso,
    dateModified: post.publishedIso,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://afrihubfounders.com/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.bio,
    },
    publisher: {
      "@type": "Organization",
      name: "AfriHub Founders",
      url: "https://afrihubfounders.com",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen pt-16 bg-[#F8FAFC]">
      {/* Article Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Dark Header Hero ── */}
      <header className="bg-slate-900 border-b border-slate-800 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <ArrowLeft size={14} />
              African Insights
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="text-slate-300">{post.category}</span>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="truncate max-w-[200px] sm:max-w-xs text-slate-500">
              {post.title}
            </span>
          </nav>

          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Clock size={13} className="text-slate-500" />
              {post.readTime}
            </span>
            <time
              dateTime={post.publishedIso}
              className="text-xs text-slate-400 flex items-center gap-1.5"
            >
              <Calendar size={13} className="text-slate-500" />
              {post.publishedAt}
            </time>
          </div>

          {/* Headline (Single H1 for SEO) */}
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h1>

          {/* Author & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3.5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-base shadow-md"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0F172A 100%)",
                }}
              >
                {post.author.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <ShareButton title={post.title} />
          </div>
        </div>
      </header>

      {/* ── Main Article Layout ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <article>
          {/* Quick African Ecosystem Highlights / Metrics if present */}
          {post.stats && post.stats.length > 0 && (
            <aside aria-label="Key Ecosystem Metrics" className="mb-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-4 flex items-center gap-1.5">
                <Globe2 size={14} />
                Key Pan-African Metrics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {post.stats.map((st, i) => (
                  <div key={i} className="flex flex-col">
                    <span
                      className="text-2xl sm:text-3xl font-black text-slate-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {st.value}
                    </span>
                    <span className="text-xs text-slate-500 font-medium mt-0.5">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          )}

          {/* Lead Intro Paragraph */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-sky-500 shadow-xs">
              {post.content.intro}
            </p>
          </div>

          {/* Structured Article Sections */}
          <div className="space-y-10">
            {post.content.sections.map((section, idx) => (
              <section
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5"
              >
                <h2
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.body.map((para, pIdx) => (
                    <p key={pIdx} className="text-base text-slate-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Callout Box */}
                {section.callout && (
                  <div
                    className={`p-5 rounded-xl border flex items-start gap-3.5 ${
                      section.callout.type === "tip"
                        ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                        : section.callout.type === "stat"
                        ? "bg-sky-50/70 border-sky-200 text-sky-950"
                        : "bg-indigo-50/70 border-indigo-200 text-indigo-950"
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {section.callout.type === "tip" ? (
                        <CheckCircle2 size={20} className="text-emerald-600" />
                      ) : section.callout.type === "stat" ? (
                        <TrendingUp size={20} className="text-sky-600" />
                      ) : (
                        <Lightbulb size={20} className="text-indigo-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1">
                        {section.callout.title}
                      </p>
                      <p className="text-sm leading-relaxed">{section.callout.text}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* ── Key Takeaways Box ── */}
          {post.content.takeaways.length > 0 && (
            <aside aria-label="Key Strategic Takeaways" className="mt-10 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 text-white shadow-xl">
              <h3
                className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CheckCircle2 size={20} className="text-sky-400" />
                Strategic Takeaways for African Founders
              </h3>
              <ul className="space-y-3">
                {post.content.takeaways.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* ── SEO Tags / Topics ── */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-200">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-2">
              <Tag size={13} />
              Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-2xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* ── Author Bio Profile ── */}
          <footer className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0 shadow-md"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0F172A 100%)",
              }}
            >
              {post.author.avatar}
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 justify-center sm:justify-start">
                <h4 className="text-base font-bold text-slate-900">{post.author.name}</h4>
                <span className="text-xs text-sky-600 font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 w-fit mx-auto sm:mx-0">
                  {post.author.role}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{post.author.bio}</p>
            </div>
          </footer>
        </article>

        {/* ── Related Articles Section ── */}
        {relatedPosts.length > 0 && (
          <section aria-label="Related Articles" className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <h3
                className="text-xl sm:text-2xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                More from AfriHub Founders
              </h3>
              <Link
                href="/blog"
                className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                View all articles
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
