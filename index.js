const AWS = require("aws-sdk");
module.exports.handler = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
  };
  const dynamDB = new AWS.DynamoDB.DocumentClient();
  const result = await dynamDB.scan(scanParams).promise();
  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: await result.Items.map((customer) => {
        return {
          name: customer.primary_key,
          email: customer.email,
        };
      }),
    }),
  };
};
