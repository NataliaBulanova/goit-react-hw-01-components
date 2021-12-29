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

export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
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
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
