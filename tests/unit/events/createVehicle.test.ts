import * as uuid from "uuid";
import {dynamodb} from "../../../dynamodb";

describe('method', () => {

    it('should insert vehicle into table', async (done) => {
        const id = uuid.v1();
        const vehicle = {
            id,
            make: "Audi",
            model: "A4",
            transmission: "MANUAL_GEARBOX",
            mileage: 10000,
            fuel_type: "PETROL",
            vehicle_type: "SUV",
            vehicle_color: "BLACK"
        };
    
        await dynamodb
        .put({TableName: process.env.DYNAMODB_TABLE, Item: {vehicle}})
        .promise()      
        done();

        const {Item} = await dynamodb.get({TableName: 'vehicles', Key: {id}}).promise();
      
        expect(Item).toEqual(vehicle);
      });
})