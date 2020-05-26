import * as React from 'react';
import * as styles from './card.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Card;
