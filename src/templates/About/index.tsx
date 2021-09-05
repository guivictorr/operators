import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';

import LinkWrapper from 'components/LinkWrapper';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>About</S.Heading>

    <S.Body>
      <p>
        Hey everyone, this site show on a map the location of rainbowsix siege
        operators and this project was built to learn new technologies of web
        development.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
