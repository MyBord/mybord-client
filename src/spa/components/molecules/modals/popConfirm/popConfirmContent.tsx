import * as React from 'react';
import Button from 'buttons/button/button';
import Typography from 'typography/typography';
import * as styles from './popConfirm.module.less';

interface Props {
  onHide: () => void;
  text: string;
}

const PopConfirmContent: React.FC<Props> = ({ onHide, text }) => (
  <div className={styles.contentContainer}>
    <div>
      <Typography hasMargin={false} type="bodyDefault" text={text} />
    </div>
    <div className={styles.buttonContainer}>
      <Button label="Cancel" onClick={onHide} type="secondary" />
      <Button label="Yes" />
    </div>
  </div>
);

export default PopConfirmContent;
