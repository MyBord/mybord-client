import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import { GET_USER_CARDS } from 'schema/card';
import DashboardCards from './dashboardCards/dashboardCards';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

interface Props {
  data: any;
}

const DashboardPage: React.FC<Props> = ({ data }) => (
  <section className={styles.section}>
    <DashboardHeader />
    <DashboardCards userCards={data.userCards} />
  </section>
);

export default pageWrapper(DashboardPage, GET_USER_CARDS);
