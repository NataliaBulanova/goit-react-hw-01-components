import PropTypes from 'prop-types';
import { Item, Status, Photo, Name } from './Friend.styled';

export default function Friend({ avatar, name, isOnline, id }) {
  return (
    <Item key={id}>
      <Status status={isOnline}></Status>
      <Photo src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

Friend.propType = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
