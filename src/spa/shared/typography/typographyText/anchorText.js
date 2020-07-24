const getLeftBracketPositions = (text) => {
  const regex = RegExp('\\[', 'gi');
  const indices = [];

  while (regex.exec(text)) {
    indices.push(regex.lastIndex);
  }

  return indices;
};

const getAnchors = (text) => {
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
      anchors.push({ label, leftBracket, link });
    }
  });

  return anchors;
};

export default {
  getAnchors,
};
