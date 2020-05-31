import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

const CardMenuButtonContent: React.FC = () => {
  const [isToDo, setIsToDo] = React.useState<boolean>(true);
  const toggleToDo = (): void => setIsToDo((prevState) => !prevState);

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

  const PencilIconContent: React.FC = () => (
    <div className={styles.iconDiv}>
      <Icon
        color="blue"
        fill="blue"
        iconName="pencil"
        size={16}
      />
    </div>
  );

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Typography
          Content={PencilIconContent}
          onClick={() => console.log('edit')}
          size="two"
          text="edit"
        />
      </li>
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
          onClick={() => console.log('delete')}
          size="two"
          text="delete"
        />
      </li>
    </ul>
  );
};

export default CardMenuButtonContent;
