import React from "react";
import { CoinBadge } from "./coin-badge.jsx";
import { renderToStaticMarkup } from "react-dom/server";

function WatchList() {
  return (
    <>
      <h1>Coin names</h1>
      <CoinBadge />
      <CoinBadge />
      <CoinBadge />
    </>
  );
}

console.log(renderToStaticMarkup(<WatchList />));
