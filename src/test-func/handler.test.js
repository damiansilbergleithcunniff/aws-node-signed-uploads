import { hello } from './handler';

describe('Hello world function', () => {
  test('default snapshot matches', () => {
    let response;
    const event = "EVENT";
    const callback = (_, res) => { response = res };
    hello(event, null, callback);

    expect(response).toMatchSnapshot();
  });
});
