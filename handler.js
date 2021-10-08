"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: event.queryStringParameters?.code
      ? event.queryStringParameters.code
      : 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
