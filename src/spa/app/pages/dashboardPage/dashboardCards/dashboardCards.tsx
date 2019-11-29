import * as React from 'react';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import getYoutubeId from 'utils/getYoutubeId';
import videos from 'static/videos';
import * as styles from './dashboardCards.module.scss';

const DashboardCards: React.FC = () => (
  <section className={styles.section}>
    {
      videos.map((videoUrl: string) => (
        <YoutubeCard key={videoUrl} videoId={getYoutubeId(videoUrl)} />
      ))
    }
    {
      // we create some phantom cards that do not appear visible but are rendered so that we can
      // `justify-content: center` our flexbox card content while having our last row be
      // left-aligned.
      Array(10).fill(null).map(() => <PhantomCard />)
    }
  </section>
);

export default DashboardCards;
