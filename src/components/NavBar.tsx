import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.05,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="/#top"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="inline-flex items-center gap-2.5 text-foreground hover:text-accent transition-colors shrink-0"
          aria-label="Arun Nadarajah — Back to top"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-border font-mono text-xs font-bold text-accent">
            {PROFILE.initials}
          </span>
          <span className="font-semibold tracking-tight text-sm sm:text-base">
            {PROFILE.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = isHome && activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface/70"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.cvPath}
            download={PROFILE.cvFileName}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-surface border border-border text-foreground hover:border-accent/60 hover:text-accent transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-border/60 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border px-4 py-4 space-y-1"
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = isHome && activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface-elevated"
                }`}
              >
                {label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-border/70">
            <a
              href={PROFILE.cvPath}
              download={PROFILE.cvFileName}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium bg-accent text-background hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}