import * as React from 'react';
import Typography from 'typography/typography';
import bookshelf from 'assets/pictures/bookshelf.jpg';
import spongebog from 'assets/pictures/spongebob.png';
import {
  partOne,
  partTwo,
  partThree,
  partFour,
  partFive,
} from './aboutDescriptions';
import * as styles from './aboutDescription.module.less';

const AboutDescription: React.FC = () => (
  <>
    <section className={styles.paragraphSection}>
      <img
        alt="programming"
        className={[styles.img, styles.imgLeft].join(' ')}
        src="https://media.giphy.com/media/i4Mgat1S2f3Co/giphy.gif"
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
        src={bookshelf}
      />
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMargin].join(' ')}>
      <img
        alt="programming"
        className={[styles.img, styles.imgLeft].join(' ')}
        src={spongebog}
      />
      <div className={styles.paragraphDiv}>
        <Typography
          lineHeight="large"
          size="four"
          text={partThree}
          textAlign="justify"
        />
      </div>
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMargin].join(' ')}>
      <div className={[styles.paragraphDiv, styles.paragraphDivNoImg].join(' ')}>
        <Typography
          lineHeight="large"
          size="four"
          text={partFour}
          textAlign="justify"
        />
      </div>
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMargin].join(' ')}>
      <div className={[styles.paragraphDiv, styles.paragraphDivNoImg].join(' ')}>
        <Typography
          lineHeight="large"
          size="four"
          text={partFive}
          textAlign="justify"
        />
      </div>
    </section>
  </>
);

export default AboutDescription;
