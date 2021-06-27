'use strict';

const AWS = require('aws-sdk');
// const dynamoDb = new AWS.DynamoDB.DocumentClient();
const dynamodb = require('./dynamodb');

module.exports = (id) => {
    const params = {
        TableName: 'products',
        Key: { id }
    };
    return dynamodb.delete(params).promise()
};
