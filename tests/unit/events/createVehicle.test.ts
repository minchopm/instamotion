import { createVehicle } from "./../../../resolvers/create";
import * as uuidv4 from "uuid/v4";


// test("Event object creation", () => {
//     process.env.DYNAMODB_TABLE,
  
//     const createdParams = createVehicle(
//     {
//       make: "Audi",
//       model: "A4",
//       transmission: "MANUAL_GEARBOX",
//       mileage: 10000,
//       fuel_type: "PETROL",
//       vehicle_type: "SUV",
//       vehicle_color: "BLACK"
//     },
//     uuidv4(),
//   );
//   expect(createdParams).not.toBe(null);
// });


const handler = require('./../../../lambda/handler');
const AWS = require('aws-sdk');

const dynamoDbGetParameterPromise = jest.fn().mockReturnValue({
  promise: jest.fn().mockResolvedValue({
    id: '123'
  })
})

// AWS.DynamoDB.DocumentClient = jest.fn().mockImplementation(() => ({
//   get: dynamoDbGetParameterPromise,
// }))

const dynamodbMock = new AWS.DynamoDB.DocumentClient({region: 'localhost'});
dynamodbMock.get = jest.fn((params, cb) => {
    cb(null, {
        make: "Audi",
        model: "A4",
        transmission: "MANUAL_GEARBOX",
        mileage: 10000,
        fuel_type: "PETROL",
        vehicle_type: "SUV",
        vehicle_color: "BLACK"
      });
})

describe('test get Vehicle', () => {

  beforeEach(() => {
    process.env.DYNAMODB_TABLE = 'vehicle'
    jest.resetModules()
  });

  it('get get Vehicle', async () => {
    const vehicle = { id: '123' };
    const createdParams = await  createVehicle(
        {
          make: "Audi",
          model: "A4",
          transmission: "MANUAL_GEARBOX",
          mileage: 10000,
          fuel_type: "PETROL",
          vehicle_type: "SUV",
          vehicle_color: "BLACK"
        })
    const { id }  = createdParams
    expect(id).toEqual(vehicle.id);
  });
});