import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

const CardMenuButtonContent: React.FC = () => {
  const CheckboxContent: React.FC = () => <Checkbox />;

  const DeleteIconContent: React.FC = () => (
    <Icon
      color="blue"
      fill="blue"
      iconName="delete"
      size={16}
    />
  );

  const PencilIconContent: React.FC = () => (
    <Icon
      color="blue"
      fill="blue"
      iconName="pencil"
      size={16}
    />
  );

  // todo: still need the div wrapper around the typography?
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <div className={styles.typographyDiv}>
          <Typography
            Content={PencilIconContent}
            onClick={() => console.log('foo')}
            size="two"
            text="edit"
          />
        </div>
      </li>
      <li className={styles.li}>
        <div className={styles.toDoDiv}>
          <Typography
            Content={CheckboxContent}
            onClick={() => console.log('foo')}
            size="two"
            text="to do"
          />
        </div>
      </li>
      <li className={styles.li}>
        <div className={styles.typographyDiv}>
          <Typography
            Content={DeleteIconContent}
            onClick={() => console.log('foo')}
            size="two"
            text="delete"
          />
        </div>
      </li>
    </ul>
  );
};

export default CardMenuButtonContent;
