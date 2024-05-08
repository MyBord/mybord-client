import * as React from 'react';
import UserDashboardPageContainer from './userDashboardPageContainer';

// @ts-expect-error foo
const UserDashboardPage: React.FC = () => <UserDashboardPageContainer />;

export default UserDashboardPage;
