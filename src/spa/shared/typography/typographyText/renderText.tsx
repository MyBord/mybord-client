import * as React from 'react';
import Tooltip from 'modals/tooltip/tooltip';
import { TypographyProps } from 'types/typographyTypes';
import FinalText from './finalText';
import * as styles from './typographyText.module.less';

interface Props {
  isParagraph: boolean;
  lineHeight: TypographyProps['lineHeight'];
  maxTextLength?: TypographyProps['maxTextLength'];
  size: TypographyProps['size'];
  text: TypographyProps['text'];
}

const TypographyText: React.FC<Props> = ({
  isParagraph,
  lineHeight,
  maxTextLength,
  size,
  text,
}) => {
  const pClassName = [
    styles.p,
    lineHeight ? styles[lineHeight] : undefined,
  ].join(' ');

  if (maxTextLength && text.length > maxTextLength) {
    return (
      <p className={pClassName}>
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
    <p className={pClassName}>
      <FinalText isParagraph={isParagraph} text={text} />
    </p>
  );
};

export default TypographyText;
