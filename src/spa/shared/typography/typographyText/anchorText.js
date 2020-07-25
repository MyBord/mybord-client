const getLeftBracketPositions = (text) => {
  const regex = RegExp('\\[', 'gi');
  const indices = [];

  while (regex.exec(text)) {
    indices.push(regex.lastIndex);
  }

  return indices;
};

const getAnchorPositions = (text) => {
  const leftBracketPositions = getLeftBracketPositions(text);

  const anchors = [];

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
      const label = remainingString.substring(0, rightBracket);
      const link = remainingString.substring(leftParen + 1, rightParen);
      anchors.push({
        label,
        leftBracket,
        rightBracket,
        leftParen,
        rightParen,
        link,
      });
    }
  });

  return anchors;
};

const getAnchors = (text, anchorPositions) => {
  const anchors = [];

  anchorPositions.forEach((anchor, index) => {
    if (index === 0) {
      anchors.push({ text: text.substring(0, anchor.leftBracket - 1) });
    }

    const remainingText = text.substring(anchor.leftBracket);
    const label = remainingText.substring(0, anchor.rightBracket);
    const link = remainingText.substring(anchor.leftParen + 1, anchor.rightParen);

    anchors.push({ text: label, link });
  });

  console.log(anchors);
};

const anchorText = (text) => {
  const anchorPositions = getAnchorPositions(text);
  if (anchorPositions.length > 0) {
    getAnchors(text, anchorPositions);
  } else {
    return false;
  }
};

const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com) [test](apple.com) foobb';
// const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com) [test](apple.com)';
// const sampleText = '[hello](google.com) [again] (foo.com) [test](apple.com)';

anchorText(sampleText);

const y = [
  {
    text: ' foo bar baz ',
  },
  {
    link: 'google.com',
    text: 'hello',
  },
  {
    text: ' [again] (foo.com) ',
  },
  {
    link: 'apple.com',
    text: 'test',
  },
];
