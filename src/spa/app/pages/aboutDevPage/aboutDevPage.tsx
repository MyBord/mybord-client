import * as React from 'react';
import StackCard from 'cards/stackCard/stackCard';
import Typography from 'typography/typography';
import laptop from 'assets/pictures/laptop.jpg';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import { loremIpsumLong } from 'utils/loremIpsum';
import * as styles from './aboutDevPage.module.less';

const sampleText = ' foo bar baz [hello](google.com) [again] (foo.com)';

const AboutDevPage: React.FC = () => (
  <section className={styles.parentSection}>
    <section className={styles.section}>
      <section className={styles.paragraphSection}>
        <div className={styles.paragraphDiv} id="p-1">
          <Typography text={sampleText} textAlign="justify" />
        </div>
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
        <div className={styles.stackTitleDiv}>
          <Typography color="blue" size="five" text="Stack" />
        </div>
        <div className={styles.typographyDiv}>
          <Typography color="blue" size="four" text="General" />
        </div>
        <div className={styles.stackCardsContainer}>
          <StackCard id="typescript" />
          <StackCard id="graphql" />
          <StackCard id="webpack" />
          <StackCard id="babel" />
          <StackCard id="eslint" />
          <StackCard id="circleCi" />
          <StackCard id="jest" />
        </div>
        <div className={styles.typographyDiv}>
          <Typography color="blue" size="four" text="Front End" />
        </div>
        <div className={styles.stackCardsContainer}>
          <StackCard id="react" />
          <StackCard id="apolloClient" />
          <StackCard id="framerMotion" />
          <StackCard id="storybook" />
          <StackCard id="lottie" />
          <StackCard id="nucleo" />
          <StackCard id="less" />
          <StackCard id="cssModules" />
          <StackCard id="enzyme" />
          <StackCard id="antDesign" />
        </div>
        <div className={styles.typographyDiv}>
          <Typography color="blue" size="four" text="Back End" />
        </div>
        <div className={styles.stackCardsContainer}>
          <StackCard id="node" />
          <StackCard id="apolloServer" />
          <StackCard id="prisma" />
          <StackCard id="express" />
          <StackCard id="postgresql" />
          <StackCard id="passport" />
        </div>
        <div className={styles.typographyDiv}>
          <Typography color="blue" size="four" text="Deployment & Hosting" />
        </div>
        <div className={styles.stackCardsContainer}>
          <StackCard id="heroku" />
          <StackCard id="prismaCloud" />
          <StackCard id="docker" />
        </div>
      </section>
    </section>
  </section>
);

export default pageWrapper({ Component: AboutDevPage });
