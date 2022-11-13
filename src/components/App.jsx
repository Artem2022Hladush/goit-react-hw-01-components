import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from "./Friends/FriendList";
import TransactionHistory from './TransactionHistory/TransactionHistory';
import {user, data, friends, transactions} from "../JSON";


export const App = () => {
  return (<>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</>
);
};



