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
  // todo: change from anchors? not all of them are anchors?
  // @ts-ignore
  let anchors = [];
  if (isParagraph) {
    anchors = anchorText(text);
  }

  // @ts-ignore
  const FinalText: React.FC = () => {
    if (anchors.length > 0) {
      // @ts-ignore
      return anchors.map((anchor) => {
        if (anchor.link) {
          return <a href={anchor.link} rel="noopener noreferrer" target="_blank">{anchor.text}</a>;
        }
        return <>{anchor.text}</>;
      });
    }

    return <>{text}</>;
  };

  const renderText = (): React.ReactElement => {
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
      {renderText()}
    </>
  );
};

export default TypographyText;
