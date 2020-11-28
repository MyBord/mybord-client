import * as React from 'react';
import Typography from 'typography/typography';
import forklift from 'graphics/forklift.png';
import programming from 'graphics/programming.png';
import { partOne, partTwo, partThree } from './aboutForDevsText';
import * as styles from './aboutForDevs.module.less';

const AboutForDevs: React.FC = () => (
  <>
    <section className={styles.paragraphSection}>
      <img
        alt="programming"
        className={[styles.img, styles.imgLeft].join(' ')}
        src={programming}
      />
      <div className={styles.paragraphDiv}>
        <Typography
          lineHeight="large"
          size="four"
          text={partOne}
          textAlign="justify"
        />
      </div>
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMargin].join(' ')}>
      <div className={styles.paragraphDiv}>
        <Typography
          lineHeight="large"
          size="four"
          text={partTwo}
          textAlign="justify"
        />
      </div>
      <img
        alt="programming"
        className={[styles.img, styles.imgRight].join(' ')}
        src={forklift}
      />
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMargin].join(' ')}>
      <div className={[styles.paragraphDiv, styles.paragraphDivNoImg].join(' ')}>
        <Typography
          lineHeight="large"
          size="four"
          text={partThree}
          textAlign="justify"
        />
      </div>
    </section>
  </>
);

export default AboutForDevs;
