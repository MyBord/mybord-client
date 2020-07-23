import * as React from 'react';
import babel from 'assets/icons/babel.png';
import circleCi from 'assets/icons/circleCi.png';
import eslint from 'assets/icons/eslint.png';
import graphql from 'assets/icons/graphql.png';
import jest from 'assets/icons/jest.png';
import typescript from 'assets/icons/typescript.png';
import webpack from 'assets/icons/webpack.png';
import * as styles from './stackCard.module.less';

const getImage = (id: Props['id']): string => {
  switch (id) {
    case 'babel':
      return babel;
    case 'circleCi':
      return circleCi;
    case 'eslint':
      return eslint;
    case 'graphql':
      return graphql;
    case 'jest':
      return jest;
    case 'typescript':
      return typescript;
    case 'webpack':
      return webpack;
    default:
      throw Error('Unknown id');
  }
};

interface Props {
  id: 'babel' |
  'circleCi' |
  'eslint' |
  'graphql' |
  'jest' |
  'typescript' |
  'webpack';
}

const StackCard: React.FC<Props> = ({ id }) => (
  <div className={styles.div}>
    <img alt="react" className={styles.img} src={getImage(id)} />
  </div>
);

export default StackCard;
