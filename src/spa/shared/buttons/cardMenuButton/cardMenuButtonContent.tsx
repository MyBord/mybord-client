import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

const CardMenuButtonContent: React.FC = () => (
  <ul className={styles.ul}>
    <li className={styles.li}>
      <Icon
        color="blue"
        fill="blue"
        iconName="pencil"
        size={16}
      />
      <div className={styles.typographyDiv}>
        <Typography
          onClick={() => console.log('foo')}
          size="two"
          text="edit"
        />
      </div>
    </li>
    <li className={styles.li}>
      <Checkbox />
      <div className={styles.toDoDiv}>
        <Typography
          onClick={() => console.log('foo')}
          size="two"
          text="to do"
        />
      </div>
    </li>
    <li className={styles.li}>
      <Icon
        color="blue"
        fill="blue"
        iconName="delete"
        size={16}
      />
      <div className={styles.typographyDiv}>
        <Typography
          onClick={() => console.log('foo')}
          size="two"
          text="delete"
        />
      </div>
    </li>
  </ul>
);

export default CardMenuButtonContent;
