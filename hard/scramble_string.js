/*
Description:
We can scramble a string s to get a string t using the following algorithm:

If the length of the string is 1, stop.
If the length of the string is > 1, do the following:
Split the string into two non-empty substrings at a random index, i.e., if the string is s, divide it to x and y where s = x + y.
Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become s = x + y or s = y + x.
Apply step 1 recursively on each of the two substrings x and y.
Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.
*/

/*
Example:
Input: s1 = "great", s2 = "rgeat"
Output: true
*/

var isScramble = function (s1, s2) {
  if (s1 === s2) return true;
  if (!isAnagram(s1, s2)) return false;

  // boundaries are because the substrings being non-empty is a requirement
  for (let i = 1; i < s1.length; ++i) {
    if (
      isScramble(s1.substr(0, i), s2.substr(0, i)) &&
      isScramble(s1.substr(i), s2.substr(i))
    )
      return true;

    if (
      isScramble(s1.substr(0, i), s2.substr(s1.length - i)) &&
      isScramble(s1.substr(i), s2.substr(0, s1.length - i))
    )
      return true;
  }
  return false;
};

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; ++i) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }

  for (let i = 0; i < t.length; ++i) {
    if (map[t[i]]) map[t[i]]--;
    else return false;
  }

  return true;
}