import handler from './handler';

describe('Hello world function', () => {
  test('default snapshot matches', () => {
    // backup the original value, could do with an beforeEach
    const tempProcEnvSOMEVAL = process.env.SOMEVAL;

    // uses process env SOMEVAL in test
    process.env.SOMEVAL = 'DUMMY';

    let response;
    const event = 'EVENT';
    const callback = (_, res) => {
      response = res;
    };

    handler(event, null, callback);

    expect(response).toMatchSnapshot();

    // restore the original value, could do with an beforeEach
    process.env.SOMEVAL = tempProcEnvSOMEVAL;
  });
});
