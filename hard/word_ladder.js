/*
Description:
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
*/

/*
Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
*/

var ladderLength = function(beginWord, endWord, wordList, stack = [beginWord], seen={beginWord:true}, depth=1,sz = endWord.length) {
  const dict = wordList.reduce((m,e)=>(m[e]=true)&&m, {})
  while(stack.length>0) {
      let len = stack.length
      for(let i=0;i<len;i++) {
          const curr = stack.shift()
          if (curr==endWord) return depth
          for(let le=0;le<sz;le++) {
              const arr = curr.split('')
              for (let letterIndex=97;letterIndex<123;letterIndex++) {
                  arr[le] = String.fromCharCode(letterIndex)
                  const new1 = arr.join('')
                  if (!seen[new1] && dict[new1]) {
                      stack.push(new1)
                      seen[new1] = true
                  }
              }
          }   
      }
      depth++
  }
  return 0
};