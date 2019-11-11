import * as React from 'react';
import fakeApi from 'api/fakeApi';
import VideoCard from 'shared/cards/videoCard/videoCard';
import gapi from 'google/gapi';

const DashboardPage: React.FC = () => {
  const videos = fakeApi.videos.read();
  const [videoData, setVideoData] = React.useState(null);
  const [videoId, setVideoId] = React.useState('kJQP7kiw5Fk');
  const handleClick = async (): Promise<void> => {
    const result = await gapi.getVideoData(videoId);
    console.log(result);
    setVideoData(result);
  };
  // @ts-ignore
  const handleChange = (event) => setVideoId(event.target.value);
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} type="button">Click Me</button>
      {
        videoData && <VideoCard videoData={videoData} />
      }
    </>
  );
};

export default DashboardPage;
