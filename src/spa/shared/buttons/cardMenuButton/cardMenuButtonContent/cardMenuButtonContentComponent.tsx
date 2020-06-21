import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icons/icon/icon';
import PopConfirm from 'modals/popConfirm/popConfirm';
import PopOver from 'modals/popOver/popOver';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

interface Props {
  deleteButtonRef: React.RefObject<HTMLDivElement>;
  handleDelete: () => void;
  isToDo: boolean;
  onHidePopConfirm: () => void;
  showPopConfirm: boolean;
  toggleToDo: () => void;
}

const CardMenuButtonContentComponent: React.FC<Props> = ({
  deleteButtonRef,
  handleDelete,
  isToDo,
  onHidePopConfirm,
  showPopConfirm,
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
        <PopConfirm
          node={deleteButtonRef}
          onHide={onHidePopConfirm}
          position={{ x: 0, y: 4 }}
          // show={showPopConfirm}
          show
          text="Are you sure you want to delete?"
        />
        <Typography
          Content={DeleteIconContent}
          onClick={handleDelete}
          ref={deleteButtonRef}
          size="two"
          text="delete"
        />
      </li>
    </ul>
  );
};

export default CardMenuButtonContentComponent;
