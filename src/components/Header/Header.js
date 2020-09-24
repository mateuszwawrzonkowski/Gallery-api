import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
 display: flex;
 justify-content: center;
 flex-basis: 100%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontColor};
  letter-spacing: 2px;
  font-size: 5rem;
  text-shadow: 1px 1px 4px #333;
  
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const Header = () => (
  <Wrapper>
    <Title>Gallery</Title>
  </Wrapper>
);

export default Header;
