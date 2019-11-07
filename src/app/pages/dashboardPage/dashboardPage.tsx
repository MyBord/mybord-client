import * as React from 'react';
import { motion } from 'framer-motion';
import LottiePlayer from 'lotty/lottiePlayer';
import deskAnimation from 'lotty/lotties/desk.json';
import fakeApi from 'api/fakeApi';
import * as styles from './dashboardPage.module.scss';

// const DashboardPage: React.FC = () => {
//   fakeApi.sampleData.read();
//   return (
//     <section className={styles.section}>
//       <LottiePlayer
//         animationData={deskAnimation}
//         autoplay
//         loop
//         size={600}
//       />
//     </section>
//   );
// };

const variants = {
  on: { top: '3rem' },
  off: { top: '0' },
};

const DashboardPage: React.FC = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <motion.div
        animate={state ? 'on' : 'off'}
        className={styles.div}
        variants={variants}
      />
      <button onClick={() => setState(!state)} type="button">Click Me</button>
    </>
  );
};

export default DashboardPage;
