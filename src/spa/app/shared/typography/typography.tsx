import * as React from 'react';
import * as styles from './typography.module.scss';

interface Props {
  color?: 'black' | 'transparentWhite' | 'white';
  font?: 'poppins' | 'roboto';
  size?: 'large' | 'medium' | 'normal' | 'small';
  text: string;
  weight?: 'bold' | 'light' | 'regular';
}

const Typography: React.FC<Props> = ({
  color = 'black',
  font = 'poppins',
  size = 'normal',
  text,
  weight = 'regular',
}) => (
  <p
    className={[
      styles.typography,
      styles[color],
      styles[font],
      styles[size],
      styles[weight],
    ].join(' ')}
  >
    {text}
  </p>
);

export default Typography;
