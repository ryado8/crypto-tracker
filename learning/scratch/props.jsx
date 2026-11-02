import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function VocabCard({ word, meaning, due }) {
  return (
    <p>
      {word} - {meaning} {due ? " (due)" : ""}
    </p>
  );
}

function ReviewList() {
  return (
    <>
      <VocabCard word="恋" meaning="love" due={false} />
      <VocabCard word="友達" meaning="friend" due={false} />
      <VocabCard word="たべる" meaning="eat" due={true} />
    </>
  );
}

console.log(renderToStaticMarkup(ReviewList()));
