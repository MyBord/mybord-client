import * as React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className: string;
}

const Tag: React.FC<Props> = (props) => {
  console.log('55555');
  console.log(props);
  return (
    <div className={props.className}>
      {
        // @ts-ignore
        React.Children.map(props.children, (child) => React.cloneElement(child, { ...props }))
      }
    </div>
  );
};

export default Tag;
