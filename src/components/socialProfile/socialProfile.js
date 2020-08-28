import React from 'react';
import {
  Wrapper, 
  Description, 
  Avatar, 
  Name,
  Tag,
  Location
} 
from './styledProfile';
import Stats from '../stats/stats';

const Profile = ({avatar, name, tag, location, stats}) => (
  <Wrapper>
    <Description>
      <Avatar
        src={avatar}
        alt="user avatar"
      />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats {...stats} />
  </Wrapper>
);

export default Profile