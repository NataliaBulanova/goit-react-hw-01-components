import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  border-radius: 4px;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  font-weight: bold;
  padding: ${props => props.theme.spacing(4)};
  background: #efefef;
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  text-transform: uppercase;
`;
