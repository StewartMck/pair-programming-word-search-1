const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'D', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'M', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'I', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'S', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'S', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'I', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'N', 'U', 'A', 'L'],
    ], 'ADMISSION')

    assert.isTrue(result);
  });

  it("should return undefined if an empty matrix is passed", function() {
    assert.isUndefined(wordSearch([]));
  });
});
