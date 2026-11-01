const url1 = new URL("https://kana.example/quiz")
const url2 = new URL("https://kana.example/quiz/")
const url3 = new URL("https://kana.example/quiz?round=2#q5")

console.log(url1.pathname);
console.log(url2.pathname);
console.log(url3.pathname);