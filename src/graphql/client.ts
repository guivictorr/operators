import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.API_URL || '';

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`
  }
});

export default client;
