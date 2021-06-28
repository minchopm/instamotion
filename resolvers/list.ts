'use strict';

import {dynamodb} from "../dynamodb";

export const listVehicles = () => dynamodb.scan({ TableName: 'vehicles' }).promise()
    .then(r => r.Items);
