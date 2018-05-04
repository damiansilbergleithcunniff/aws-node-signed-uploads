import handler from './handler';

describe('cOMPONENT_NAME handler', () => {
  test('generates expected response', () => {
    let response;
    const event = 'EVENT';
    const callback = (_, res) => {
      response = res;
    };

    handler(event, null, callback);

    expect(response).toMatchSnapshot();
  });
});
