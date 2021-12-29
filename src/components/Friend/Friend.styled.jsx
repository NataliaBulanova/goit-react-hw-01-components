import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 240px;
  margin: 15px 10px;
  padding: ${props => props.theme.spacing(4)};
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  box-shadow: ${props =>
    ` 7px 10px 10px -7px ${props.theme.colors.accentText}`};
  background-color: ${props => props.theme.colors.white};
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: ${props => props.theme.spacing(2)};
  border-radius: 50%;
  background-color: ${({ status, theme }) =>
    status ? theme.colors.online : theme.colors.offline};
`;

export const Photo = styled.img`
  width: 50px;
  height: auto;
  margin-right: ${props => props.theme.spacing(4)};
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.accentText};
`;
