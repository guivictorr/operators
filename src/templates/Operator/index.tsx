import Image from 'next/image';
import { CloseOutline } from '@styled-icons/evaicons-outline';

import { Operator } from 'graphql/generated/graphql';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

const OperatorTemplate = (operator: Operator) => {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Info>
          <S.Flex>
            <S.Column>
              <S.Name>
                <Image
                  src={operator.icon.url}
                  alt={operator.name}
                  width={90}
                  height={90}
                />
                <S.Title>{operator.name}</S.Title>
              </S.Name>
              <S.Badge>{operator.side}</S.Badge>
            </S.Column>
            <Image
              src={operator.picture.url}
              alt={operator.name}
              width={440}
              height={515}
              className="operator-picture"
            />
          </S.Flex>
          <S.Flex>
            <S.Box>
              <S.BoxLabel>REAL NAME</S.BoxLabel>
              <S.BoxValue>{operator.realName}</S.BoxValue>
            </S.Box>
            <S.Box>
              <S.BoxLabel>DATE OF BIRTH</S.BoxLabel>
              <S.BoxValue>{operator.birthdate}</S.BoxValue>
            </S.Box>
            <S.Box>
              <S.BoxLabel>PLACE OF BIRTH</S.BoxLabel>
              <S.BoxValue>{operator.birthplace}</S.BoxValue>
            </S.Box>
          </S.Flex>
        </S.Info>
        <S.Body>
          <section>
            <S.Title>BIOGRAPHY</S.Title>
            <div
              dangerouslySetInnerHTML={{ __html: operator.biography.html }}
            ></div>
          </section>
          <section>
            <S.Title>PSYCHOLOGICAL REPORT</S.Title>

            <div
              dangerouslySetInnerHTML={{ __html: operator.report.html }}
            ></div>
          </section>
        </S.Body>
      </S.Wrapper>
    </>
  );
};

export default OperatorTemplate;
