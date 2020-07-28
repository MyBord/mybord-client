import * as React from 'react';
import Typography from 'typography/typography';
import programming from 'assets/illustrations/programming.png';
import { partOne } from './aboutDevDescriptions';
import * as styles from './aboutDevDescription.module.less';

const AboutDevDescription: React.FC = () => (
  <>
    <section className={styles.paragraphSection}>
      <img alt="programming" className={[styles.img, styles.imgLeft].join(' ')} src={programming} />
      <div className={styles.paragraphDiv} id="p-1">
        <Typography size="four" text={partOne} textAlign="justify" />
      </div>
    </section>
    <section className={styles.paragraphSection} id="p-2">
      <div className={styles.paragraphDiv}>
        <Typography size="four" text={partOne} textAlign="justify" />
      </div>
      <img alt="programming" className={[styles.img, styles.imgRight].join(' ')} src={programming} />
    </section>
  </>
);

export default AboutDevDescription;
