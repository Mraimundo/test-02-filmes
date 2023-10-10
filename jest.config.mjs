/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,jsx,tsx}"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mock/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};

export default config;
