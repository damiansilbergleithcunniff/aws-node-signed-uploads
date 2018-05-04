const devConfig = require('../config.dev.json');
const testConfig = require('../config.test.json');
const stageConfig = require('../config.stage.json');
const prodConfig = require('../config.prod.json');

describe('Config Files', () => {
  test('dev config to be correct', () => {
    expect(devConfig).toMatchSnapshot();
  });

  test('test config to be correct', () => {
    expect(testConfig).toMatchSnapshot();
  });

  test('stage config to be correct', () => {
    expect(stageConfig).toMatchSnapshot();
  });

  test('prod config to be correct', () => {
    expect(prodConfig).toMatchSnapshot();
  });
});
