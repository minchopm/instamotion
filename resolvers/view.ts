'use strict';

import {dynamodb} from "../dynamodb";

export const viewVehicle = (id) => {
    const params = {
        TableName: 'vehicles',
        Key: { id }
    };
    return dynamodb.get(params).promise()
        .then(r => r.Item);
};
