import React from 'react';
import {
  Item,
  Status,
  Avatar,
  Name
} from './styledFriendsListItem';

const FriendsListItem = (({avatar, name, isOnline}) => (
    <Item isOnline = {isOnline}>
      <Status isOnline = {isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
    )
)

export {FriendsListItem}