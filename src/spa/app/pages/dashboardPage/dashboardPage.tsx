import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import { USER_CARDS_QUERY } from 'schema/card';
import DashboardCardsContainer from './dashboardCards/dashboardCardsContainer';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

interface Props {
  data: any;
}

const DashboardPage: React.FC<Props> = ({ data }) => (
  <section className={styles.section}>
    <DashboardHeader />
    <DashboardCardsContainer userCards={data.userCards} />
  </section>
);

export default pageWrapper(DashboardPage, USER_CARDS_QUERY);
