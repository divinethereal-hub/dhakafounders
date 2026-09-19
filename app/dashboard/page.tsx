import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Star,
  Bell,
  Settings,
  ArrowUpRight,
  Rocket,
  DollarSign,
  Eye,
  ChevronRight,
  PenLine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard — AfriHub Founders",
  description: "Manage your founder profile, track your startup metrics, and connect with the ecosystem.",
};

const dashboardStats = [
  { label: "Profile Views", value: "1,240", change: "+18%", icon: Eye, positive: true },
  { label: "Connections", value: "84", change: "+5", icon: Users, positive: true },
  { label: "Funding Interest", value: "12", change: "+3", icon: DollarSign, positive: true },
  { label: "Ecosystem Score", value: "92", change: "+2pts", icon: Star, positive: true },
];

const recentActivity = [
  { action: "ShopUp viewed your profile", time: "2 min ago", type: "view" },
  { action: "New connection request from Maya Health", time: "1 hr ago", type: "connect" },
  { action: "Your startup was featured in the directory", time: "3 hrs ago", type: "feature" },
  { action: "Investor Insight report published", time: "Yesterday", type: "report" },
];

const quickLinks = [
  { label: "Update Company Profile", href: "/dashboard/profile", icon: PenLine },
  { label: "Browse Directory", href: "/directory", icon: LayoutDashboard },
  { label: "Funding Tracker", href: "#", icon: TrendingUp },
  { label: "Mentors", href: "#", icon: Star },
];

export default function DashboardPage() {
  return (
    <div
      className="min-h-screen pt-16"
      style={{ backgroundColor: "#F0F9FF" }}
    >
      {/* Header */}
      <div style={{ backgroundColor: "#0F172A" }} className="pt-10 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                    fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                  }}
                >
                  F
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Welcome back</p>
                  <h1
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                  >
                    Founder Dashboard
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                id="dashboard-notifications"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                style={{ border: "1px solid rgba(186, 230, 253, 0.15)" }}
                aria-label="Notifications"
              >
                <Bell size={18} />
              </button>
              {/* Update Company Profile — ghost secondary button */}
              <Link
                href="/dashboard/profile"
                id="dashboard-update-profile"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200"
                style={{
                  border: "1px solid rgba(186, 230, 253, 0.2)",
                  background: "rgba(255,255,255,0.05)",
                  fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                }}
              >
                <PenLine size={15} />
                Update Profile
              </Link>

              <Link
                href="/directory"
                className="btn-primary text-sm"
              >
                View My Listing
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">

        {/* ── Update Company Profile Banner ── */}
        <Link
          href="/dashboard/profile"
          id="dashboard-profile-banner"
          className="group flex items-center justify-between w-full rounded-2xl px-6 py-5 mb-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
          style={{
            background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 60%, #075985 100%)",
            boxShadow: "0 4px 24px rgba(14, 165, 233, 0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            border: "1px solid rgba(186, 230, 253, 0.3)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <PenLine size={20} className="text-white" />
            </div>
            <div>
              <p
                className="text-white font-bold text-base"
                style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                Update Company Profile
              </p>
              <p className="text-sky-100/80 text-xs mt-0.5">
                Keep your startup details, funding info, and team up to date.
              </p>
            </div>
          </div>
          <ArrowUpRight
            size={22}
            className="text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
          />
        </Link>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(14, 165, 233, 0.12)", border: "1px solid rgba(14, 165, 233, 0.2)" }}
                  >
                    <Icon size={17} style={{ color: "#0EA5E9" }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(14, 165, 233, 0.1)",
                      color: "#0EA5E9",
                    }}
                  >
                    {stat.change}
                  </span>
                </div>
                <p
                  className="text-2xl font-extrabold mb-0.5"
                  style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6">
            <h2
              className="font-bold text-lg mb-5"
              style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              Recent Activity
            </h2>
            <ul className="space-y-4">
              {recentActivity.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 pb-4 border-b last:border-b-0 last:pb-0"
                  style={{ borderColor: "#BAE6FD" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(14, 165, 233, 0.1)" }}
                  >
                    <Rocket size={14} style={{ color: "#0EA5E9" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#0F172A" }}>
                      {item.action}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="glass-card rounded-2xl p-6">
            <h2
              className="font-bold text-lg mb-5"
              style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              Quick Actions
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      id={`dashboard-quicklink-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-cyan-50 transition-colors group"
                      style={{ border: "1px solid #BAE6FD" }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} style={{ color: "#0EA5E9" }} />
                        <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                          {link.label}
                        </span>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-slate-400 group-hover:text-cyan-500 transition-colors"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Upgrade Banner */}
            <div
              className="mt-6 rounded-xl p-4 text-center"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
            >
              <Rocket size={20} className="text-white mx-auto mb-2" />
              <p
                className="text-white font-bold text-sm mb-1"
                style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                Upgrade to Pro
              </p>
              <p className="text-white/80 text-xs mb-3">
                Unlock investor introductions and featured placement.
              </p>
              <button
                id="dashboard-upgrade-btn"
                className="w-full bg-white text-cyan-600 font-bold text-xs py-2 rounded-lg hover:bg-slate-50 transition-colors"
                style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
