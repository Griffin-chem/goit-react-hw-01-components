import React from "react";
import PropTypes from "prop-types";

import { FriendsListItem } from "../FriendsListItem/FriendsListItem";
import { StyledList } from "./StyledFriedsList";

const FriendsList = ({ friends }) => (
  <StyledList>
    {friends.map((friend) => (
      <FriendsListItem key={friend.id} {...friend} />
    ))}
  </StyledList>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export { FriendsList };
