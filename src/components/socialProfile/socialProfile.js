import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from "./StyledProfile";
import Stats from "../Stats/Stats";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <Wrapper>
    <Description>
      <Avatar src={avatar} alt="user avatar" />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats {...stats} />
  </Wrapper>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
