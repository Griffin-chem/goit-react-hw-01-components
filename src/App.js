import React from 'react';
import './App.css';
import Profile from './social-profile/social-profile';
import profileData from './social-profile/user.json';
import './social-profile/social-profile.css';

function App() {
  return (
    <div>
      <Profile {...profileData}/>
    </div>
  );
}

export default App;
