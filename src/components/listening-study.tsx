"use client";

import { useId, useRef, useState } from "react";

const stages = [
  { label: "Find", title: "First, find the right posts.", note: "I write a search that knows what to include and what to leave out. Brand names and context belong in. Job ads and unrelated namesakes don't.", term: "Boolean / query building" },
  { label: "Sort", title: "What are people actually talking about?", note: "I group posts by product launches, partnerships and customer experience. That tells us what the conversation is about, separately from how people feel.", term: "Categories / segmentation" },
  { label: "Compare", title: "Compare like with like.", note: "Same dates, sources and languages across competitors. If a chart spikes, I read the posts behind it before deciding what caused the change.", term: "Dashboards / competitor intelligence" },
  { label: "Decide", title: "Then explain why it matters.", note: "A short brief: what changed, what the evidence says, how sure we are, and where the team could go next. That's the bit the charts can't do alone.", term: "Reporting / strategic insights" },
];

export function ListeningStudy() {
  const [active, setActive] = useState(0);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function move(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % stages.length;
    else if (event.key === "ArrowLeft") next = (index + stages.length - 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault(); setActive(next); buttons.current[next]?.focus();
  }
  return (
    <div className="listening-study">
      <div className="study-topline"><span>How I listen</span><span>Brandwatch / an example</span></div>
      <div className="study-tabs" role="tablist" aria-label="Listening process">
        {stages.map((stage, index) => <button key={stage.label} ref={el => { buttons.current[index] = el; }} id={`${id}-tab-${index}`} role="tab" type="button" aria-selected={active === index} aria-controls={`${id}-panel-${index}`} tabIndex={active === index ? 0 : -1} onKeyDown={e => move(e, index)} onClick={() => setActive(index)}><span className="tab-number">0{index + 1}</span>{stage.label}</button>)}
      </div>
      <div className="study-panels">{stages.map((stage, index) => (
        <div key={stage.label} id={`${id}-panel-${index}`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} hidden={active !== index} aria-hidden={active !== index} inert={active !== index} tabIndex={0} className="study-panel">
          <div className="study-art">
            {index === 0 && <div className="query-art"><p className="art-label">A simplified, fictional query</p><pre><code><span className="query-blue">(&quot;Brand A&quot; NEAR/5</span>{"\n"}  (&quot;scanner&quot; OR &quot;imaging&quot;)){"\n\n"}<span className="query-red">NOT</span> (jobs OR recruitment)</code></pre><div className="query-annotations"><span>Identity + context</span><span>Noise excluded</span></div></div>}
            {index === 1 && <div className="category-art"><p className="art-label">One conversation, different questions</p><div className="category-rows"><div><span>Product launches</span><small>What is new?</small></div><div><span>Partnerships</span><small>Who is working together?</small></div><div><span>Customer experience</span><small>What needs attention?</small></div></div><p className="art-footnote">Themes first. Tone as a separate lens.</p></div>}
            {index === 2 && <div className="dashboard-art"><div className="dashboard-top"><p className="art-label">Competitor overview</p><span>Same scope / four brands</span></div><div className="schematic-chart" role="img" aria-label="Illustrative volume pattern with a highlighted peak, not client results">{[19,28,22,36,31,44,72,52,37,32,43,29].map((h,i) => <div key={i} className={i===6 ? "peak-bar" : ""} style={{ "--bar-height": `${h}%` } as React.CSSProperties} />)}</div><div className="chart-legend"><span><i />Schematic conversation volume</span><span>Peak: inspect the source</span></div><div className="dashboard-lenses"><span>Share of voice</span><span>Topics & trends</span><span>Sentiment</span><span>Evidence feed</span></div></div>}
            {index === 3 && <div className="brief-art"><p className="art-label">The analyst&apos;s brief / illustrative</p><h3>A launch spike is not the whole story.</h3><dl><div><dt>Signal</dt><dd>Attention clusters around a product announcement.</dd></div><div><dt>Check</dt><dd>Separate brand posts from independent response.</dd></div><div><dt>Next</dt><dd>Review repeated questions before changing the message.</dd></div></dl><p className="confidence-note">Confidence follows the evidence. Not the size of the spike.</p></div>}
          </div>
          <div className="study-explanation"><span className="art-label">{stage.term}</span><h3>{stage.title}</h3><p>{stage.note}</p></div>
        </div>
      ))}</div>
      <p className="study-disclosure">Portfolio reconstruction of my listening workflow. Fictional names and illustrative examples; no live client data.</p>
    </div>
  );
}
