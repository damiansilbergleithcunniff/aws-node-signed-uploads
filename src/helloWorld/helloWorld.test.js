import helloWorld from './helloWorld';

describe('helloWorld', () => {
  test('creates correct response', () => {
    const dummyStatus = 'DUMMY STATUS';
    const dummyMessage = 'DUMMY MESSAGE';
    const dummyEvent = 'DUMMY EVENT';
    const response = helloWorld(dummyStatus, dummyMessage, dummyEvent);

    expect(response).toMatchSnapshot();
  });
});
