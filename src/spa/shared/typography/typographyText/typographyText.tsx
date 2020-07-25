import * as React from 'react';
import Tooltip from 'modals/tooltip/tooltip';
import { TypographySize } from 'types/typographyTypes';
import getTextWithAnchors, { TextWithAnchors } from './getTextWithAnchors';
import * as styles from './typographyText.module.less';

interface Props {
  Content?: React.FC;
  isParagraph: boolean;
  maxTextLength?: number;
  size: TypographySize;
  text: string;
}

const TypographyText: React.FC<Props> = ({
  Content,
  isParagraph,
  maxTextLength,
  size,
  text,
}) => {
  let textWithAnchorsArray: TextWithAnchors = [];
  if (isParagraph) {
    textWithAnchorsArray = getTextWithAnchors(text);
  }

  const textWithAnchors = (): React.ReactElement[] => textWithAnchorsArray.map((anchor) => {
    if (anchor.link) {
      return <a href={anchor.link} rel="noopener noreferrer" target="_blank">{anchor.label}</a>;
    }
    return <>{anchor.label}</>;
  });

  const FinalText: React.FC = () => {
    if (textWithAnchorsArray.length > 0) {
      return (
        <>
          {textWithAnchors()}
        </>
      );
    }

    return <>{text}</>;
  };

  const RenderText: React.FC = () => {
    if (maxTextLength && text.length > maxTextLength) {
      return (
        <p className={styles.p}>
          {text.slice(0, maxTextLength)}
          <Tooltip text={text} trigger="click">
            <div className={[styles.ellipsis, styles[size]].join(' ')}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </Tooltip>
        </p>
      );
    }

    return (
      <p className={styles.p}>
        <FinalText />
      </p>
    );
  };

  return (
    <>
      {Content && <Content />}
      <RenderText />
    </>
  );
};

export default TypographyText;
