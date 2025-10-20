module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFiles: ["<rootDir>/jest.setup.js"], // solo polyfill
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // extiende `expect`
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};