const cOMPONENT_NAME = (status, msg, event) => {
  return {
    statusCode: status,
    body: JSON.stringify({
      message: msg,
      input: event,
    }),
  };
};

export default cOMPONENT_NAME;
