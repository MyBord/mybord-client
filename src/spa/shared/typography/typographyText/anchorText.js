const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com)  abc  ttt [w](x) ';

const getLeftBracketPositions = (text) => {
  const regex = RegExp('\\[', 'gi');
  const indices = [];

  while (regex.exec(text)) {
    indices.push(regex.lastIndex);
  }

  return indices;
};

const fn = (text) => {
  const leftBracketPositions = getLeftBracketPositions(text);

  leftBracketPositions.forEach((leftBracket) => {
    const remainingString = text.substring(leftBracket);
    const rightBracket = remainingString.indexOf(']');
    const leftParen = remainingString.indexOf('(');
    const rightParen = remainingString.indexOf(')');

    if (
      rightBracket < leftParen
      && rightBracket < rightParen
      && leftParen < rightParen
      && rightBracket === leftParen - 1
    ) {
      console.log(remainingString);
    }
  });
};

fn(sampleText);
