import cOMPONENT_NAME from './cOMPONENT_NAME';

const main = (event, context, callback) => {
  const response = cOMPONENT_NAME(200, 'You should rework this component', event);

  callback(null, response);
};

export default main;
