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

const setBGColor = ({ type, theme }) => {
  const { greenBGC, blueBGC, redBGC, yellowBGC, defaultBGC } = theme.colors;
  switch (type) {
    case 'invoice':
      return blueBGC;
    case 'payment':
      return greenBGC;
    case 'withdrawal':
      return redBGC;
    case 'deposit':
      return yellowBGC;
    default:
      return defaultBGC;
  }
};
export const TransactionType = styled.td`
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  padding: ${props => props.theme.spacing(2)};
  background-color: ${setBGColor};
  text-transform: capitalize;
`;

export const TableData = styled.td`
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.accentBGC};
`;
