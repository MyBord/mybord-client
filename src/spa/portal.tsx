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
