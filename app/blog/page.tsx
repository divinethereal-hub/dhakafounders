import type { Metadata } from "next";
import { BookOpen, Globe2 } from "lucide-react";
import BlogListClient from "@/components/blog/BlogListClient";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "African Startup Insights & Ecosystem Playbooks — AfriHub Founders",
  description:
    "In-depth analysis, seed fundraising playbooks, fintech scaling, and founder stories from across Africa's high-growth startup hubs: Lagos, Nairobi, Cape Town, Cairo, and Kigali.",
  keywords: [
    "African startups",
    "African tech ecosystem",
    "Fintech Africa",
    "Lagos tech startups",
    "Nairobi Silicon Savannah",
    "African venture capital",
    "M-Pesa",
    "African founder playbooks",
    "AfriHub Founders",
  ],
  openGraph: {
    title: "African Startup Insights & Ecosystem Playbooks — AfriHub Founders",
    description:
      "Actionable playbooks, fundraising guides, and market analysis for founders building generational companies across Africa.",
    type: "website",
    locale: "en_US",
    siteName: "AfriHub Founders",
  },
  twitter: {
    card: "summary_large_image",
    title: "African Startup Insights & Ecosystem Playbooks — AfriHub Founders",
    description:
      "Actionable playbooks, fundraising guides, and market analysis for founders building generational companies across Africa.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AfriHub African Startup Insights",
    description:
      "Actionable playbooks, seed fundraising frameworks, and ecosystem analysis for founders building across Africa.",
    url: "https://afrihubfounders.com/blog",
    publisher: {
      "@type": "Organization",
      name: "AfriHub Founders",
      logo: {
        "@type": "ImageObject",
        url: "https://afrihubfounders.com/logo.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://afrihubfounders.com/blog/${post.slug}`,
      datePublished: post.publishedIso,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "#F0F9FF" }}>
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Dark Hero Header (Server Component) ── */}
      <header
        style={{ backgroundColor: "#0F172A" }}
        className="pb-12 pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 pointer-events-none blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <span className="section-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Globe2 size={13} className="text-sky-400" />
              Pan-African Startup Editorial
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Insights for Africa’s Next Generation of{" "}
            <span className="text-gradient-cyan">Builders</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Battle-tested playbooks, fundraising frameworks, and deep dives into the technologies, regulatory sandboxes, and founders driving Africa's digital transformation.
          </p>
        </div>
      </header>

      {/* ── Main Content Area ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <BlogListClient posts={posts} />
      </main>
    </div>
  );
}
