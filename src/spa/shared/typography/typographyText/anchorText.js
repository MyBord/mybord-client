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
      anchors.push({
        leftBracket,
        rightBracket,
        leftParen,
        rightParen,
      });
    }
  });

  return anchors;
};

const getAnchors = (text, anchorPositions) => {
  const anchors = [];

  anchorPositions.forEach((anchor, index) => {
    if (index === 0) {
      const beforeFirstAnchorText = text.substring(0, anchor.leftBracket - 1);
      if (beforeFirstAnchorText.length > 0) {
        anchors.push({ text: beforeFirstAnchorText });
      }
    }

    const remainingText = text.substring(anchor.leftBracket);
    const label = remainingText.substring(0, anchor.rightBracket);
    const link = remainingText.substring(anchor.leftParen + 1, anchor.rightParen);

    anchors.push({ text: label, link });

    if (index < anchorPositions.length - 1) {
      const nextAnchor = anchorPositions[index + 1];
      const inBetweenAnchorsText = text.substring(
        anchor.leftBracket + anchor.rightParen + 1,
        nextAnchor.leftBracket - 1,
      );
      anchors.push({ text: inBetweenAnchorsText });
    }

    if (index === anchorPositions.length - 1) {
      const afterLastAnchorText = text.substring(anchor.leftBracket + anchor.rightParen + 1);
      if (afterLastAnchorText.length > 0) {
        anchors.push({ text: afterLastAnchorText });
      }
    }
  });

  return anchors;
};

const anchorText = (text) => {
  const anchorPositions = getAnchorPositions(text);

  if (anchorPositions.length > 0) {
    return getAnchors(text, anchorPositions);
  }

  return false;
};

const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com) [test](apple.com) foobb';
// const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com) [test](apple.com)';
// const sampleText = '[hello](google.com) [again] (foo.com) [test](apple.com)';

console.log(anchorText(sampleText));
