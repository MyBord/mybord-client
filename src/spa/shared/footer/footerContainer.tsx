import * as React from 'react';
import { FooterHrStyle, FooterImgStyle } from 'types/footerTypes';
import FooterComponent from './footerComponent';
import { getHrStyles, getImgStyles } from './getFooterStyles';

const FooterContainer: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [hrStyles, setHrStyles] = React.useState<FooterHrStyle>(null);
  const [imgStyles, setImgStyles] = React.useState<FooterImgStyle>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setImgStyles(getImgStyles(contentRef));
      setHrStyles(getHrStyles(contentRef));
    }
  }, [contentRef, imgStyles]);

  return (
    <FooterComponent
      ref={contentRef}
      imgStyles={imgStyles}
      hrStyles={hrStyles}
    />
  );
};

export default FooterContainer;
