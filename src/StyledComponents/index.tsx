// https://styled-components.com/docs/basics#installation
import { styled } from "styled-components";

export const StyledComponents = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
