'use strict';

import {dynamodb} from "../dynamodb";
import * as uuid from "uuid";

export const addVehicles =  (data) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
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
