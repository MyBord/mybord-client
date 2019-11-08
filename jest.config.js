module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^buttons(.*)$': '<rootDir>/src/app/shared/buttons$1',
    '^header(.*)$': '<rootDir>/src/app/header$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^icons(.*)$': '<rootDir>/src/app/shared/icons$1',
    '^lotty(.*)$': '<rootDir>/src/thirdParty/lotty$1',
    '^navigation(.*)$': '<rootDir>/src/app/navigation$1',
    '^pages(.*)$': '<rootDir>/src/app/pages$1',
    '^shared(.*)$': '<rootDir>/src/app/shared$1',
    '^static(.*)$': '<rootDir>/src/static$1',
    '^storybook(.*)$': '<rootDir>/src/thirdParty/storybook$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^typography(.*)$': '<rootDir>/src/app/shared/typography$1',
    '^types(.*)$': '<rootDir>/src/types$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
