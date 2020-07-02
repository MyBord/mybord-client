import * as React from 'react';
import Button from 'buttons/button/button';
import PopOverContainer from 'modals/popOver/popOverContainer';
import Typography from 'typography/typography';
import memo from 'utils/memo';
import { PopOverProps } from 'types/modalTypes';
import * as styles from './popConfirm.module.less';


// interface Props extends PopOverProps {
//   node: React.RefObject<HTMLElement>;
//   onConfirm: () => void;
//   onHide: () => void;
//   text: string;
// }
//
// const PopConfirm: React.FC<Props> = ({
//   node,
//   onConfirm,
//   onHide,
//   placement = 'right',
//   position = { x: 0, y: 0 },
//   show,
//   text,
// }) => {
//   const Content: React.FC = () => (
//     <div className={styles.contentContainer}>
//       <Typography size="two" text={text} />
//       <div className={styles.contentButtons}>
//         <Button
//           label="No"
//           onClick={onHide}
//           size="small"
//           type="secondary"
//         />
//         <Button
//           label="Yes"
//           onClick={onConfirm}
//           size="small"
//         />
//       </div>
//     </div>
//   );
//
//   return (
//     <PopOverContainer
//       Content={<Content />}
//       caretPosition="bottom-right"
//       node={node}
//       onHide={onHide}
//       placement={placement}
//       position={position}
//       show={show}
//     />
//   );
// };

const PopConfirm: React.FC = () => <h1>hello world</h1>;

export default memo(PopConfirm);
