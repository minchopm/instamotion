'use strict';

import {dynamodb} from "../dynamodb";

export const removeVehicle = (id) => {
    const params = {
        TableName: 'vehicles',
        Key: { id }
    };
    return dynamodb.delete(params).promise()
};
