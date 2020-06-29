import * as React from 'react';
import Empty from 'icons/empty/empty';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './emptyCard.module.less';

interface Props {
  hasFilters: boolean;
}

const EmptyCard: React.FC<Props> = ({ hasFilters }) => {
  if (hasFilters) {
    return (
      <div className={styles.div}>
        <Empty />
        <Typography
          color="blue"
          size="three"
          text="There's nothing left"
        />
        <div className={styles.iconDiv}>
          <Icon iconName="monkey" size={40} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.div}>
      <Empty />
      <Typography
        color="blue"
        size="three"
        text="You don't have any cards. You should add some."
      />
    </div>
  );
};

export default EmptyCard;
