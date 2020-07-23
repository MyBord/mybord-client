import * as React from 'react';
import antDesign from 'assets/icons/antDesign.png';
import apollo from 'assets/icons/apollo.png';
import babel from 'assets/icons/babel.png';
import circleCi from 'assets/icons/circleCi.png';
import cssModules from 'assets/icons/cssModules.png';
import enzyme from 'assets/icons/enzyme.png';
import eslint from 'assets/icons/eslint.png';
import express from 'assets/icons/express.png';
import framerMotion from 'assets/icons/framerMotion.png';
import graphql from 'assets/icons/graphql.png';
import jest from 'assets/icons/jest.png';
import less from 'assets/icons/less.png';
import lottie from 'assets/icons/lottie.png';
import node from 'assets/icons/node.png';
import nucleo from 'assets/icons/nucleo.png';
import passport from 'assets/icons/passport.png';
import postgresql from 'assets/icons/postgresql.png';
import prisma from 'assets/icons/prisma.png';
import react from 'assets/icons/react.png';
import storybook from 'assets/icons/storybook.png';
import typescript from 'assets/icons/typescript.png';
import webpack from 'assets/icons/webpack.png';
import * as styles from './stackCard.module.less';

const getImage = (id: Props['id']): string => {
  switch (id) {
    case 'antDesign':
      return antDesign;
    case 'apolloClient':
      return apollo;
    case 'apolloServer':
      return apollo;
    case 'babel':
      return babel;
    case 'circleCi':
      return circleCi;
    case 'cssModules':
      return cssModules;
    case 'enzyme':
      return enzyme;
    case 'eslint':
      return eslint;
    case 'express':
      return express;
    case 'framerMotion':
      return framerMotion;
    case 'graphql':
      return graphql;
    case 'jest':
      return jest;
    case 'less':
      return less;
    case 'lottie':
      return lottie;
    case 'node':
      return node;
    case 'nucleo':
      return nucleo;
    case 'passport':
      return passport;
    case 'postgresql':
      return postgresql;
    case 'prisma':
      return prisma;
    case 'react':
      return react;
    case 'storybook':
      return storybook;
    case 'typescript':
      return typescript;
    case 'webpack':
      return webpack;
    default:
      throw Error(`Unknown id in stack card: ${id}`);
  }
};

interface Props {
  id:
  'antDesign' |
  'apolloClient' |
  'apolloServer' |
  'babel' |
  'circleCi' |
  'cssModules' |
  'enzyme' |
  'eslint' |
  'express' |
  'framerMotion' |
  'graphql' |
  'jest' |
  'less' |
  'lottie' |
  'node' |
  'nucleo' |
  'passport' |
  'postgresql' |
  'prisma' |
  'react' |
  'storybook' |
  'typescript' |
  'webpack';
}

const StackCard: React.FC<Props> = ({ id }) => (
  <div className={styles.div}>
    <img alt="react" className={styles.img} src={getImage(id)} />
  </div>
);

export default StackCard;
