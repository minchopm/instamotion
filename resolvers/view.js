'use strict';

const AWS = require('aws-sdk');
// const dynamoDb = new AWS.DynamoDB.DocumentClient();
const dynamodb = require('./dynamodb');

module.exports = (id) => {
    const params = {
        TableName: 'products',
        Key: { id }
    };
    return dynamodb.get(params).promise()
        .then(r => r.Item);
};
