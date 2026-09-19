"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, Sparkles, Clock, Calendar, ArrowRight, BookOpen, Globe2 } from "lucide-react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog";

const CATEGORIES = ["All", "Ecosystem", "Playbook", "Engineering", "Fundraising"] as const;

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  // Filter posts based on selected category and search query
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* ── Featured Post Spotlight (shown when no active search) ── */}
      {featuredPost && !searchQuery && selectedCategory === "All" && (
        <section
          aria-label="Featured Story"
          className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white"
        >
          {/* Ambient Glows */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  <Sparkles size={12} className="text-sky-400" />
                  Pan-African Spotlight
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock size={12} />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              {/* Author and Action */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-tr from-sky-400 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow-md">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {featuredPost.author.role} • {featuredPost.publishedAt}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Read Full Story</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Quick Stats Box */}
            {featuredPost.stats && (
              <div className="w-full lg:w-72 shrink-0 bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 shadow-inner">
                <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-4 flex items-center gap-1.5">
                  <Globe2 size={13} />
                  Pan-African Ecosystem Metrics
                </p>
                <div className="space-y-4">
                  {featuredPost.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
                        {stat.value}
                      </span>
                      <span className="text-xs text-slate-400">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Search & Filter Controls ── */}
      <section aria-label="Search and Category Filters" className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              aria-label="Search articles"
              placeholder="Search by topic, keyword, or author (e.g. Fintech, Lagos, SAFEs)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search input"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter articles by category">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filters Summary */}
        {(searchQuery || selectedCategory !== "All") && (
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-sky-600 hover:text-sky-700 font-semibold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ── Articles Grid ── */}
      <section aria-label="Articles Feed">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No articles found</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-4">
              We couldn't find any articles matching your search query or filter. Try a different keyword like "Fintech", "SAFEs", or "Nairobi".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors cursor-pointer"
            >
              Clear Search & Filters
            </button>
          </div>
        )}
      </section>

      {/* ── Pan-African Newsletter CTA ── */}
      <section aria-label="Newsletter Subscription" className="rounded-3xl bg-linear-to-r from-sky-500 to-sky-700 text-white p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-xs">
            AfriHub Founders Dispatch
          </span>
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Stay Ahead of Africa’s Fast-Growing Tech Ecosystem
          </h2>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
            Get actionable founder playbooks, seed funding breakdowns, and ecosystem analysis from Lagos, Nairobi, Cape Town, and Cairo delivered directly to your inbox every Thursday.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              aria-label="Work email address"
              placeholder="Enter your work email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold whitespace-nowrap transition-colors shadow-md cursor-pointer"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-xs text-sky-200">
            Join 2,500+ founders, operators, and venture investors building across Africa. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
