import * as React from 'react';
import Typography from 'typography/typography';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import laptop from 'assets/pictures/laptop.jpg';
import { loremIpsumLong } from 'utils/loremIpsum';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
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
      <section className={styles.stackSection}>
        <Typography color="blue" size="five" text="Stack" />
        <Typography color="blue" size="four" text="General" />
        <Typography color="blue" size="four" text="Front End" />
        <Typography color="blue" size="four" text="Back End" />
        <div style={{ height: '30rem', width: '30rem', background: 'pink' }} />
      </section>
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
