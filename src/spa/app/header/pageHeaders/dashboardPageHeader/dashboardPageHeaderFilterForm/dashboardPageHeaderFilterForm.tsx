import * as React from 'react';
import Form from 'forms/form/form';
import DashboardPageHeaderFilterFormContent from './dashboardPageHeaderFilterFormContent';

const DashboardPageHeaderFilterForm: React.FC = () => (
  <Form onSubmit={() => {}}>
    <DashboardPageHeaderFilterFormContent />
  </Form>
);

export default DashboardPageHeaderFilterForm;
