import * as React from 'react';
import Tooltip from 'modals/tooltip/tooltip';
import { TypographySize } from 'types/typographyTypes';
import anchorText from './anchorText';
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
  let finalText: string = text;

  if (isParagraph) {
    const anchors = anchorText.getAnchors(text);

    if (anchors.length > 0) {
      const a = anchors[0];
      console.log(text);
      console.log(anchors[0]);
      console.log(text.substring(0, a.leftBracket - 1));
    }
  }

  const renderText = (): React.ReactElement => {
    if (maxTextLength && finalText.length > maxTextLength) {
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
    return <p className={styles.p}>{finalText}</p>;
  };

  return (
    <>
      {Content && <Content />}
      {renderText()}
    </>
  );
};

export default TypographyText;
