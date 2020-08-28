import React from 'react';
import './App.css';
import Profile from './components/socialProfile/socialProfile';
import profileData from './data/user.json';

function App() {
  return (
    <div>
      <Profile {...profileData}/>
    </div>
  );
}

export default App;
