import React from 'react';
import { renderToStaticMarkup } from "react-dom/server";
function cardFace(side) {
    if (side === "front") {
        return <p>猫</p>
    }
    else if (side === "back") {
        return <p>cat</p>
    }
    else {
        return <p>?</p>
    }
}

console.log(renderToStaticMarkup(cardFace("front")));
console.log(renderToStaticMarkup(cardFace("back")));
console.log(renderToStaticMarkup(cardFace("side")));