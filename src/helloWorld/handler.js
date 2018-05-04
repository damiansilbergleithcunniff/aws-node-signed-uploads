import helloWorld from './helloWorld';

const main = (event, context, callback) => {
  const response = helloWorld(200, 'You should rework this component', event);

  callback(null, response);
};

export default main;
