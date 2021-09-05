import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import { GetOperatorsQuery } from 'graphql/generated/graphql';

import LinkWrapper from 'components/LinkWrapper';

const Map = dynamic(() => import('components/Map'), { ssr: false });

type HomeProps = {
  operators: GetOperatorsQuery['operators'];
};

export const HomeTemplate = ({ operators }: HomeProps) => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={operators} />
    </>
  );
};

export default HomeTemplate;
