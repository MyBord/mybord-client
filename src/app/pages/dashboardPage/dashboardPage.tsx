import * as React from 'react';
import fakeApi from 'api/fakeApi';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import gapi from 'google/gapi';

const DashboardPage: React.FC = () => {
  const videos = fakeApi.videos.read();
  const [youtubeData, setYoutubeData] = React.useState(null);
  const [youtubeId, setYoutubeId] = React.useState('kJQP7kiw5Fk');
  const handleClick = async (): Promise<void> => {
    const result = await gapi.getYoutubeData(youtubeId);
    console.log(result);
    setYoutubeData(result);
  };
  // @ts-ignore
  const handleChange = (event) => setYoutubeId(event.target.value);
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} type="button">Click Me</button>
      {
        youtubeData && <YoutubeCard youtubeData={youtubeData} />
      }
    </>
  );
};

export default DashboardPage;
