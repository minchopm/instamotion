'use strict';

import {dynamodb} from "../dynamodb";

export const removeVehicle = (id) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: { id }
    };
    return dynamodb.delete(params).promise()
      .then(r => true);
};
