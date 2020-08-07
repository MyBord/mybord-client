import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import logo from 'assets/logo/logo.png';
import memo from 'utils/memo';
import { FooterHrStyle, FooterImgStyle } from 'types/footerTypes';
import FooterContent from './footerContent/footerContent';
import * as styles from './footer.module.less';

const CopyrightContent: React.FC = () => (
  <div className={styles.copyrightDiv}>
    <Icon color="white" iconName="copyright" size={20} />
  </div>
);

interface Props {
  hrStyles: FooterHrStyle;
  imgStyles: FooterImgStyle;
}

const FooterComponent = React.forwardRef<HTMLDivElement, Props>(({ hrStyles, imgStyles }, ref) => (
  <section className={styles.section}>
    <img
      alt="MyBord logo"
      className={styles.logo}
      src={logo}
      style={imgStyles}
    />
    <FooterContent ref={ref} />
    <hr className={styles.hr} style={hrStyles} />
    <div className={styles.copyrightContent}>
      <Typography
        Content={CopyrightContent}
        color="white"
        size="three"
        text="Copyright 2020 by MyBord.io. All Rights Reserved."
      />
    </div>
  </section>
));

export default memo(FooterComponent);
