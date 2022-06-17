/* eslint-disable */
export default {
   displayName: 'main-front',
   preset: '../../jest.preset.js',
   transform: {
      '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
      '^.+\\.[tj]sx?$': 'babel-jest',
   },
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
   coverageDirectory: '../../coverage/apps/main-front',
};
