import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_CONNECTFIVE_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_CONNECTFIVE_GRAPHQLAPIKEYOUTPUT;

const query = /* GraphQL */
`mutation CreateConnect5Game(
  $input: CreateConnect5GameInput!
  $condition: ModelConnect5GameConditionInput
) {
  createConnect5Game(input: $input, condition: $condition) {
    player1
    player2
    moves
    currentPlayer
    id
    createdAt
    updatedAt
    owner
  }
}
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const playerID = event.arguments.playerID;

  const variables = {
    input: {
      player1: playerID,
      player2: null,
      moves: [],
      currentPlayer: playerID,
    }
  };

  /** @type {import('node-fetch').RequestInit} */
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY
    },
    body: JSON.stringify({ query, variables })
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack
        }
      ]
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
};