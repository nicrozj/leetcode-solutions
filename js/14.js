/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs) return "";
  let word = strs[0];

  while (true) {
    if (!word.length) return "";
    if (
      strs.every((val, id, arr) => {
        return val.startsWith(word);
      })
    ) {
      return word;
    }
    word = word.slice(0, word.length - 1);
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
