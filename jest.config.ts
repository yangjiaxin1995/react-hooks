import { createConfig, type Config } from '@umijs/test';

const defaultConfig = createConfig({
  target: 'browser',
});

const config: Config.InitialOptions = {
  ...defaultConfig,
  clearMocks: true,
  resetMocks: false,
  setupFiles: [
    ...(defaultConfig.setupFiles || []),
    'jest-localstorage-mock'
  ],
  setupFilesAfterEnv: [
    ...(defaultConfig.setupFilesAfterEnv || []),
    './tests/setupFilesAfterEnv.ts'
  ],
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}',
    '!**/demo/**',
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ],
};

export default config;
