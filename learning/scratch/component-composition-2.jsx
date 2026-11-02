import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function StreakBadge({ days }) {
  return <p>🔥 {days} days</p>;
}

function SiteHeader({ days }) {
  return (
    <>
      <header>Kotoba</header>
      <StreakBadge days={days} />
    </>
  );
}

function StudyLayout({ days, children }) {
  return (
    <>
      <SiteHeader days={days} />
      <main>{children}</main>
    </>
  );
}

function VocabPage({ days }) {
  return <StudyLayout days={days} />;
}

console.log(renderToStaticMarkup(<VocabPage days={5} />));
