module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': `<rootDir>/etc/test/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/etc/test/jest/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  // testURL: `http://localhost`,
  setupFiles: [`<rootDir>/etc/test/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/etc/test/jest/setup-test-env.js'],
  rootDir: '../../../',
}
