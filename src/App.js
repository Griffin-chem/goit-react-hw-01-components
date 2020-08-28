import React from 'react';
import './App.css';
import Profile from './components/socialProfile/socialProfile';
import profileData from './data/user.json';
import Statistic from './components/statistic/statistic';
import statData from './data/statistical-data.json';

function App() {
  return (
    <div>
      <Profile {...profileData} />
      <Statistic title="Uploads" stats={statData} />
    </div>
  );
}

export default App;
