import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

function studyScreen(mode) {
  if (mode === "flashcards") {
    return <h1>Flashcards</h1>;
  } else if (mode === "quiz") {
    return <h1>Quiz</h1>;
  } else {
    return <p>Unknown mode: {mode}</p>;
  }
}

console.log(renderToStaticMarkup(studyScreen("quiz")));
console.log(renderToStaticMarkup(studyScreen("flashcards")));
console.log(renderToStaticMarkup(studyScreen("Quiz")));
