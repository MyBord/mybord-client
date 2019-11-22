import * as React from 'react';
import dashboardResource from 'api/dashboardResource';
import gapi from 'gapi/gapi';


const DashboardPage: React.FC = () => {
  const resource = dashboardResource();
  const name = resource.person.read();
  const handleClick = async (): Promise<void> => {
    const result = await gapi.getYoutubeData('kJQP7kiw5Fk');
    console.log(result);
  };
  const handleChange = async (): Promise<void> => {
    const youtubeData = resource.video.read();
    console.log('^^^^^^^^^^^^^^');
    console.log(youtubeData);
  };
  return (
    <>
      <h1>{name}</h1>
      <button type="button" onClick={handleChange}>Click Me</button>
      <button type="button" onClick={handleClick}>Click Me</button>
    </>
  );
};

export default DashboardPage;
