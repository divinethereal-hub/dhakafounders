import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Startup Directory", href: "/directory" },
    { label: "Founder Dashboard", href: "/dashboard" },
    { label: "Get Listed", href: "/directory" },
    { label: "Community", href: "#community" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Events", href: "#" },
    { label: "Funding Tracker", href: "#" },
    { label: "Mentor Network", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F172A" }} className="text-slate-400">
      {/* Top CTA Strip */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(186, 230, 253, 0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                Ready to join the ecosystem?
              </h3>
              <p className="text-slate-400 text-sm">
                Support each other's growth and build your network with Africa's top founders.
              </p>
            </div>
            <Link
              href="/directory"
              className="btn-primary whitespace-nowrap"
            >
              Get Listed Free
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
              >
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span
                className="font-bold text-lg text-white"
                style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                AfriHub<span className="text-gradient-cyan">Founders</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              The engine powering Africa's next generation of builders.
              Institutional credibility blended with startup ambition.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  style={{ border: "1px solid rgba(186, 230, 253, 0.15)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-semibold text-sm mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(186, 230, 253, 0.1)" }}
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AfriHub Founders. All rights reserved. Built for Africa 🌍
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
