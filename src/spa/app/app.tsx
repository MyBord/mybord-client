import * as React from 'react';
import { fetchProfileData } from 'api/fakeApi';

const resource = fetchProfileData();

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <h1 style={{ margin: '3rem' }}>{isLoaded ? 'LOADED' : 'NOT LOADED'}</h1>
      <React.Suspense fallback={<h1>Loading profile...</h1>}>
        <AppDetails setIsLoaded={setIsLoaded} />
      </React.Suspense>
    </>
  );
};

interface Props {
  setIsLoaded: (status: boolean) => void;
}

const AppDetails: React.FC<Props> = ({ setIsLoaded }) => {
  const todo = resource.cards.read();
  console.log('**********');
  console.log(todo);

  React.useEffect(() => setIsLoaded(true), []);

  return <h1>hello world</h1>;
};

export default App;
