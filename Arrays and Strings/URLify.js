function URLify(string, length) {
  return string.split(" ").join("%20").slice(0, string.length);
}

console.log(URLify("Mr John Smith    ", 13));
console.log(`answer is ${"Mr%20John%20Smith"}`);
