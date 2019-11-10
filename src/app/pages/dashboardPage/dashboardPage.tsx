import * as React from 'react';
import fakeApi from 'api/fakeApi';
import VideoCard from 'shared/cards/videoCard/videoCard';
import gapi from 'google/gapi';

const DashboardPage: React.FC = () => {
  const videos = fakeApi.videos.read();
  const [videoData, setVideoData] = React.useState(null);
  const handleClick = async (): Promise<void> => {
    const result = await gapi.getVideoData('lLSOEddX3sY');
    setVideoData(result);
  };
  return (
    <>
      <button onClick={handleClick} type="button">Click Me</button>
      {
        videoData && <VideoCard videoData={videoData} />
      }
    </>
  );
};

export default DashboardPage;
