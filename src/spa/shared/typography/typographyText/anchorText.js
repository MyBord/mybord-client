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
    const rightBracket = remainingString.indexOf(']') + leftBracket;
    const leftParen = remainingString.indexOf('(') + leftBracket;
    const rightParen = remainingString.indexOf(')') + leftBracket;

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

    const label = text.substring(anchor.leftBracket, anchor.rightBracket);
    const link = text.substring(anchor.leftParen + 1, anchor.rightParen);
    anchors.push({ text: label, link });

    if (index < anchorPositions.length - 1) {
      const nextAnchor = anchorPositions[index + 1];
      const inBetweenAnchorsText = text.substring(
        anchor.rightParen + 1,
        nextAnchor.leftBracket - 1,
      );
      anchors.push({ text: inBetweenAnchorsText });
    }

    if (index === anchorPositions.length - 1) {
      const afterLastAnchorText = text.substring(anchor.rightParen + 1);
      if (afterLastAnchorText.length > 0) {
        anchors.push({ text: afterLastAnchorText });
      }
    }
  });

  return anchors;
};

export default (text) => {
  const anchorPositions = getAnchorPositions(text);

  if (anchorPositions.length > 0) {
    return getAnchors(text, anchorPositions);
  }

  return [];
};
