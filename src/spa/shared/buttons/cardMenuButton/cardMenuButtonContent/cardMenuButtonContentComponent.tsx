// *1: adding an `onClick` turns this into a typography button, which enforces our intended styling

import * as React from 'react';
import Icon from 'icons/icon/icon';
import PopConfirm from 'modals/popConfirm/popConfirm';
import Toggle from 'inputs/toggle/toggle';
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
        <Toggle
          checked={isToDo}
          onClick={toggleToDo}
          size="small"
          text="to do"
        />
      </li>
      <li className={styles.li}>
        <PopConfirm
          onConfirm={handleDelete}
          onMouseDown={() => console.log('pop confirm has been clicked')}
          text="Are you sure you want to delete?"
        >
          <Typography
            Content={DeleteIconContent}
            onClick={() => {}} // *1
            size="two"
            text="delete"
          />
        </PopConfirm>
      </li>
    </ul>
  );
};

export default CardMenuButtonContentComponent;
