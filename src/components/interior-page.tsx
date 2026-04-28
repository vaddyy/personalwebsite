import type { ReactNode } from "react";

type InteriorItem = {
  description: ReactNode;
  href?: string;
  meta: string;
  title: string;
};

type InteriorPageProps = {
  description: ReactNode;
  items: InteriorItem[];
  title: string;
};

function PageRow({ item }: { item: InteriorItem }) {
  const content = (
    <div className="page-list-content">
      <span>
        <span className="page-list-title">
          {item.title}
          {item.href ? " ↗" : ""}
        </span>
        <br />
        <span className="page-list-note">{item.description}</span>
      </span>
      <span className="page-list-meta">{item.meta}</span>
    </div>
  );

  if (!item.href) {
    return <div className="page-list-row">{content}</div>;
  }

  return (
    <a className="page-list-link" href={item.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}

export function InteriorPage({ description, items, title }: InteriorPageProps) {
  return (
    <main className="page">
      <div className="page-container">
        <div className="page-inner">
          <h1 className="page-title">{title}</h1>
          <p className="page-intro">{description}</p>
          <ul className="page-list">
            {items.map((item) => (
              <li key={`${title}-${item.title}`}>
                <PageRow item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
