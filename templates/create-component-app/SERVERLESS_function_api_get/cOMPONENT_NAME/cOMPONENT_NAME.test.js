import cOMPONENT_NAME from './cOMPONENT_NAME';

describe('cOMPONENT_NAME', () => {
  test('creates correct response', () => {
    const dummyStatus = 'DUMMY STATUS';
    const dummyMessage = 'DUMMY MESSAGE';
    const dummyEvent = 'DUMMY EVENT';
    const response = cOMPONENT_NAME(dummyStatus, dummyMessage, dummyEvent);

    expect(response).toMatchSnapshot();
  });
});
