import * as React from 'react';
import Typography from 'typography/typography';
import bookshelf from 'images/bookshelf.jpg';
import spongebog from 'images/spongebob.png';
import {
  partOne,
  partTwo,
  partThree,
  partFour,
  partFive,
} from './aboutForUsersText';
import * as styles from './aboutForUsers.module.less';

const AboutForUsers: React.FC = () => (
  <>
    <section className={styles.paragraphSection}>
      <img
        alt="snl"
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

export default AboutForUsers;
