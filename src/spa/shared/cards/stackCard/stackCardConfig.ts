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
    link: 'foo',
    png: antDesign,
  },
  apolloClient: {
    fullSize: true,
    label: 'Apollo Client',
    link: 'foo',
    png: apollo,
  },
  apolloServer: {
    fullSize: true,
    label: 'Apollo Server',
    link: 'foo',
    png: apollo,
  },
  babel: {
    fullSize: true,
    label: 'Babel',
    link: 'foo',
    png: babel,
  },
  circleCi: {
    fullSize: true,
    label: 'Circle CI',
    link: 'foo',
    png: circleCi,
  },
  cssModules: {
    fullSize: true,
    label: 'CSS Modules',
    link: 'foo',
    png: cssModules,
  },
  docker: {
    fullSize: true,
    label: 'Docker',
    link: 'foo',
    png: docker,
  },
  enzyme: {
    label: 'Enzyme',
    link: 'foo',
    png: enzyme,
  },
  eslint: {
    label: 'ESLint',
    link: 'foo',
    png: eslint,
  },
  express: {
    fullSize: true,
    label: 'Express',
    link: 'foo',
    png: express,
  },
  framerMotion: {
    fullSize: true,
    label: 'Framer Motion',
    link: 'foo',
    png: framerMotion,
  },
  graphql: {
    label: 'GraphQL',
    link: 'foo',
    png: graphql,
  },
  heroku: {
    fullSize: true,
    label: 'Heroku',
    link: 'foo',
    png: heroku,
  },
  jest: {
    label: 'Jest',
    link: 'foo',
    png: jest,
  },
  less: {
    label: 'Less',
    link: 'foo',
    png: less,
  },
  lottie: {
    fullSize: true,
    label: 'Lottie',
    link: 'foo',
    png: lottie,
  },
  node: {
    fullSize: true,
    label: 'Node.js',
    link: 'foo',
    png: node,
  },
  nucleo: {
    fullSize: true,
    label: 'Nucleo',
    link: 'foo',
    png: nucleo,
  },
  passport: {
    fullSize: true,
    label: 'Passport',
    link: 'foo',
    png: passport,
  },
  postgresql: {
    label: 'PostgreSQL',
    link: 'foo',
    png: postgresql,
  },
  prisma: {
    fullSize: true,
    label: 'Prisma',
    link: 'foo',
    png: prisma,
  },
  prismaCloud: {
    fullSize: true,
    label: 'Prisma Cloud',
    link: 'foo',
    png: prisma,
  },
  react: {
    fullSize: true,
    label: 'React',
    link: 'foo',
    png: react,
  },
  storybook: {
    label: 'Storybook',
    link: 'foo',
    png: storybook,
  },
  typescript: {
    fullSize: true,
    label: 'TypeScript',
    link: 'foo',
    png: typescript,
  },
  webpack: {
    label: 'Webpack',
    link: 'foo',
    png: webpack,
  },
};

export default config;
