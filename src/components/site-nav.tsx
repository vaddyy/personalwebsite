"use client";

import { usePathname } from "next/navigation";

import { navItems } from "@/lib/content";
import { RevealCounter } from "@/components/reveal-system";

type SiteNavProps = {
  showCounter?: boolean;
};

export function SiteNav({ showCounter = false }: SiteNavProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pathname = usePathname() || "/";
  const withoutBasePath = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
  const currentPath = withoutBasePath !== "/" && withoutBasePath.endsWith("/") ? withoutBasePath.slice(0, -1) : withoutBasePath;

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <ul className="site-nav-list">
          {navItems.map((item) => {
            const href = item.href === "/" ? `${basePath}/` : `${basePath}${item.href}/`;

            return (
              <li key={item.href}>
                <a className="site-nav-link" data-active={currentPath === item.href} href={href}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {showCounter ? <RevealCounter /> : null}
    </header>
  );
}
