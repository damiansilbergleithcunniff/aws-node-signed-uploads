const helloWorld = (status, msg, event) => {
  return {
    statusCode: status,
    body: JSON.stringify({
      message: msg,
      input: event,
    }),
  };
};

export default helloWorld;
