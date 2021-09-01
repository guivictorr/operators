import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';

import LinkWrapper from 'components/LinkWrapper';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Operators</S.Heading>

    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa ea
        rem asperiores eius dignissimos nemo, iure vero voluptas laudantium
        corrupti, animi tempora consequuntur facilis maiores alias accusamus
        aspernatur nostrum.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
