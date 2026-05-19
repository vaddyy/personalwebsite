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
    title: "The First Cup",
    description:
      "Not a personality trait, unfortunately still a ritual. Counter, cup, first sip, the small theatre of a place getting the basics right.",
    meta: "@broonbrown",
  },
  {
    title: "Broon Brown",
    description:
      "A little coffee archive for cups I remembered, corners I liked, and places that understood the assignment without announcing it.",
    meta: "Archive",
  },
  {
    title: "London On Foot",
    description:
      "The best version of the city is between plans: tote bags, shop windows, odd signage, wet pavements, someone saying something perfect.",
    meta: "Walks",
  },
  {
    title: "The Quiet Start",
    description:
      "The day is kinder before notifications. A few notes, a slower brain, then everyone else can begin emailing.",
    meta: "Mornings",
  },
  {
    title: "Home Notes",
    description:
      "Ahmednagar is the base note. Pune is the chapter with early freedom. London is the sentence that changed tense.",
    meta: "Places",
  },
  {
    title: "Almost Photos",
    description:
      "Light on a table, a good wrapper, coffee before it cools, one strange sign. Proof that the small stuff keeps happening.",
    meta: "Camera roll",
  },
  {
    title: "The Useless Detour",
    description:
      "Bookshops, second coffees, side streets, no lesson. A healthy little refusal to optimise the whole day.",
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
            Moments is the non-work archive: coffee, walks, tiny rituals, and the kind of noticing that does not need to become a report. Coffee lives on{" "}
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
