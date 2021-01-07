import * as React from 'react';
import IconButton from 'buttons/iconButton/iconButton';
import Typography from 'typography/typography';
import { TagColors } from 'types/colorTypes';
import * as colors from 'styles/_colors.less';
import * as styles from './tag.module.less';

interface Props {
  color: TagColors;
  label: string;
}

const Tag: React.FC<Props> = ({ color, label }) => (
  <div className={styles.div} style={{ background: colors[color] }}>
    {/* <Typography */}
    {/*  color="white" */}
    {/*  size="one" */}
    {/*  text={label} */}
    {/*  weight="light" */}
    {/* /> */}
    <IconButton
      iconName="close"
      onClick={() => console.log('delete tag')}
      size={16}
    />
  </div>
);

export default Tag;
