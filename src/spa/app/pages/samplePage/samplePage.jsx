/* eslint-disable */

import React from 'react';
import sampleApi from 'api/sampleApi';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';

// eslint-disable-next-line react/prop-types
const SamplePage = ({ videoId }) => {
  const youtubeVideoDataResource = sampleApi.getYoutubeVideoData(videoId);
  return (
    <React.Suspense
      fallback={<h1>Loading profile...</h1>}
    >
      <YoutubeCard resource={youtubeVideoDataResource} />
    </React.Suspense>
  );
};

export default SamplePage;
