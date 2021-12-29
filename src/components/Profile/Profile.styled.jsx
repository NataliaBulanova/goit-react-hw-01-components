import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.colors.accentText}`};
  width: fit-content;
  box-shadow: ${props => `7px 10px 10px -7px ${props.theme.colors.accentText}`};
  background-color: ${props => props.theme.colors.white};
`;

export const Description = styled.div`
  padding: ${props => props.theme.spacing(4)};
`;
export const Avatar = styled.img`
  width: 80px;
  height: auto;
  border-radius: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;
export const Tag = styled.p`
  color: rgba(65, 188, 183, 1);
  display: flex;
  justify-content: center;
`;
export const StatList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: ${props => `1px solid ${props.theme.colors.accentText}`};
  background-color: ${props => props.theme.colors.accentBGC};
`;
export const Stat = styled.li`
  width: 65px;
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: ${props => `1px solid ${props.theme.colors.accentText}`};
`;

export const StatLabel = styled.p`
  font-weight: 600;
  color: ${props => props.theme.colors.accentText};
  margin: 0px;
`;

export const StatQuantity = styled.p`
  font-weight: 600;
`;
