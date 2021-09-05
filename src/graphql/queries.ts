import { gql } from 'graphql-request';

export const GET_OPERATORS = gql`
  query getOperators {
    operators {
      slug
      id
      name
      icon {
        url
      }
      location {
        latitude
        longitude
      }
    }
  }
`;

export const GET_OPERATOR_BY_SLUG = gql`
  query getOperatorBySlug($slug: String!) {
    operator(where: { slug: $slug }) {
      slug
      name
      realName
      birthdate
      side
      birthplace
      icon {
        url
      }
      biography {
        html
      }
      report {
        html
      }
    }
  }
`;
