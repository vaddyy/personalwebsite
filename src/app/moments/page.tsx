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
      "The daily ceremony. I like the counter, the cup, the first sip, and the oddly specific happiness of finding a place that gets the small things right.",
    meta: "@broonbrown",
  },
  {
    title: "London",
    description:
      "A good city for noticing things. Someone's tote bag, a shop window, a half-heard sentence, a street that looks different after rain.",
    meta: "Now",
  },
  {
    title: "Morning Bias",
    description:
      "I am better when the day starts before the phone does. Coffee first, a few notes, then the world can start making requests.",
    meta: "Mornings",
  },
  {
    title: "Home Coordinates",
    description:
      "Ahmednagar gave me the small-town base note. Pune added the student years, work years, and a lot of the early figuring-it-out.",
    meta: "India",
  },
  {
    title: "Little Patterns",
    description:
      "I collect repeats without meaning to: what people order, what they complain about, how a room changes when one person walks in.",
    meta: "Daily",
  },
  {
    title: "Good Detours",
    description:
      "Side streets, second coffees, bookstores, long walks, and the very necessary art of doing something that does not need to become productive.",
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
            Away from work, I am usually walking, noticing, over-ordering coffee, or taking a small day too seriously in the best way.
            The coffee archive lives on{" "}
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
