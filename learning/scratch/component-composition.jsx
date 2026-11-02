import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function StudyLayout({ title, children }) {
  return (
    <>
      <head>Kotoba</head>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}

function VocabPage() {
  return (
    <StudyLayout title="Vocab">
      <p>Let's learn some Vocab!</p>
    </StudyLayout>
  );
}

function GrammarPage() {
  return (
    <StudyLayout title="Grammar">
      <p>Let's learn some Grammar!</p>
    </StudyLayout>
  );
}

console.log(renderToStaticMarkup(<VocabPage />));
console.log(renderToStaticMarkup(<GrammarPage />));