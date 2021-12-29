import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  StatList,
  Stat,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export default function Profile(user) {
  const { avatar, username, tag, location, followers, views, likes } = user;
  return (
    <Card key={tag}>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <StatList>
        <Stat>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </Stat>
        <Stat>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </Stat>
        <Stat>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </Stat>
      </StatList>
    </Card>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
