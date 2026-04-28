import type { Metadata } from "next";

import { InteriorPage } from "@/components/interior-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing, content thinking, and strategy notes by Vishal Dhuper.",
};

const writingItems = [
  {
    title: "Greenwashing in Fashion",
    description:
      "A dissertation about what brands say, what people believe, and where sustainable marketing starts to sound a bit too polished.",
    meta: "Kingston",
  },
  {
    title: "Stories From Data",
    description:
      "The work-report kind of writing: coverage peaks, sentiment shifts, and one clean paragraph that makes the whole room nod.",
    meta: "Cision",
  },
  {
    title: "Content That Travelled",
    description:
      "At Tealfeed, writing became distribution, SEO, community, and a steady little engine for 120% more organic traffic.",
    meta: "Tealfeed",
    href: "https://tealfeed.com/",
  },
  {
    title: "Campaign Notes",
    description:
      "What worked, what did not, and the surprisingly useful habit of admitting both before the next post goes live.",
    meta: "Dab of India",
  },
  {
    title: "Brand Platforms",
    description:
      "The more formal side of the same obsession: positioning, loyalty, consumer behaviour, and finding the sentence a brand can stand on.",
    meta: "Marketing",
  },
  {
    title: "Thoughtful Overthinking",
    description:
      "My favourite mode, honestly. A half-note, a better headline, a sharper angle, and suddenly the thing has a pulse.",
    meta: "Always",
  },
];

export default function WritingPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Writing"
        description="Writing is where I clean up the mess in my head. Sometimes it becomes strategy, sometimes content, sometimes a report. The aim is usually the same: make the point feel obvious after someone reads it."
        items={writingItems}
      />
    </SiteShell>
  );
}
