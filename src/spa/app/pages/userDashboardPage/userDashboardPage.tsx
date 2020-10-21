import * as React from 'react';
import Dropdown from 'inputs/dropdown/dropdown';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import { FormProp } from 'types/formTypes';
import { dropdownCategoryOptions } from 'mockData/inputsMockData';
import UserDashboardPageHeaderFiltersContent
  from 'header/pageHeaders/userDashboardPageHeader/userDashboardPageHeaderFilterForm/userDashboardPageHeaderFiltersContent/userDashboardPageHeaderFiltersContent';
import UserDashboardPageContainer from './userDashboardPageContainer';

interface Props {
  form?: FormProp;
}

const Foo: React.FC<Props> = ({ form }) => (
  <FormItem fieldName="foo-test-test" form={form}>
    <Dropdown options={dropdownCategoryOptions} />
  </FormItem>
);

const UserDashboardPage: React.FC = () => (
  <>
    <UserDashboardPageContainer />
    <UserDashboardPageHeaderFiltersContent />
    <Form>
      <Foo />
    </Form>
  </>
);

export default UserDashboardPage;
