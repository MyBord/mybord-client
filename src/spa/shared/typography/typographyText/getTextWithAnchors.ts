export type TextWithAnchors = {
  label: string;
  link?: string;
}[];

type AnchorPositions = {
  leftBracket: number;
  rightBracket: number;
  leftParen: number;
  rightParen: number;
}[];

// Return an array that lists all of the positions in the text where a `[` occurs.
const getLeftBracketPositions = (text: string): number[] => {
  const regex = RegExp('\\[', 'gi');
  const indices = [];

  while (regex.exec(text)) {
    indices.push(regex.lastIndex);
  }

  return indices;
};

// Return an array that lists the positions of the brackets and parenthesis of each anchor in
// the text
const getAnchorPositions = (text: string): AnchorPositions => {
  const leftBracketPositions = getLeftBracketPositions(text);

  const anchorPositions: AnchorPositions = [];

  leftBracketPositions.forEach((leftBracket) => {
    const remainingString = text.substring(leftBracket);
    const rightBracket = remainingString.indexOf(']') + leftBracket;
    const leftParen = remainingString.indexOf('(') + leftBracket;
    const rightParen = remainingString.indexOf(')') + leftBracket;

    // Make sure that the brackets and parenthesis are in the right order and that there is no
    // space between the `]` and the `(`.
    if (
      rightBracket < leftParen
      && rightBracket < rightParen
      && leftParen < rightParen
      && rightBracket === leftParen - 1
    ) {
      anchorPositions.push({
        leftBracket,
        rightBracket,
        leftParen,
        rightParen,
      });
    }
  });

  return anchorPositions;
};

// Return an array that splits up the text into different segmented parts, where the parts that
// are anchors list the necessary link.
const getTextWithAnchors = (text: string, anchorPositions: AnchorPositions): TextWithAnchors => {
  const textWithAnchors: TextWithAnchors = [];

  anchorPositions.forEach((anchor, index) => {
    // For the first anchor, if there is any text preceding that anchor, first add that
    // preceding text to the `anchors` array.
    if (index === 0) {
      const beforeFirstAnchorText = text.substring(0, anchor.leftBracket - 1);
      if (beforeFirstAnchorText.length > 0) {
        textWithAnchors.push({ label: beforeFirstAnchorText });
      }
    }

    // Add the anchor to `anchors` array
    const label = text.substring(anchor.leftBracket, anchor.rightBracket);
    const link = text.substring(anchor.leftParen + 1, anchor.rightParen);
    textWithAnchors.push({ label, link });

    // If the anchor is not the last anchor in the original text, then add the text that is
    // between the two anchors to the `anchors` array.
    if (index < anchorPositions.length - 1) {
      const nextAnchor = anchorPositions[index + 1];
      const inBetweenAnchorsText = text.substring(
        anchor.rightParen + 1,
        nextAnchor.leftBracket - 1,
      );
      textWithAnchors.push({ label: inBetweenAnchorsText });
    }

    // For the last anchor, if there is any text after that anchor, subsequently add that text to
    // the `anchors` array.
    if (index === anchorPositions.length - 1) {
      const afterLastAnchorText = text.substring(anchor.rightParen + 1);
      if (afterLastAnchorText.length > 0) {
        textWithAnchors.push({ label: afterLastAnchorText });
      }
    }
  });

  return textWithAnchors;
};

// If the text has anchor links in it, then return an array splitting up the text into
// different segmented parts, where the parts that are anchors list the necessary link.
// Otherwise, return an empty array.
export default (text: string): TextWithAnchors => {
  const anchorPositions = getAnchorPositions(text);

  if (anchorPositions.length > 0) {
    return getTextWithAnchors(text, anchorPositions);
  }

  return [];
};
