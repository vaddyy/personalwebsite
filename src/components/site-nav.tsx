"use client";

import { navItems } from "@/lib/content";
import { RevealCounter } from "@/components/reveal-system";

export function SiteNav() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <ul className="site-nav-list">
          {navItems.map((item, index) => (
            <li key={item}>
              <a className="site-nav-link" data-active={index === 0} href={index === 0 ? `${basePath}/` : "#contact"}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <RevealCounter />
    </header>
  );
}
