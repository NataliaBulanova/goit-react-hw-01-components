import Profile from './components/Profile';
import StatisticList from './StatisticList';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transaction.json';
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
      <StatisticList title="Upload stats" data={data} />,
      <FriendList friends={friends} />,
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
