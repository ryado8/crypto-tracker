const url1 = new URL("https://kana.example/decks");
const url2 = new URL("https://kana.example/decks?level=n5");
const url3 = new URL("https://kana.example/decks/");
const url4 = new URL("https://kana.example/decks#top");

console.log(url1.pathname === "/decks");
console.log(url2.pathname === "/decks");
console.log(url3.pathname === "/decks");
console.log(url4.pathname === "/decks");