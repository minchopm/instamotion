'use strict';

import {dynamodb} from "../dynamodb";
import uuid = require("uuid");

export const addVehicles =  (data) => {
    const params = {
        TableName: 'vehicles',
        Item: {
            name: data.name,
            quantity: data.quantity,
            id: uuid.v1(),
            addedAt: Date.now(),
        }
    };
    return dynamodb.put(params).promise()
        .then(result => params.Item);
};
