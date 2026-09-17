"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Directory",  href: "/directory" },
  { label: "Dashboard",  href: "/dashboard" },
  { label: "Community",  href: "#community" },
  { label: "About",      href: "#about" },
];

/* ─────────────────────────────────────────────────
   Inline styles as constants — keeps JSX readable
───────────────────────────────────────────────── */
const logoIconStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
  boxShadow: "0 0 16px rgba(14, 165, 233, 0.4)",
};

const logoWordStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
  fontWeight: 800,
  fontSize: "1.2rem",
  letterSpacing: "-0.02em",
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body, 'Inter', sans-serif)",
  fontWeight: 500,
  fontSize: "0.875rem",
};

const joinBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
  color: "#fff",
  fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
  fontWeight: 700,
  fontSize: "0.875rem",
  padding: "0.5rem 1.125rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "0 4px 20px rgba(14, 165, 233, 0.35)",
  transition: "box-shadow 0.25s ease, transform 0.18s ease, filter 0.25s ease",
};

const joinBtnHoverStyle: React.CSSProperties = {
  boxShadow: "0 6px 28px rgba(14, 165, 233, 0.55)",
  transform: "translateY(-1px)",
  filter: "brightness(1.08)",
};

const signInBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  color: "#94A3B8",
  fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
  fontWeight: 600,
  fontSize: "0.875rem",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid rgba(186, 230, 253, 0.2)",
  textDecoration: "none",
  transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
  background: "transparent",
};

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [joinHovered, setJoinHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
    /* Always blurred glass — deepens on scroll */
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    background: scrolled
      ? "rgba(15, 23, 42, 0.82)"
      : "rgba(15, 23, 42, 0.45)",
    borderBottom: scrolled
      ? "1px solid rgba(186, 230, 253, 0.12)"
      : "1px solid rgba(186, 230, 253, 0.06)",
    boxShadow: scrolled
      ? "0 4px 32px rgba(0, 0, 0, 0.35)"
      : "none",
  };

  /* Cyan accent line at very top */
  const accentLineStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, #0EA5E9 40%, #38BDF8 60%, transparent 100%)",
    opacity: scrolled ? 1 : 0.6,
    transition: "opacity 0.35s ease",
  };

  return (
    <>
      <header style={headerStyle} aria-label="Main navigation">
        {/* Top accent line */}
        <div style={accentLineStyle} aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link
              href="/"
              id="navbar-logo"
              className="flex items-center gap-2.5 group"
              aria-label="Dhaka Founders — Home"
            >
              {/* Icon mark */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                style={logoIconStyle}
              >
                <Zap size={17} className="text-white" fill="white" />
              </div>

              {/* Wordmark */}
              <span style={logoWordStyle} className="text-white tracking-tight">
                Dhaka
                <span
                  style={{
                    background: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 60%, #7DD3FC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Founders
                </span>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`navbar-link-${link.label.toLowerCase()}`}
                  style={navLinkStyle}
                  className="relative text-slate-400 hover:text-white transition-colors duration-200 py-1 group"
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      height: "1.5px",
                      width: "0%",
                      background: "linear-gradient(90deg, #0EA5E9, #38BDF8)",
                      borderRadius: "9999px",
                      transition: "width 0.25s ease",
                    }}
                    className="group-hover:w-full"
                  />
                </Link>
              ))}
            </nav>

            {/* ── CTA Buttons ── */}
            <div className="hidden md:flex items-center gap-2">
              {/* Sign In — ghost */}
              <Link
                href="/dashboard"
                id="navbar-signin"
                style={signInBtnStyle}
                className="hover:text-white hover:border-cyan-400/50 hover:bg-white/5"
              >
                Sign In
              </Link>

              {/* Join Free — primary gradient CTA */}
              <Link
                href="/directory"
                id="navbar-join"
                style={{
                  ...joinBtnStyle,
                  ...(joinHovered ? joinBtnHoverStyle : {}),
                }}
                onMouseEnter={() => setJoinHovered(true)}
                onMouseLeave={() => setJoinHovered(false)}
              >
                Join Free
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white transition-colors duration-200 hover:bg-white/10"
              style={{ border: "1px solid rgba(186, 230, 253, 0.15)" }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {isOpen && (
          <div
            className="md:hidden"
            style={{
              background: "rgba(10, 18, 35, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(186, 230, 253, 0.1)",
              animation: "slideDown 0.22s ease forwards",
            }}
          >
            <nav
              className="flex flex-col px-4 py-5 gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)", fontWeight: 500 }}
                  className="text-slate-300 hover:text-white py-3 px-3 rounded-xl hover:bg-white/8 transition-all duration-200 text-sm border border-transparent hover:border-white/10"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTAs */}
              <div
                className="flex flex-col gap-2.5 mt-4 pt-4"
                style={{ borderTop: "1px solid rgba(186, 230, 253, 0.1)" }}
              >
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-semibold text-slate-300 py-3 rounded-xl border transition-colors hover:text-white hover:border-cyan-400/40"
                  style={{
                    borderColor: "rgba(186, 230, 253, 0.2)",
                    fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
                  }}
                >
                  Sign In
                </Link>
                <Link
                  href="/directory"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-bold text-white py-3 rounded-xl flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                    boxShadow: "0 4px 20px rgba(14, 165, 233, 0.4)",
                    fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
                  }}
                >
                  Join Free <ArrowUpRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Slide-down keyframe */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
