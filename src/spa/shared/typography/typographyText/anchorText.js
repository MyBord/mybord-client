const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com)';

const getBracketIndices = (text) => {
  const bracketIndices = [];
  let bracketIndex = 0;
  let str = text;

  do {
    let remainingString;

    if (bracketIndex === 0) {
      remainingString = str;
    } else {
      remainingString = str.substring(bracketIndex + 1);
    }

    bracketIndex = remainingString.indexOf('[');
    str = remainingString;

    if (bracketIndex !== -1) {
      bracketIndices.push(bracketIndex);
    }
  }
  while (bracketIndex !== -1);

  return bracketIndices;
}

console.log(getBracketIndices(sampleText));
