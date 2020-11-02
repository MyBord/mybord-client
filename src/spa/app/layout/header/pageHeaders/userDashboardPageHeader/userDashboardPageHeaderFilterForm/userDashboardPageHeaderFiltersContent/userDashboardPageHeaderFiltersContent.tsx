import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Dropdown from 'inputs/dropdown/dropdown';
import Form from 'forms/form/form';
import FormItem from 'forms/formItem/formItem';
import Toggle from 'inputs/toggle/toggle';
import { ContentPopOverProps } from 'types/modalTypes';
import { FormProp } from 'types/formTypes';
import { Select } from 'antd';
import { USER_CARDS_WITH_FILTERS_QUERY } from 'schema/card';
import { dropdownCategoryOptions } from 'mockData/inputsMockData';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import * as styles from './userDashboardPageHeaderFiltersContent.module.less';

interface Props extends ContentPopOverProps {
  form?: FormProp;
}

const FormContent: React.FC<Props> = ({ form, setExtraRefs }) => {
  const dropdownRef = React.useRef<any>(null);
  const [userCardsQuery] = useLazyQuery(USER_CARDS_WITH_FILTERS_QUERY, { fetchPolicy: 'no-cache' });
  const { state } = useUserDashboardContext();

  React.useEffect(() => {
    if (dropdownRef && dropdownRef.current) {
      setExtraRefs([dropdownRef]);
    }
  }, [dropdownRef]);

  const handleToggleFavoriteFilter = async (): Promise<void> => {
    await userCardsQuery({
      variables: {
        isFavorite: !state.filters.isFavorite,
        isToDo: state.filters.isToDo,
      },
    });
  };

  const handleToggleToDoFilter = async (): Promise<void> => {
    await userCardsQuery({
      variables: {
        isFavorite: state.filters.isFavorite,
        isToDo: !state.filters.isToDo,
      },
    });
  };

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <FormItem
          fieldName="filter-favorites"
          form={form}
          label="Favorites:"
          labelType="blue"
          layout="horizontal"
        >
          <Toggle
            checked={state.filters.isFavorite}
            onClick={handleToggleFavoriteFilter}
            size="small"
          />
        </FormItem>
      </li>
      <li className={styles.li}>
        <FormItem
          fieldName="filter-todo"
          form={form}
          label="To Do:"
          labelType="blue"
          layout="horizontal"
        >
          <Toggle
            checked={state.filters.isToDo}
            onClick={handleToggleToDoFilter}
            size="small"
          />
        </FormItem>
      </li>
      <li className={[styles.li, styles.dropdownLi].join(' ')}>
        <FormItem
          fieldName="filter-category"
          form={form}
          label="Category:"
          labelType="blue"
          layout="horizontal"
        >
          <Dropdown multiSelect options={dropdownCategoryOptions} ref={dropdownRef} />
        </FormItem>
      </li>
    </ul>
  );
};

const UserDashboardPageHeaderFiltersContent: React.FC<ContentPopOverProps> = ({ setExtraRefs }) => (
  <Form>
    <FormContent setExtraRefs={setExtraRefs} />
  </Form>
);

export default UserDashboardPageHeaderFiltersContent;
