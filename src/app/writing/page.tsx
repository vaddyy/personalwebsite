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
      "My Kingston dissertation looked at the gap between sustainable language and public trust. The interesting part was not the claim, but whether people believed it.",
    meta: "Kingston",
  },
  {
    title: "Insight Narratives",
    description:
      "The kind of writing that has to be calm, sharp, and useful. Less decoration, more finding the one sentence that makes a messy finding land.",
    meta: "Cision",
  },
  {
    title: "Content Engines",
    description:
      "At Tealfeed, writing was not just publishing. It was choosing angles, shaping pages, improving search, and giving readers a better reason to stay.",
    meta: "Tealfeed",
  },
  {
    title: "Post-Campaign Truths",
    description:
      "I like the honest bit after a campaign: what pulled people in, what quietly missed, and what the next idea should learn before it gets too confident.",
    meta: "Dab of India",
  },
  {
    title: "Brand Thinking",
    description:
      "Positioning, loyalty, behaviour, promise. The formal words are fine, but the useful work is finding the thought a brand can keep returning to.",
    meta: "Strategy",
  },
  {
    title: "Small Edits",
    description:
      "A headline gets tighter. A paragraph loses its wobble. A deck stops sounding like a deck. Tiny changes, weirdly large effect.",
    meta: "Ongoing",
  },
];

export default function WritingPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Writing"
        description="Writing is how I make a thought behave. Sometimes it is research, sometimes copy, sometimes a line in a deck that does more work than the chart underneath it."
        items={writingItems}
      />
    </SiteShell>
  );
}
