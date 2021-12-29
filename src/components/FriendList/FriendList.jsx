import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';
import { List } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </List>
  );
}

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
