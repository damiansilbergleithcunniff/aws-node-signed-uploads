import helloWorld from './helloWorld';

const main = (event, context, callback) => {
  const message = process.env.SOMEVAL;
  const response = helloWorld(200, message, event);

  callback(null, response);
};

export default main;
