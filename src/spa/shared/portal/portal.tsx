// Portals are cool. They allow us to create an element that is placed at the bottom of our dom
// tree (they allow us to "render children into a DOM node that exists outside the DOM hierarchy
// of the parent component").
// Sources:
//  * https://reactjs.org/docs/portals.html
//  * https://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions

/* eslint-disable */

import * as React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const Portal: React.FC<Props> = ({ children }) => {
  const [element, setElement] = React.useState<HTMLDivElement>(null);

  React.useEffect(() => {
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    document.body.appendChild(div);
    setElement(div);

    return () => {
      document.body.removeChild(div);
    }
  }, [])

  if (element) {
    return ReactDOM.createPortal(
      children,
      element,
    );
  }

  return null;
};

export default Portal;
