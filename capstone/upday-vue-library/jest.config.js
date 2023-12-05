// jest.config.js
module.exports = {
    moduleFileExtensions: ["js", "json", "vue"],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.js$': 'babel-jest',
      },
    preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    testEnvironment: 'jest-environment-jsdom',
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
     },
    moduleNameMapper: {
     
         '^@/(.*)$': '<rootDir>/src/$1'
      }
    // Add any additional Jest configurations here
  };
  
