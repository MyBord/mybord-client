import * as React from 'react';
import gql from 'graphql-tag';
import pageWrapper from './pageWrapper';

export const USER_CARDS_QUERY = gql`
  query {
    userCards{
      id
      isFavorite
      isToDo
      type
      cardData{
        youtubeCardData{
          channelThumbnail
          channelTitle
          duration
          likes
          publishedAt
          videoId
          videoThumbnail
          videoTitle
          views
        }
      }
    }
  }
`;

interface Props {
  data: any;
}

const PageOne: React.FC<Props> = ({ data }) => {
  console.log(' ----- DASHBOARD DATA ----- ');
  console.log(data);
  console.log(' ----- DASHBOARD DATA ----- ');

  return (
    <div
      style={{
        alignItems: 'center',
        background: 'blue',
        display: 'flex',
        height: '15rem',
        justifyContent: 'center',
        width: '15rem',
      }}
    >
      <h1 style={{ color: 'white' }}>Page One</h1>
    </div>
  );
};

export default pageWrapper({
  Component: PageOne,
  gqlString: USER_CARDS_QUERY,
  setHydration: false,
});
