import * as React from 'react';
import Typography from 'typography/typography';
import { FooterProps } from 'types/footerTypes';
import footerIcons from '../footerIcons/footerIcons';
import * as styles from './footerContent.module.less';

const FooterContent = React.forwardRef<HTMLDivElement, FooterProps>(({ isApp }, ref) => (
  <div className={styles.footerContent} ref={ref}>
    <div className={styles.list}>
      {/* <Typography */}
      {/*  color={isApp ? 'black' : 'white'} */}
      {/*  size="four" */}
      {/*  text="Have a question?" */}
      {/*  weight="bold" */}
      {/* /> */}
      <ul className={styles.ul}>
        <li>
          {/* <Typography */}
          {/*  Content={() => <footerIcons.EmailContent isApp={isApp} />} */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="mailto:info@mybord.io" */}
          {/*  size="three" */}
          {/*  text="info@mybord.io" */}
          {/* /> */}
        </li>
      </ul>
    </div>
    <div className={styles.list}>
      {/* <Typography */}
      {/*  color={isApp ? 'black' : 'white'} */}
      {/*  size="four" */}
      {/*  text="Legal" */}
      {/*  weight="bold" */}
      {/* /> */}
      <ul className={styles.ul}>
        <li>
          {/* <Typography */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="/terms" */}
          {/*  size="three" */}
          {/*  text="Terms & Conditions" */}
          {/* /> */}
        </li>
        <li>
          {/* <Typography */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="/privacy" */}
          {/*  size="three" */}
          {/*  text="Privacy Policy" */}
          {/* /> */}
        </li>
      </ul>
    </div>
    <div className={styles.list}>
      {/* <Typography */}
      {/*  color={isApp ? 'black' : 'white'} */}
      {/*  size="four" */}
      {/*  text="Social" */}
      {/*  weight="bold" */}
      {/* /> */}
      <ul className={styles.ul}>
        <li>
          {/* <Typography */}
          {/*  Content={() => <footerIcons.InstagramContent isApp={isApp} />} */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="https://www.instagram.com/" */}
          {/*  size="three" */}
          {/*  text="Instagram" */}
          {/* /> */}
        </li>
        <li>
          {/* <Typography */}
          {/*  Content={() => <footerIcons.LinkedinContent isApp={isApp} />} */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="https://www.linkedin.com/" */}
          {/*  size="three" */}
          {/*  text="Linkedin" */}
          {/* /> */}
        </li>
        <li>
          {/* <Typography */}
          {/*  Content={() => <footerIcons.TwitterContent isApp={isApp} />} */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="https://www.twitter.com/" */}
          {/*  size="three" */}
          {/*  text="Twitter" */}
          {/* /> */}
        </li>
        <li>
          {/* <Typography */}
          {/*  Content={() => <footerIcons.FacebookContent isApp={isApp} />} */}
          {/*  color={isApp ? 'black' : 'white'} */}
          {/*  link="https://www.facebook.com/" */}
          {/*  size="three" */}
          {/*  text="Facebook" */}
          {/* /> */}
        </li>
      </ul>
    </div>
  </div>
));

export default FooterContent;
