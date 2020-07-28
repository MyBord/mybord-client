import * as React from 'react';
import Typography from 'typography/typography';
import laptop from 'assets/pictures/laptop.jpg';
import { loremIpsumLong } from 'utils/loremIpsum';
import * as styles from './aboutDevDescription.module.less';

const AboutDevDescription: React.FC = () => (
  <>
    <section className={styles.paragraphSection}>
      <div className={styles.paragraphDiv} id="p-1">
        <Typography text={loremIpsumLong} textAlign="justify" />
      </div>
      <img alt="laptop" className={styles.img} src={laptop} />
    </section>
    <section className={styles.paragraphSection} id="p-2">
      <img alt="laptop" className={styles.img} src={laptop} />
      <div className={styles.paragraphDiv}>
        <Typography text={loremIpsumLong} textAlign="justify" />
      </div>
    </section>
  </>
);

export default AboutDevDescription;
