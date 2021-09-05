import { GetStaticProps } from 'next';

import client from 'graphql/client';
import { GET_OPERATORS } from 'graphql/queries';
import { GetOperatorsQuery } from 'graphql/generated/graphql';

import HomeTemplate from 'templates/Home';

type HomeProps = {
  operators: GetOperatorsQuery['operators'];
};

const Home = (props: HomeProps) => <HomeTemplate {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const { operators } = await client.request<GetOperatorsQuery>(GET_OPERATORS);

  return {
    props: {
      operators
    }
  };
};

export default Home;
