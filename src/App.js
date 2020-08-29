import React from 'react';
import './App.css';
import Profile from './components/socialProfile/socialProfile';
import profileData from './data/user.json';

import Statistic from './components/statistic/statistic';
import statData from './data/statistical-data.json';

import {FriendsList} from './components/friendsList/friendsList';
import friendsData from './data/friends.json';

function App() {
  return (
    <div>
      <Profile {...profileData} />
      <Statistic title = "Uploads" stats = {statData} />
      <FriendsList friends = {friendsData} />
    </div>
  );
}

export default App;
