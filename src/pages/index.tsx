import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import client from 'graphql/client';
import { GET_OPERATORS } from 'graphql/queries';
import { GetOperatorsQuery } from 'graphql/generated/graphql';

import LinkWrapper from 'components/LinkWrapper';

const Map = dynamic(() => import('components/Map'), { ssr: false });

type HomeProps = {
  operators: GetOperatorsQuery['operators'];
};

export default function Home({ operators }: HomeProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={operators} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { operators } = await client.request<GetOperatorsQuery>(GET_OPERATORS);

  return {
    props: {
      operators
    }
  };
};
