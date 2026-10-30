import type { ReactNode } from "react";

import { NoiseTexture } from "@/components/noise-texture";
import { SiteNav } from "@/components/site-nav";

type SiteShellProps = {
  children: ReactNode;
  showCounter?: boolean;
  isHome?: boolean;
};

export function SiteShell({ children, showCounter = false, isHome = false }: SiteShellProps) {
  return (
    <div className={`page-frame${isHome ? "" : " interior-frame"}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNav showCounter={showCounter} />
      {children}
      <NoiseTexture />
    </div>
  );
}
