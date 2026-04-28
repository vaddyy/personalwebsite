import type { ReactNode } from "react";

import { NoiseTexture } from "@/components/noise-texture";
import { SiteNav } from "@/components/site-nav";

type SiteShellProps = {
  children: ReactNode;
  showCounter?: boolean;
  withVideo?: boolean;
};

export function SiteShell({ children, showCounter = false, withVideo = false }: SiteShellProps) {
  return (
    <div className="page-frame">
      <SiteNav showCounter={showCounter} />
      {withVideo ? (
        <div className="video-plane" aria-hidden="true">
          <video
            autoPlay
            className="video-background"
            data-ready="true"
            data-state="closed"
            disablePictureInPicture
            loop
            muted
            playsInline
            preload="auto"
            src="https://cdn.ped.ro/video-optimised.mp4"
          />
        </div>
      ) : null}
      {children}
      <NoiseTexture />
    </div>
  );
}
