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
