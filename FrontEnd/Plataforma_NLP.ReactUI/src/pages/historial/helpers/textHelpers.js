export function first100Chars(text) {
  var first100 = text.substring(0, 100);
  if (text.length > 100) {
    first100 += "...";
  }
  return first100;
}
