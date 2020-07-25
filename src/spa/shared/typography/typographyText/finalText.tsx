import * as React from 'react';
import getTextWithAnchors, { TextWithAnchors } from './getTextWithAnchors';

interface Props {
  isParagraph: boolean;
  text: string;
}

const FinalText: React.FC<Props> = ({
  isParagraph,
  text,
}) => {
  let textWithAnchorsArray: TextWithAnchors = [];
  if (isParagraph) {
    textWithAnchorsArray = getTextWithAnchors(text);
  }

  const textWithAnchors = (): React.ReactElement[] => textWithAnchorsArray.map((anchor) => {
    if (anchor.link) {
      return (
        <a
          href={anchor.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {anchor.label}
        </a>
      );
    }

    return <>{anchor.label}</>;
  });

  if (textWithAnchorsArray.length > 0) {
    return (
      <>
        {textWithAnchors()}
      </>
    );
  }

  return <>{text}</>;
};

export default FinalText;
