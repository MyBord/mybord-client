import * as React from 'react';
import FooterComponent from './footerComponent';

const FooterContainer: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  // todo: set type of state
  const [imgStyles, setImgStyles] = React.useState(null);
  // todo: set type of state
  const [hrStyles, setHrStyles] = React.useState(null);

  React.useEffect(() => {
    if (contentRef.current) {
      const contentRect = contentRef.current.getBoundingClientRect();
      // don't always be in center if it is wider
      setImgStyles({ left: `${(contentRect.left / 2) - 16}px` });
      setHrStyles({ width: `${contentRect.width - 96}px` });
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
