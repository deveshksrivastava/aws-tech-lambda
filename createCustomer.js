"use strict";

const AWS = require("aws-sdk");

module.exports.createCustomer = async (event) => {
  const { name, email } = JSON.parse(event.body);
  const dynamDB = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      primary_key: name,
      email: email,
      name: name,
    },
  };
  await dynamDB.put(putParams).promise();
  return {
    statusCode: 201,
    body: JSON.stringify({ message: "customer created successfully" }),
  };
};
