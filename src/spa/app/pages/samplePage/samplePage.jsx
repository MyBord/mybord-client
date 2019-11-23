/* eslint-disable */

import React from 'react';
import {
  fetchDummyData,
  fetchProfileData,
  getDummyData,
  getYoutubeData,
} from 'api/sampleApi';

const getNextId = id => (id === 3 ? 0 : id + 1);

// eslint-disable-next-line react/prop-types
const SamplePage = ({ id }) => {
  const [dummyResource, setDummyResource] = React.useState(getDummyData());
  const [resource, setResource] = React.useState(fetchProfileData(id));
  const [youtubeDataResource, setYoutubeDataResource] = React.useState(getYoutubeData('kJQP7kiw5Fk'));
  const handleClick = () => {
    const nextUserId = getNextId(resource.userId);
    setResource(fetchProfileData(nextUserId));
  };
  return (
    <>
      <button onClick={fetchDummyData} type="button">fetch dummy data</button>
      <button onClick={handleClick} type="button">Next</button>
      <ProfilePage
        dummyResource={dummyResource}
        resource={resource}
        youtubeDataResource={youtubeDataResource}
      />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const DummyPage = ({ resource }) => {
// eslint-disable-next-line react/prop-types
  const data = resource.dummyData.read();
  return <h1>{data.employee_name}</h1>;
};

// eslint-disable-next-line react/prop-types
const VideoPage = ({ resource }) => {
// eslint-disable-next-line react/prop-types
  const data = resource.youtubeData.read();
  console.log('******** youtube data: ************');
  console.log(data);
  return <h1>hello world</h1>;
};

// eslint-disable-next-line react/prop-types
const ProfilePage = ({ dummyResource, resource, youtubeDataResource }) => (
  <React.Suspense
    fallback={<h1>Loading profile...</h1>}
  >
    <ProfileDetails resource={resource} />
    <React.Suspense
      fallback={<h1>Loading posts...</h1>}
    >
      <ProfileTimeline resource={resource} />
      <VideoPage resource={youtubeDataResource} />
      <DummyPage resource={dummyResource} />
    </React.Suspense>
  </React.Suspense>
);

// eslint-disable-next-line react/prop-types
const ProfileDetails = ({ resource }) => {
  // eslint-disable-next-line react/prop-types
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
};

// eslint-disable-next-line react/prop-types
const ProfileTimeline = ({ resource }) => {
  // eslint-disable-next-line react/prop-types
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};

export default SamplePage;
