import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Checkbox from 'inputs/checkbox/checkbox';
import Dropdown from 'inputs/dropdown/dropdown';
import FormItem from 'formItem/formItem';
import UserDashboardFiltersAnimation from 'animations/userDashboardFiltersAnimation';
import { CardCategory } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { SET_CARD_CATEGORIES_FILTER } from 'context/userDashboardContext/userDashboardReducerTypes';
import { dropdownCategoryOptions } from 'mockData/inputsMockData';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import * as styles from './userDashboardPageHeaderFilters.module.less';

interface Props {
  form: FormProp;
}

const UserDashboardPageHeaderFilters: React.FC<Props> = ({ form }) => {
  const dropdownRef = React.useRef<any>(null);
  const { state, dispatch } = useUserDashboardContext();

  const { categories, isFavorite, isToDo } = state.filters;

  React.useEffect(() => {
    form.setFieldsValue({ filterCategory: categories });
  }, [categories]);

  const handleCategoriesChange = async (cardCategories: CardCategory[]): Promise<void> => {
    dispatch({ type: SET_CARD_CATEGORIES_FILTER, categories: cardCategories });
  };

  const handleToggleFavoriteFilter = async (): Promise<void> => {
  };

  const handleToggleToDoFilter = async (): Promise<void> => {
  };

  return (
    <UserDashboardFiltersAnimation showFilters={state.filters.showFilters}>
      <div className={styles.divContainer}>
        <FormItem
          fieldName="filterFavorites"
          form={form}
          label="Favorites:"
          labelType="blue"
          layout="horizontal"
        >
          {/*<Checkbox*/}
          {/*  checked={state.filters.isFavorite}*/}
          {/*  onChange={handleToggleFavoriteFilter}*/}
          {/*/>*/}
        </FormItem>
        <FormItem
          fieldName="filterTodo"
          form={form}
          label="To Do:"
          labelType="blue"
          layout="horizontal"
        >
          {/*<Checkbox*/}
          {/*  checked={state.filters.isToDo}*/}
          {/*  onChange={handleToggleToDoFilter}*/}
          {/*/>*/}
        </FormItem>
        <div className={styles.dropdownDiv}>
          <FormItem
            fieldName="filterCategory"
            form={form}
            label="Category:"
            labelType="blue"
            layout="horizontal"
          >
            {/*<Dropdown*/}
            {/*  multiSelect*/}
            {/*  onChange={handleCategoriesChange}*/}
            {/*  options={dropdownCategoryOptions}*/}
            {/*  ref={dropdownRef}*/}
            {/*/>*/}
          </FormItem>
        </div>
      </div>
    </UserDashboardFiltersAnimation>
  );
};

export default UserDashboardPageHeaderFilters;
