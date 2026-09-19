import Link from "next/link";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  Ecosystem: {
    bg: "rgba(14, 165, 233, 0.10)",
    text: "#0284C7",
    border: "#0EA5E9",
  },
  Playbook: {
    bg: "rgba(16, 185, 129, 0.10)",
    text: "#059669",
    border: "#10B981",
  },
  Engineering: {
    bg: "rgba(99, 102, 241, 0.10)",
    text: "#4F46E5",
    border: "#6366F1",
  },
  Fundraising: {
    bg: "rgba(245, 158, 11, 0.10)",
    text: "#D97706",
    border: "#F59E0B",
  },
};

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const catStyle = categoryStyles[post.category] || categoryStyles.Ecosystem;

  return (
    <article
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{
        borderTop: `4px solid ${catStyle.border}`,
      }}
    >
      {/* Decorative top ambient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at top center, ${catStyle.bg}, transparent 70%)`,
        }}
      />

      <div className="p-6 sm:p-7 flex flex-col flex-1 relative z-10">
        {/* Category & Read Time Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{
              backgroundColor: catStyle.bg,
              color: catStyle.text,
            }}
          >
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock size={12} className="text-slate-400" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200 mb-2.5 line-clamp-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <Link href={`/blog/${post.slug}`} className="hover:underline focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <div className="flex items-center justify-between">
            {/* Author info */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-xs"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #0F172A)",
                }}
              >
                {post.author.avatar}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 leading-tight">
                  {post.author.name}
                </p>
                <p className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Calendar size={10} />
                  {post.publishedAt}
                </p>
              </div>
            </div>

            {/* Read Arrow */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 group-hover:text-sky-700 group-hover:translate-x-0.5 transition-all"
            >
              <span>Read</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
