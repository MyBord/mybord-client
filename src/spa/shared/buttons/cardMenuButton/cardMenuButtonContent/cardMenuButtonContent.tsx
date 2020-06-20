import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { DELETE_USER_CARD } from 'schema/card';
import * as styles from './cardMenuButtonContent.module.less';

interface Props {
  cardId: string;
}

const CardMenuButtonContent: React.FC<Props> = ({ cardId }) => {
  const [isToDo, setIsToDo] = React.useState<boolean>(true);
  const [deleteYoutubeCard] = useMutation(DELETE_USER_CARD);
  const toggleToDo = (): void => setIsToDo((prevState) => !prevState);

  const handleDelete = async (): Promise<void> => {
    await deleteYoutubeCard({
      variables: { cardId },
    });
  };

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

  // const PencilIconContent: React.FC = () => (
  //   <div className={styles.iconDiv}>
  //     <Icon
  //       color="blue"
  //       fill="blue"
  //       iconName="pencil"
  //       size={16}
  //     />
  //   </div>
  // );

  return (
    <ul className={styles.ul}>
      {/* <li className={styles.li}> */}
      {/*  <Typography */}
      {/*    Content={PencilIconContent} */}
      {/*    onClick={() => console.log('edit')} */}
      {/*    size="two" */}
      {/*    text="edit" */}
      {/*  /> */}
      {/* </li> */}
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

export default CardMenuButtonContent;
