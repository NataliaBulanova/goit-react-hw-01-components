import Friend from './Friend';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ul>
  );
}
