import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function deckRow(name, due) {
  if (due > 1) {
    return (
      <li>
        {name} - {due} cards due
      </li>
    );
  } else if (due === 1) {
    return (
      <li>
        {name} - {due} card due
      </li>
    );
  } else if (due === 0) {
    return <li>{name} - all caught up</li>;
  }
}

console.log(renderToStaticMarkup(deckRow("N5 verbs", 3)));
console.log(renderToStaticMarkup(deckRow("Kana", 1)));
console.log(renderToStaticMarkup(deckRow("Kanji", 0)));
