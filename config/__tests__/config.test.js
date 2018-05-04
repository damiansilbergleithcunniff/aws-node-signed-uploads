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

  test('dev has correct stage and region', () => {
    expect(devConfig.stage).toBe('dev');
    expect(devConfig.region).toBe('us-east-1');
  });

  test('test has correct stage and region', () => {
    expect(testConfig.stage).toBe('test');
    expect(testConfig.region).toBe('us-east-1');
  });

  test('stage has correct stage and region', () => {
    expect(stageConfig.stage).toBe('stage');
    expect(stageConfig.region).toBe('us-east-1');
  });

  test('prod has correct stage and region', () => {
    expect(prodConfig.stage).toBe('prod');
    expect(prodConfig.region).toBe('us-east-1');
  });

});

