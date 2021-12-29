import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: 50px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  box-shadow: ${props => `7px 10px 10px -7px ${props.theme.colors.accentText}`};
`;

export const Title = styled.h2`
  margin: auto;
  text-transform: uppercase;
  font-size: 18px;
  padding: ${props => props.theme.spacing(6)};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style: none;
  padding: 0px;
`;
