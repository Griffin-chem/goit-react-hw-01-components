import React from 'react';

import Profile from './components/SocialProfile/SocialProfile';
import Statistic from './components/Statistic/Statistic';
import {FriendsList} from './components/FriendsList/FriendsList';
import {Transactions} from './components/TransactionHistory/TransactionHistory';

import statData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionData from './data/transactions.json';
import profileData from './data/user.json';

import './App.css';

function App() {
  return (
    <div>
      <Profile {...profileData} />
      <Statistic title = "Uploads" stats = {statData} />
      <FriendsList friends = {friendsData} />
      <Transactions items = {transactionData} />
    </div>
  );
}

export default App;
