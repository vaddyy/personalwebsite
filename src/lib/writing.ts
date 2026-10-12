export type Essay = {
  slug: string;
  title: string;
  category: string;
  format: string;
  excerpt: string;
  provenance: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const essays: Essay[] = [
  {
    slug: "a-little-more-proof",
    title: "What does 'sustainable' actually mean?",
    category: "Research",
    format: "Dissertation / adapted essay",
    excerpt: "Reassuring words, uncertain shoppers, and what happens when a promise asks the reader to do all the work.",
    provenance: "Adapted for this portfolio from my Kingston University MSc dissertation, Unveiling Greenwashing: Understanding its Impact on Consumer Behaviour in the Fashion Industry. This is a short interpretation, not the original dissertation or a representative population study.",
    sections: [
      { paragraphs: ["I kept seeing words like 'conscious', 'responsible' and 'better' on clothes. They sounded good. I wasn't always sure what they were telling me.", "So my dissertation looked at greenwashing and trust in fashion, through qualitative interviews with millennial and Gen Z consumers. I wanted to understand how people made sense of these claims, and what happened when they weren't convinced."] },
      { heading: "Caring is not the same as knowing.", paragraphs: ["In the interview analysis, concern about the environment sat alongside patchy knowledge of materials, certifications and supply chains. People could care deeply and still be unsure what a claim actually meant. Social media and influencers helped fill that gap, but did not always make it clearer.", "That matters because vague language asks the shopper to do the verification work. 'Conscious' and 'better' feel reassuring. They are less helpful when no one can tell you what changed, compared with what, or how it was checked."] },
      { heading: "The price tag is still in the room.", paragraphs: ["Sustainability did not arrive in an empty decision. Price, style and quality were already there. The research surfaced tension between ethical intentions and the practical limits of a purchase. A brand that treats this as simple indifference misses the person behind the compromise."] },
      { heading: "A smaller claim can carry more weight.", paragraphs: ["The useful direction was towards specificity: concrete action, independent evidence, and an honest account of what is not solved yet. Acknowledging a limit can be more credible than polishing it away.", "My takeaway is fairly simple. Don't make the promise bigger than the proof. Make the proof easier to understand."] },
    ],
  },
  {
    slug: "under-the-chart",
    title: "The sentence underneath the chart.",
    category: "Practice",
    format: "Working note / portfolio draft",
    excerpt: "On the small piece of writing that turns an observation into something useful.",
    provenance: "New portfolio draft, informed by my media-analysis reporting practice. It does not reproduce a client report or claim a measured business outcome.",
    sections: [
      { paragraphs: ["A surprising amount of reporting comes down to writing one useful sentence. Not a grand conclusion. Just a line that helps someone understand why they're looking at this chart.", "It's easy to write 'coverage increased' under a chart showing coverage increasing. I've done it. It doesn't give the reader very much they couldn't already see."] },
      { heading: "What can I actually say?", paragraphs: ["I start by going back to the material. Which stories travelled? Was there one source behind the change? Is this genuinely new interest, or the same article appearing in more places?", "Then I try to write the smallest explanation the evidence can support. What happened, why it matters, and what I still don't know. The last part belongs in the report too."] },
      { heading: "Make it easier to follow.", paragraphs: ["A good line doesn't need to sound impressive. It needs to give the reader somewhere to go next: a question to ask, a message to check, a story to look at more closely.", "That's usually the sentence I spend the longest on."] },
    ],
  },
  {
    slug: "leave-room-for-a-person",
    title: "People don't fit on a slide.",
    category: "Notebook",
    format: "Short reflection / portfolio draft",
    excerpt: "A thought about audience descriptions, and all the bits they tend to leave out.",
    provenance: "New editorial draft for this portfolio. A personal reflection, not an externally published article or a documented campaign result.",
    sections: [
      { paragraphs: ["An audience description can make a person sound very consistent. One age, one attitude, one reason to buy. I understand why we do it. It makes a brief easier to work with.", "But the same person can be careful on Monday and impulsive on Friday. They can like the product and dislike the advert. They can care about making a better choice and still buy the cheaper one."] },
      { heading: "Keep the awkward bits.", paragraphs: ["I'd rather have an audience description that leaves room for that. Something specific enough to be useful, without pretending the person has only one thing going on.", "Sometimes the contradiction tells you more than the label. That's the part I want to keep in the brief, even if it makes the slide a little less tidy."] },
    ],
  },
];

export function readTime(essay: Essay) {
  const words = essay.sections.flatMap(section => section.paragraphs).join(" ").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
