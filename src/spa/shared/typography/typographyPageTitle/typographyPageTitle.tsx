import * as React from 'react';
import Typography from 'typography/typography';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from './typographyPageTitle.module.less';

interface Props {
  link?: TypographyProps['link'];
  text: TypographyProps['text'];
}

const TypographyPageTitle: React.FC<Props> = ({ link, text }) => (
  <div className={styles.div}>
    <Typography
      color="blue"
      link={link}
      size="five"
      text={text}
    />
  </div>
);

export default TypographyPageTitle;
