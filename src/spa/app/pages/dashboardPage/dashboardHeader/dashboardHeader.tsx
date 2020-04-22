import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import * as styles from './dashboardHeader.module.less';

const DashboardHeader: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD);

  const handleClick = async (): Promise<void> => {
    await createYoutubeCard({
      variables: {
        videoId: 'ap8lmL8ogkI',
      },
    });
  };

  return (
    <section className={styles.section}>
      <Button label="Add Video" onClick={handleClick} />
      <h1>this is the header</h1>
    </section>
  );
};

export default DashboardHeader;
