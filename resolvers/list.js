'use strict';

const AWS = require('aws-sdk');
// const dynamoDb = new AWS.DynamoDB.DocumentClient();
const dynamodb = require('./dynamodb');

module.exports = () => dynamodb.scan({ TableName: 'products' }).promise()
    .then(r => r.Items);
