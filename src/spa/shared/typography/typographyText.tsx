import * as React from 'react';

interface Props {
  Content?: React.FC;
  maxTextLength?: number;
  text: string;
}

const TypographyText: React.FC<Props> = ({
  Content,
  maxTextLength,
  text,
}) => {
  const renderText = (): string => {
    if (maxTextLength && text.length > maxTextLength) {
      return (
        `${text.slice(0, maxTextLength)}...`
      );
    }
    return text;
  };

  return (
    <>
      {Content && <Content />}
      {renderText()}
    </>
  );
};

export default TypographyText;
