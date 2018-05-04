import handler from './handler';

describe('helloWorld handler', () => {
  test('generates expected response using SOMEVAL environment variable', () => {
    const tmp = process.env.SOMEVAL;
    process.env.SOMEVAL = 'SOME VALUE FROM ENV';

    let response;
    const event = 'EVENT';
    const callback = (_, res) => {
      response = res;
    };

    handler(event, null, callback);

    expect(response).toMatchSnapshot();

    // restore whatever was there
    process.env.SOMEVAL = tmp;
  });
});
