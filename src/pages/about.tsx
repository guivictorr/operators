import { GetStaticProps } from 'next';
import client from 'graphql/client';

import { GET_PAGES } from 'graphql/queries';

import AboutTemplate from 'templates/About';

const About = () => <AboutTemplate />;

export const getStaticProps: GetStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);
  return {
    props: {
      pages
    }
  };
};

export default About;
