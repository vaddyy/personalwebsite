import { HeroStatement } from "@/components/hero-statement";
import { RevealProvider } from "@/components/reveal-system";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <RevealProvider>
      <div className="page-frame">
        <SiteNav />
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
        <HeroStatement />
        <svg className="noise-texture" aria-hidden="true">
          <filter id="noise-filter">
            <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-filter)" />
        </svg>
      </div>
    </RevealProvider>
  );
}
