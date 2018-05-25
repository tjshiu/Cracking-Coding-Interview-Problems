function checkPermutation(string1, string2) {
  if (string1 === string2) return false;
  if (string1.length !== string2.length) return false;
  let chars = {};
  let char;

  for (let i = 0; i < string1.length; i++) {
    char = string1[i];
    if (chars[char] === undefined) {
      chars[char] = 1;
    } else {
      chars[char] += 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    char = string2[i];
    if (chars[char] === undefined) {
      return false;
    } else {
      chars[char] -= 1;
      if (chars[char] < 0) return false;
    }
  }

  return true;
}
