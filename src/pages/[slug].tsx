import { GetStaticPaths, GetStaticProps } from 'next';

import client from 'graphql/client';
import {
  GetOperatorBySlugQuery,
  GetOperatorsQuery,
  Operator
} from 'graphql/generated/graphql';
import { GET_OPERATORS, GET_OPERATOR_BY_SLUG } from 'graphql/queries';
import OperatorTemplate from 'templates/Operator';

const OperatorPage = (props: Operator) => <OperatorTemplate {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const { operators } = await client.request<GetOperatorsQuery>(GET_OPERATORS);

  const paths = operators.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { operator } = await client.request<GetOperatorBySlugQuery>(
    GET_OPERATOR_BY_SLUG,
    { slug }
  );

  const formatedDate = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'medium'
  }).format(new Date(operator?.birthdate));

  return {
    props: {
      ...operator,
      birthdate: formatedDate
    }
  };
};

export default OperatorPage;
