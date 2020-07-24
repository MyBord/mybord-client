import antDesign from 'assets/icons/antDesign.png';
import apollo from 'assets/icons/apollo.png';
import babel from 'assets/icons/babel.png';
import circleCi from 'assets/icons/circleCi.png';
import cssModules from 'assets/icons/cssModules.png';
import docker from 'assets/icons/docker.png';
import enzyme from 'assets/icons/enzyme.png';
import eslint from 'assets/icons/eslint.png';
import express from 'assets/icons/express.png';
import framerMotion from 'assets/icons/framerMotion.png';
import graphql from 'assets/icons/graphql.png';
import heroku from 'assets/icons/heroku.png';
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

export type Id =
'antDesign' |
'apolloClient' |
'apolloServer' |
'babel' |
'circleCi' |
'cssModules' |
'docker' |
'enzyme' |
'eslint' |
'express' |
'framerMotion' |
'graphql' |
'heroku' |
'jest' |
'less' |
'lottie' |
'node' |
'nucleo' |
'passport' |
'postgresql' |
'prisma' |
'prismaCloud' |
'react' |
'storybook' |
'typescript' |
'webpack';

type Config = {
  [key in Id]: {
    fullSize?: boolean;
    label: string;
    link: string;
    png: string;
  };
};

const config: Config = {
  antDesign: {
    label: 'Ant Design',
    link: 'https://ant.design/',
    png: antDesign,
  },
  apolloClient: {
    fullSize: true,
    label: 'Apollo Client',
    link: 'https://www.apollographql.com/docs/react/',
    png: apollo,
  },
  apolloServer: {
    fullSize: true,
    label: 'Apollo Server',
    link: 'https://www.apollographql.com/docs/apollo-server/v1/servers/express/',
    png: apollo,
  },
  babel: {
    fullSize: true,
    label: 'Babel',
    link: 'https://babeljs.io',
    png: babel,
  },
  circleCi: {
    fullSize: true,
    label: 'Circle CI',
    link: 'https://circleci.com',
    png: circleCi,
  },
  cssModules: {
    fullSize: true,
    label: 'CSS Modules',
    link: 'https://github.com/css-modules/css-modules',
    png: cssModules,
  },
  docker: {
    fullSize: true,
    label: 'Docker',
    link: 'https://www.docker.com/',
    png: docker,
  },
  enzyme: {
    label: 'Enzyme',
    link: 'https://airbnb.io/enzyme/',
    png: enzyme,
  },
  eslint: {
    label: 'ESLint',
    link: 'https://eslint.org',
    png: eslint,
  },
  express: {
    fullSize: true,
    label: 'Express',
    link: 'https://expressjs.com/',
    png: express,
  },
  framerMotion: {
    fullSize: true,
    label: 'Framer Motion',
    link: 'https://www.framer.com/motion/',
    png: framerMotion,
  },
  graphql: {
    label: 'GraphQL',
    link: 'https://graphql.org/',
    png: graphql,
  },
  heroku: {
    fullSize: true,
    label: 'Heroku',
    link: 'https://www.heroku.com/',
    png: heroku,
  },
  jest: {
    label: 'Jest',
    link: 'https://jestjs.io',
    png: jest,
  },
  less: {
    label: 'Less',
    link: 'http://lesscss.org/',
    png: less,
  },
  lottie: {
    fullSize: true,
    label: 'Lottie',
    link: 'https://airbnb.io/lottie/#/',
    png: lottie,
  },
  node: {
    fullSize: true,
    label: 'Node.js',
    link: 'https://nodejs.org/en/',
    png: node,
  },
  nucleo: {
    fullSize: true,
    label: 'Nucleo',
    link: 'https://nucleoapp.com/',
    png: nucleo,
  },
  passport: {
    fullSize: true,
    label: 'Passport',
    link: 'http://www.passportjs.org/',
    png: passport,
  },
  postgresql: {
    label: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    png: postgresql,
  },
  prisma: {
    fullSize: true,
    label: 'Prisma',
    link: 'https://www.prisma.io/',
    png: prisma,
  },
  prismaCloud: {
    fullSize: true,
    label: 'Prisma Cloud',
    link: 'https://www.prisma.io/cloud',
    png: prisma,
  },
  react: {
    fullSize: true,
    label: 'React',
    link: 'https://reactjs.org',
    png: react,
  },
  storybook: {
    label: 'Storybook',
    link: 'https://storybook.js.org',
    png: storybook,
  },
  typescript: {
    fullSize: true,
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    png: typescript,
  },
  webpack: {
    label: 'Webpack',
    link: 'https://webpack.js.org',
    png: webpack,
  },
};

export default config;
