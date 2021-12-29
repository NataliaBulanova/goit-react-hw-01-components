import styled from '@emotion/styled';

const setBGColor = ({ statType, theme }) => {
  const { redBGC, greenBGC, yellowBGC, blueBGC, defaultBGC } = theme.colors;
  switch (statType) {
    case '.docx':
      return redBGC;
    case '.pdf':
      return greenBGC;
    case '.mp3':
      return yellowBGC;
    case '.psd':
      return blueBGC;
    default:
      return defaultBGC;
  }
};
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  padding: ${props => props.theme.spacing(6)};
  border-left: ${props => `1px solid ${props.theme.colors.accentText}`};
  background-color: ${setBGColor};
`;

export const Label = styled.span`
  font-size: 18px;
  color: ${props => props.theme.colors.accentText};
`;
export const Percentage = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-top: ${props => props.theme.spacing(4)};
`;
