import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopConfirm from 'modals/popConfirm/popConfirm';
import Toggle from 'inputs/toggle/toggle';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

interface Props {
  deleteButtonRef: React.RefObject<HTMLDivElement>;
  handleDelete: () => void;
  isToDo: boolean;
  setShowPopConfirm: (showPopConfirm: boolean) => void;
  showPopConfirm: boolean;
  toggleToDo: () => void;
}

const CardMenuButtonContentComponent: React.FC<Props> = ({
  deleteButtonRef,
  handleDelete,
  isToDo,
  setShowPopConfirm,
  showPopConfirm,
  toggleToDo,
}) => {
  const onHide = React.useCallback(() => {
    setShowPopConfirm(false);
  }, [setShowPopConfirm]);

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
        <Toggle
          checked={isToDo}
          onClick={toggleToDo}
          size="small"
          text="to do"
        />
      </li>
      <li className={styles.li}>
        <PopConfirm
          node={deleteButtonRef}
          onConfirm={handleDelete}
          onHide={onHide}
          position={{ x: 1, y: -3.375 }}
          show={showPopConfirm}
          text="Are you sure you want to delete?"
        />
        <Typography
          Content={DeleteIconContent}
          onClick={() => setShowPopConfirm(true)}
          ref={deleteButtonRef}
          size="two"
          text="delete"
        />
      </li>
    </ul>
  );
};

export default CardMenuButtonContentComponent;
