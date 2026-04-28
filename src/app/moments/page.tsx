import type { Metadata } from "next";

import { InteriorPage } from "@/components/interior-page";
import { SiteShell } from "@/components/site-shell";
import { profileLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Moments",
  description: "Coffee, London days, and small observations by Vishal Dhuper.",
};

const momentItems = [
  {
    title: "Coffee",
    description:
      "A proper daily ritual, and occasionally a small excuse to document cups, counters, cafes, and the colour brown doing good work.",
    meta: "@broonbrown",
    href: profileLinks.broonbrown,
  },
  {
    title: "London",
    description:
      "Where I currently live, walk, listen, people-watch, and pretend every quick errand is research for something.",
    meta: "Now",
  },
  {
    title: "Slow Starts",
    description:
      "Some days begin with notes before notifications. Those are usually the better ones, even if the coffee is doing most of the labour.",
    meta: "Mornings",
  },
  {
    title: "Ahmednagar to Pune",
    description:
      "Small-town roots, Pune years, and the kind of distance that makes you notice what has quietly stayed with you.",
    meta: "Home-ish",
  },
  {
    title: "Little Patterns",
    description:
      "I like spotting what repeats: the line in a conversation, the thing people order, the angle a story keeps trying to become.",
    meta: "Daily",
  },
  {
    title: "Good Detours",
    description:
      "Coffee shops, bookshops, side streets, half-planned walks, and the very necessary art of doing something for no KPI whatsoever.",
    meta: "Often",
  },
];

export default function MomentsPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Moments"
        description={
          <>
            The non-work bit is mostly coffee, walks, small observations, and saving little proof that the day happened. More coffee
            lives on{" "}
            <a className="page-inline-link" href={profileLinks.broonbrown} rel="noreferrer" target="_blank">
              @broonbrown
            </a>
            .
          </>
        }
        items={momentItems}
      />
    </SiteShell>
  );
}
