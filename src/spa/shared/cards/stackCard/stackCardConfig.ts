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
    png: string;
  };
};

const config: Config = {
  antDesign: { png: antDesign },
  apolloClient: { png: apollo, fullSize: true },
  apolloServer: { png: apollo, fullSize: true },
  babel: { png: babel, fullSize: true },
  circleCi: { png: circleCi },
  cssModules: { png: cssModules },
  docker: { png: docker, fullSize: true },
  enzyme: { png: enzyme },
  eslint: { png: eslint },
  express: { png: express },
  framerMotion: { png: framerMotion, fullSize: true },
  graphql: { png: graphql },
  heroku: { png: heroku, fullSize: true },
  jest: { png: jest },
  less: { png: less },
  lottie: { png: lottie, fullSize: true },
  node: { png: node, fullSize: true },
  nucleo: { png: nucleo, fullSize: true },
  passport: { png: passport, fullSize: true },
  postgresql: { png: postgresql },
  prisma: { png: prisma, fullSize: true },
  prismaCloud: { png: prisma, fullSize: true },
  react: { png: react },
  storybook: { png: storybook },
  typescript: { png: typescript, fullSize: true },
  webpack: { png: webpack },
};

export default config;
