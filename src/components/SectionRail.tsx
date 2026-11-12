import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../data/portfolioData";

export default function SectionRail() {
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (docHeight - scrollBottom < 80) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      if (window.scrollY < 180) {
        setActiveSection(NAV_ITEMS[0].id);
        return;
      }

      const viewportFocus = window.scrollY + window.innerHeight * 0.35;
      let currentId = NAV_ITEMS[0].id;

      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= viewportFocus) {
          currentId = id;
        }
      }

      setActiveSection(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (!isHome) return null;

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex fixed left-16 top-1/2 -translate-y-1/2 z-30 flex-col gap-1.5 w-44 pl-3"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60 mb-2 pl-2">
        Sections
      </span>

      {NAV_ITEMS.map(({ id, label }, idx) => {
        const isActive = activeSection === id;
        const sectionNumber = `0${idx + 1}`;

        return (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(id)}
            aria-current={isActive ? "location" : undefined}
            className={`group relative flex items-center gap-3 py-1.5 px-2 rounded-lg text-left transition-all duration-300 ease-out focus-visible:outline-accent ${
              isActive
                ? "translate-x-2 scale-[1.06] opacity-100 text-foreground bg-surface/90 border border-accent/40 shadow-sm"
                : "opacity-45 text-muted hover:opacity-85 hover:translate-x-1 hover:text-foreground border border-transparent"
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-5 bg-accent"
                  : "w-2.5 bg-border group-hover:w-4 group-hover:bg-muted"
              }`}
            />
            <span
              className={`font-mono text-[11px] transition-colors duration-300 ${
                isActive ? "text-accent font-semibold" : "text-muted/80"
              }`}
            >
              {sectionNumber}
            </span>
            <span
              className={`text-xs tracking-wide transition-all duration-300 ${
                isActive
                  ? "font-semibold text-foreground"
                  : "font-medium text-muted group-hover:text-foreground"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
