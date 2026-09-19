"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const navLinks = [
  { label: "Directory",  href: "/directory" },
  { label: "Blog",       href: "/blog" },
  { label: "Dashboard",  href: "/dashboard" },
  { label: "Community",  href: "#community" },
  { label: "About",      href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [joinHovered, setJoinHovered] = useState(false);

  // A link is active when the pathname starts with its href (exact for "/")
  const isActive = (href: string) =>
    href.startsWith("#")
      ? false
      : href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── Dynamic Glassmorphic Navbar Container ── */
  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    background: scrolled
      ? "rgba(15, 23, 42, 0.88)"
      : "rgba(15, 23, 42, 0.65)",
    borderBottom: scrolled
      ? "1px solid rgba(186, 230, 253, 0.16)"
      : "1px solid rgba(186, 230, 253, 0.08)",
    boxShadow: scrolled
      ? "0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
      : "0 4px 20px -2px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
  };

  /* ── Cyan Accent Glow Line ── */
  const accentLineStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.3) 20%, #0EA5E9 50%, #38BDF8 65%, transparent 100%)",
    boxShadow: "0 0 12px rgba(14, 165, 233, 0.7)",
    opacity: scrolled ? 1 : 0.75,
    transition: "opacity 0.35s ease",
  };

  /* ── Join Button Styles (Brand Cyan + Subtle Hover Animation) ── */
  const joinBtnStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
    color: "#FFFFFF",
    fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
    fontWeight: 700,
    fontSize: "0.875rem",
    padding: "0.5625rem 1.25rem",
    borderRadius: "0.625rem",
    border: "1px solid rgba(186, 230, 253, 0.35)",
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: joinHovered
      ? "0 8px 28px rgba(14, 165, 233, 0.55), 0 0 15px rgba(14, 165, 233, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35)"
      : "0 4px 16px rgba(14, 165, 233, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
    transform: joinHovered ? "translateY(-1.5px)" : "translateY(0)",
    filter: joinHovered ? "brightness(1.06)" : "brightness(1)",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    overflow: "hidden",
  };

  return (
    <>
      <header style={headerStyle} aria-label="Main navigation">
        {/* Top cyan accent line */}
        <div style={accentLineStyle} aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo with Brand Heading Typography ── */}
            <Link
              href="/"
              id="navbar-logo"
              className="flex items-center gap-2.5 group"
              aria-label="AfriHub Founders — Home"
            >
              {/* Glowing Icon Mark */}
              <div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(14,165,233,0.6)]"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                  boxShadow: "0 0 18px rgba(14, 165, 233, 0.45)",
                  border: "1px solid rgba(186, 230, 253, 0.4)",
                }}
              >
                <Zap
                  size={17}
                  className="text-white fill-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>

              {/* Authoritative Heading Typography (Plus Jakarta Sans 800) */}
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.03em",
                }}
                className="text-white flex items-center tracking-tight"
              >
                <span>Afri</span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #38BDF8 0%, #0EA5E9 50%, #0284C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="ml-0.5"
                >
                  Hub Founders
                </span>
                {/* Brand Pulse Indicator */}
                <span
                  className="inline-block w-1.5 h-1.5 ml-1.5 rounded-full bg-[#0EA5E9] shadow-[0_0_8px_#0EA5E9]"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const isDirectory = link.href === "/directory";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`navbar-link-${link.label.toLowerCase()}`}
                    aria-current={active ? "page" : undefined}
                    style={{
                      fontFamily: "var(--font-inter, var(--font-body, 'Inter', sans-serif))",
                      fontWeight: active ? 600 : 500,
                      fontSize: "0.875rem",
                      color: active ? "#ffffff" : undefined,
                      background: active ? "rgba(14, 165, 233, 0.10)" : undefined,
                      border: active
                        ? "1px solid rgba(14, 165, 233, 0.25)"
                        : "1px solid transparent",
                    }}
                    className="relative px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 group flex items-center gap-1.5"
                  >
                    {link.label}

                    {/* Directory badge dot — always visible to signal primary feature */}
                    {isDirectory && (
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background: active ? "#0EA5E9" : "rgba(14, 165, 233, 0.55)",
                          boxShadow: active ? "0 0 6px #0EA5E9" : "none",
                          transition: "all 0.2s ease",
                        }}
                      />
                    )}

                    {/* Cyan underline — full-width when active, animates in on hover */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "2px",
                        width: active ? "60%" : "0%",
                        background: "linear-gradient(90deg, #0EA5E9, #38BDF8)",
                        borderRadius: "9999px",
                        boxShadow: active ? "0 0 8px rgba(14, 165, 233, 0.8)" : "none",
                        transition: "width 0.25s ease, box-shadow 0.25s ease",
                      }}
                      className={active ? undefined : "group-hover:w-3/5"}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA Buttons ── */}
            <div className="hidden md:flex items-center gap-3">
              <Show when="signed-out">
                {/* Sign In — Glass/Ghost Button */}
                <SignInButton mode="modal">
                  <button
                    id="navbar-signin"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                    className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer"
                  >
                    Sign In
                  </button>
                </SignInButton>

                {/* Sign Up — High-contrast Primary Cyan Button with Hover Animation */}
                <SignUpButton mode="modal">
                  <button
                    id="navbar-join"
                    style={joinBtnStyle}
                    onMouseEnter={() => setJoinHovered(true)}
                    onMouseLeave={() => setJoinHovered(false)}
                    className="group/joinbtn active:scale-[0.98]"
                  >
                    <span>Join Free</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2.5}
                      className="transition-transform duration-200 group-hover/joinbtn:translate-x-0.5 group-hover/joinbtn:-translate-y-0.5"
                    />
                  </button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                {/* Dashboard link for signed-in users */}
                <Link
                  href="/dashboard"
                  id="navbar-dashboard"
                  style={{
                    fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 border border-white/10 hover:border-cyan-400/40 transition-all duration-200"
                >
                  Dashboard
                  <ArrowUpRight size={13} strokeWidth={2.5} className="opacity-60" />
                </Link>

                {/* User avatar + account menu */}
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 ring-2 ring-cyan-400/40 hover:ring-cyan-400/70 transition-all duration-200",
                    },
                  }}
                />
              </Show>
            </div>

            {/* ── Mobile Menu Toggle Button ── */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white transition-all duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(186, 230, 253, 0.15)",
                background: "rgba(255, 255, 255, 0.04)",
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Glassmorphism Drawer ── */}
        {isOpen && (
          <div
            className="md:hidden"
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderTop: "1px solid rgba(186, 230, 253, 0.12)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
              animation: "slideDown 0.22s ease forwards",
            }}
          >
            <nav
              className="flex flex-col px-4 py-5 gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                  const active = isActive(link.href);
                  const isDirectory = link.href === "/directory";
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      style={{
                        fontFamily: "var(--font-inter, var(--font-body, 'Inter', sans-serif))",
                        fontWeight: active ? 600 : 500,
                        color: active ? "#ffffff" : undefined,
                        background: active ? "rgba(14, 165, 233, 0.08)" : undefined,
                        borderColor: active
                          ? "rgba(14, 165, 233, 0.35)"
                          : "transparent",
                        borderLeftColor: active ? "#0EA5E9" : "transparent",
                        borderLeftWidth: "2px",
                      }}
                      className="flex items-center gap-2 text-slate-300 hover:text-white py-3 px-3 rounded-xl hover:bg-white/8 transition-all duration-200 text-sm border border-transparent hover:border-white/10"
                    >
                      {link.label}
                      {/* Directory badge dot on mobile too */}
                      {isDirectory && (
                        <span
                          aria-hidden="true"
                          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background: active ? "#0EA5E9" : "rgba(14, 165, 233, 0.55)",
                            boxShadow: active ? "0 0 6px #0EA5E9" : "none",
                          }}
                        />
                      )}
                    </Link>
                  );
                })}

              {/* Mobile CTAs */}
              <div
                className="flex flex-col gap-2.5 mt-4 pt-4"
                style={{ borderTop: "1px solid rgba(186, 230, 253, 0.12)" }}
              >
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center text-sm font-semibold text-slate-300 py-3 rounded-xl border transition-colors hover:text-white hover:border-cyan-400/40 cursor-pointer"
                      style={{
                        borderColor: "rgba(186, 230, 253, 0.2)",
                        background: "transparent",
                        fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
                      }}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="group/mjoin w-full text-center text-sm font-bold text-white py-3 rounded-xl flex items-center justify-center gap-2 border border-sky-300/30 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                        boxShadow: "0 4px 20px rgba(14, 165, 233, 0.45)",
                        fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
                      }}
                    >
                      <span>Join Free</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.5}
                        className="group-hover/mjoin:translate-x-0.5 group-hover/mjoin:-translate-y-0.5 transition-transform duration-200"
                      />
                    </button>
                  </SignUpButton>
                </Show>

                <Show when="signed-in">
                  {/* User row: avatar + label */}
                  <div className="flex items-center gap-3 px-1 py-2">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-9 h-9 ring-2 ring-cyan-400/40",
                        },
                      }}
                    />
                    <span
                      className="text-sm text-slate-300"
                      style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 500 }}
                    >
                      My Account
                    </span>
                  </div>

                  {/* Dashboard CTA */}
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="group/dash w-full text-center text-sm font-bold text-white py-3 rounded-xl flex items-center justify-center gap-2 border border-sky-300/30 active:scale-[0.98] transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                      boxShadow: "0 4px 20px rgba(14, 165, 233, 0.45)",
                      fontFamily: "var(--font-plus-jakarta, var(--font-heading, 'Plus Jakarta Sans', sans-serif))",
                    }}
                  >
                    <span>Go to Dashboard</span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2.5}
                      className="group-hover/dash:translate-x-0.5 group-hover/dash:-translate-y-0.5 transition-transform duration-200"
                    />
                  </Link>
                </Show>
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
