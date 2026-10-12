"use client";

import { Fragment, useId, useState } from "react";

const studies = {
  work: {
    label: "A headline worth a second look",
    disclosure: "An imaginary headline. A real way of thinking about it.",
    notes: [
      { word: "Everyone", title: "Who, exactly?", text: "A handful of loud voices isn't everyone. I look at who is speaking, what is being repeated, and whose response is missing." },
      { word: "talking", title: "Saying what?", text: "A mention isn't an endorsement. I read the conversation behind the number: the questions, the complaints, and the things people keep coming back to." },
      { word: "us", title: "Do they mean us?", text: "The same name can belong to very different things. I check the context before letting a mention become part of the story." },
    ],
  },
  writing: {
    label: "Three words I kept seeing",
    disclosure: "Questions from my research on greenwashing and trust.",
    notes: [
      { word: "better", title: "Better than what?", text: "The comparison is doing a lot of work. Better for the shopper, the people making it, or the environment? The word alone doesn't tell us." },
      { word: "conscious", title: "What actually changed?", text: "A reassuring word can leave the reader with all the questions. I want to know what was done differently, not just how it was described." },
      { word: "responsible", title: "Where is the proof?", text: "A claim becomes more useful when the evidence is easy to follow. The limits matter too: what can this promise honestly cover?" },
    ],
  },
};

export function WordStudy({ kind }: { kind: keyof typeof studies }) {
  const study = studies[kind];
  const [active, setActive] = useState(0);
  const id = useId();
  function word(index: number) {
    return <button type="button" className="word-choice" aria-pressed={active === index} aria-controls={`${id}-notes`} onClick={() => setActive(index)}>{study.notes[index].word}</button>;
  }

  return (
    <div className="word-study" data-study={kind}>
      <p className="eyebrow">{study.label}</p>
      <div className="word-sentence" role="group" aria-label={study.label}>
        {kind === "work" ? <>{word(0)} is {word(1)} about {word(2)}.</> : <>A {study.notes.map((note, i) => <Fragment key={note.word}>{word(i)}{i < 2 ? ", " : " "}</Fragment>)}choice.</>}
      </div>
      <div className="word-notes" id={`${id}-notes`} aria-live="polite" aria-atomic="true">
        {study.notes.map((note, index) => <div className="word-note" key={note.word} data-active={active === index} aria-hidden={active !== index} inert={active !== index}><p className="word-question">{note.title}</p><p>{note.text}</p></div>)}
      </div>
      <p className="source-caption word-disclosure">{study.disclosure}</p>
    </div>
  );
}
