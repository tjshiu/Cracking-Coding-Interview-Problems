/* Ask if the ASCII stirng or a Unicode String
 ASCII defines 128 characthers, which map to the numbers 0 - 127

 Unicode defines (less than) 2^21 characthers
 Unicode is a superset of ASCII and the numbers 0-128 have the same meaning in
 ASCII as they have in Unicode. Unicode assigns each character a unique number,
 or code point. There are UTF(Unicode Transformation Format) encodings and the
 UCS(Universal Character Set) encodings. Unicode-based encodings implement the
 Unicode standard and include UTF-8, UTF-16, and UTF-32/UCS-4.

 UTF-8 uses 1 byte to represent charcters in the ASCII set, two bypes for
 characters in several more alphabetic blocks, and three bytes for the rest of
 the BMP. Supplementary characters use 4 bytes.

 UTF-16 uses 2 bytes for any character in the BMP, and 4 bytes for supplementary
 characters
*/
function isUnique(string) {
  if (string.length > 128) return false;

  let char_set = new Array(128);
  let char, val;

  for (let i = 0; i < string.length; i++) {
    char = string[i];
    val = char.charCodeAt();
    if (char_set[val]) return false;
    char_set[val] = true;
  }

  return true;
}

isUnique("abcdefgh");
