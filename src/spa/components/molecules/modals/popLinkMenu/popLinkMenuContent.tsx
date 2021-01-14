import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './popLinkMenu.module.less';

interface Props {
  options: {
    label: string;
    link: string;
  }[];
}

const PopConfirmContent: React.FC<Props> = ({ options }) => (
  <div className={styles.divContainer}>
    {
      options.map((option, index) => (
        <div className={styles.typographyDiv}>
          <Typography
            key={`${option.label}-${index}`}
            link={option.link}
            text={option.label}
            type="linkDefault"
          />
        </div>
      ))
    }
  </div>
);

export default PopConfirmContent;
