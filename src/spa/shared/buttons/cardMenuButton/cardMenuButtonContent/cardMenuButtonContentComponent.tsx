import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

interface Props {
  handleDelete: () => void;
  isToDo: boolean;
  toggleToDo: () => void;
}

const CardMenuButtonContentComponent: React.FC<Props> = ({
  handleDelete,
  isToDo,
  toggleToDo,
}) => {
  const DeleteIconContent: React.FC = () => (
    <div className={styles.iconDiv}>
      <Icon
        color="blue"
        fill="blue"
        iconName="delete"
        size={16}
      />
    </div>
  );

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <div className={styles.toDoDiv}>
          <Checkbox checked={isToDo} onChange={toggleToDo} />
          <Typography
            onClick={toggleToDo}
            size="two"
            text="to do"
          />
        </div>
      </li>
      <li className={styles.li}>
        <Typography
          Content={DeleteIconContent}
          onClick={handleDelete}
          size="two"
          text="delete"
        />
      </li>
    </ul>
  );
};

export default CardMenuButtonContentComponent;
