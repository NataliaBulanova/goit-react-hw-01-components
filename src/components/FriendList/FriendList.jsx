import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';
import { List } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </List>
  );
}

FriendList.propType = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};
