import * as React from 'react';
import Typography from 'typography/typography';
import bookshelf from 'assets/pictures/bookshelf.jpg';
import snl from 'assets/gifs/snl.gif';
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
        alt="snl"
        className={[styles.img, styles.imgLeft].join(' ')}
        src={snl}
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
        alt="bookshelf"
        className={[styles.img, styles.imgBookshelf, styles.imgRight].join(' ')}
        src={bookshelf}
      />
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMargin].join(' ')}>
      <img
        alt="spongebob"
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
    <section className={[styles.paragraphSection, styles.paragraphMarginThree].join(' ')}>
      <div className={[styles.paragraphDiv, styles.paragraphDivNoImg].join(' ')}>
        <Typography
          lineHeight="large"
          size="four"
          text={partFour}
          textAlign="justify"
        />
      </div>
    </section>
    <section className={[styles.paragraphSection, styles.paragraphMarginTwo].join(' ')}>
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
