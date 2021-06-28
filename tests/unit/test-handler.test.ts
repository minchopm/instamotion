import { APIGatewayProxyEvent } from "aws-lambda";
import {queryVehicles} from "../../lambda/handler";

describe('Unit test for app handler', function () {
  it('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = {
      queryStringParameters: {
        a: "1"
      }
    } as any
    const result = await queryVehicles(event)

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(`Queries: ${JSON.stringify(event.queryStringParameters)}`);
  });
});
