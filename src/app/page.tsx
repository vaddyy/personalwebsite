import { HeroStatement } from "@/components/hero-statement";
import { RevealProvider } from "@/components/reveal-system";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <RevealProvider>
      <SiteShell showCounter withVideo>
        <HeroStatement />
      </SiteShell>
    </RevealProvider>
  );
}
