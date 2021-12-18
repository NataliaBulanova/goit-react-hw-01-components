import PropTypes from 'prop-types';

export default function Friend(friend) {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propType = {
  key: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
