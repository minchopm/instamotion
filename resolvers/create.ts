'use strict';

import {dynamodb} from "../dynamodb";
import * as uuid from "uuid";

export const createVehicle =  (data) => {
    console.log(data)
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            make: data.make,
            model: data.model,
            transmission : data.transmission,
            mileage: data.mileage,
            fuel_type: data.fuel_type,
            vehicle_type: data.vehicle_type,
            vehicle_color: data.vehicle_color,
            id: uuid.v1(),
            addedAt: Date.now(),
        }
    };
    return dynamodb.put(params).promise()
        .then(result => params.Item);
};
