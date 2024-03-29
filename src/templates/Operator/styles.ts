import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.main`
  max-width: 1024px;
  padding: 0 20px;
  margin: 100px auto;
`;

export const Info = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray);
  flex: 1 1 200px;
  height: 100%;
  padding: 15px;
  color: var(--dark);
  height: 125px;
  margin: 1px;
`;

export const BoxLabel = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 1.6rem;
`;

export const BoxValue = styled.p`
  font-size: 3rem;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 15px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 2.5vw, 5rem);
  font-style: italic;
`;

export const Badge = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--highlight);
  height: 40px;
  max-width: 240px;
  padding: 18px;
  color: var(--dark);
  font-style: italic;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 30px;
`;

export const Body = styled.section`
  padding: 100px 0;

  p + p {
    margin-top: 30px;
  }

  p {
    line-height: 1.6;
  }

  section + section {
    margin-top: 80px;
  }

  section > h1 {
    margin-bottom: 30px;
  }
`;
