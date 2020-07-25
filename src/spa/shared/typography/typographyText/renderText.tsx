import * as React from 'react';
import Tooltip from 'modals/tooltip/tooltip';
import { TypographySize } from 'types/typographyTypes';
import FinalText from './finalText';
import * as styles from './typographyText.module.less';

interface Props {
  isParagraph: boolean;
  maxTextLength?: number;
  size: TypographySize;
  text: string;
}

const TypographyText: React.FC<Props> = ({
  isParagraph,
  maxTextLength,
  size,
  text,
}) => {
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
      <FinalText isParagraph={isParagraph} text={text} />
    </p>
  );
};

export default TypographyText;
