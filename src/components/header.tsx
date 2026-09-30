"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeaderLabels, Locale, NavItem } from "@/data/content";
import { ThemeToggle } from "./theme-toggle";

type HeaderProps = {
  nav: NavItem[];
  labels: HeaderLabels;
  otherLocale: Locale;
  otherLocaleHref: string;
};

export function Header({ nav, labels, otherLocale, otherLocaleHref }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-shell flex h-18 items-center justify-between">
        <a className="logo-mark" href="#top" aria-label={labels.home}>
          AKB<span>.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={labels.primaryNav}>
          {nav.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="icon-button language-switch"
            href={otherLocaleHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={labels.switchLanguage}
          >
            {labels.otherLanguage}
          </a>
          <ThemeToggle labels={labels.theme} />
          <button
            type="button"
            className="icon-button md:hidden"
            aria-label={open ? labels.closeNav : labels.openNav}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}
        aria-label={labels.mobileNav}
      >
        {nav.map((item) => (
          <a className="mobile-nav-link" href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
