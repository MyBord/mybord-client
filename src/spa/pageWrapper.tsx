import * as React from 'react';
import api from './api';

interface Props {
  Component: React.FC<WrappedComponentProps>;
  gqlString?: any;
  setHydration?: boolean;
}

interface WrappedComponentProps {
  data?: any;
}

const pageWrapper = ({
  Component,
  gqlString,
}: Props): React.FC => {
  // ----- NO DATA IS NEEDED ----- //
  if (!gqlString) {
    return Component;
  }

  // ----- DATA IS NEEDED ----- //
  const resource = api.query(gqlString);

  const FallbackComponent: React.FC = () => (
    <div
      style={{
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid #3498db',
        width: '120px',
        height: '120px',
        animation: 'spin 2s linear infinite',
        margin: '16px',
      }}
    />
  );

  const Page: React.FC = () => (
    <React.Suspense fallback={<FallbackComponent />}>
      <PageContent />
    </React.Suspense>
  );

  const PageContent: React.FC = () => {
    const data = resource.data.read();

    return <Component data={data} />;
  };

  return Page;
};

export default pageWrapper;
