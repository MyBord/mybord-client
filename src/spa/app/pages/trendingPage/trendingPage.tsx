import * as React from 'react';
import api, { Resource } from 'api/api';
import { Foo } from 'schema/users';
import LottiePlayer from 'lotty/lottiePlayer';
import trendingAnimation from 'lotty/lotties/trending.json';

interface Props {
  resource: Resource<void>;
}

const TrendingPageContainer: React.FC = () => {
  const resource = api.query(Foo);
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <TrendingPageComponent resource={resource} />
    </React.Suspense>
  );
};

const TrendingPageComponent: React.FC<Props> = ({ resource }) => {
  const data = resource.data.read();
  console.log(' -- resource data: --');
  console.log(data);
  return (
    <LottiePlayer
      animationData={trendingAnimation}
      autoplay
      loop
      size={600}
    />
  );
};

export default TrendingPageContainer;
