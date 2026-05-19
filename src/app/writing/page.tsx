import type { Metadata } from "next";

import { InteriorPage } from "@/components/interior-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing, content thinking, and strategy notes by Vishal Dhuper.",
};

const writingItems = [
  {
    title: "Greenwashing, Without The Fog",
    description:
      "My Kingston dissertation looked at sustainable fashion claims and the fragile moment where belief either arrives or quietly leaves.",
    meta: "Research",
  },
  {
    title: "The Sentence Under The Chart",
    description:
      "The part I care about in reports: the one line that makes the finding obvious without making it feel flattened.",
    meta: "Insights",
  },
  {
    title: "Hooks That Earn A Click",
    description:
      "At Tealfeed, writing meant building better doors: useful headlines, search-friendly angles and reasons to keep reading.",
    meta: "Content",
  },
  {
    title: "After The Campaign",
    description:
      "The honest note after the rush: what travelled, what dragged, what surprised us, and what the next brief should inherit.",
    meta: "Learning",
  },
  {
    title: "Brand Lines",
    description:
      "I like the sentence a brand can return to. Plain enough to say out loud, specific enough to be worth keeping.",
    meta: "Positioning",
  },
  {
    title: "The Last Pass",
    description:
      "Cut the wobble. Keep the pulse. Make the paragraph sound like a person thought about it, not like a template escaped.",
    meta: "Editing",
  },
];

export default function WritingPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Writing"
        description="Writing is where I make the messy thing behave. Not by making it fancy; by making it smaller, truer, and easier to carry."
        items={writingItems}
      />
    </SiteShell>
  );
}
