import Profile from './components/Profile';
import user from './user.json';
import './App.css';

export default function App() {
  return (
    <div>
      {' '}
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.followers}
        views={user.views}
        likes={user.likes}
      />
      ,
    </div>
  );
}
