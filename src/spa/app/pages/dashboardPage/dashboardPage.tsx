import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';
import { USER_CARDS_QUERY } from 'schema/card';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import DashboardCardsContainer from './dashboardCards/dashboardCardsContainer';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import * as styles from './dashboardPage.module.less';

interface Props {
  data: any;
}

const DashboardPage: React.FC<Props> = ({ data }) => {
  const { dispatch, state } = useDashboardCardsContext();
  //
  // console.log('444');
  // console.log(state);

  return (
    <section className={styles.section}>
      <DashboardHeader />
      <DashboardCardsContainer
        dispatch={dispatch}
        state={state}
        userCards={data.userCards}
      />
    </section>
  );
};

// const Foo = React.memo(DashboardPage, (prevProps, nextProps) => {
//   console.log('22222222');
//   console.log(prevProps);
//   console.log(nextProps);
//   console.log(JSON.stringify(prevProps));
//   console.log(JSON.stringify(nextProps));
//   console.log(JSON.stringify(prevProps) === JSON.stringify(nextProps));
//   console.log('22222222');
//   return false;
//   // return true;
// });

// export default pageWrapper(Foo, USER_CARDS_QUERY);
export default pageWrapper(DashboardPage, USER_CARDS_QUERY);
