import * as React from 'react';
import * as styles from './typographyText.module.less';

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
  const renderText = (): React.ReactElement => {
    if (maxTextLength && text.length > maxTextLength) {
      return (
        <>
          <p className={styles.p}>
            {text.slice(0, maxTextLength)}
            <div className={styles.ellipsis}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </p>
        </>
      );
    }
    return <p className={styles.p}>{text}</p>;
  };

  return (
    <>
      {Content && <Content />}
      {renderText()}
    </>
  );
};

export default TypographyText;
