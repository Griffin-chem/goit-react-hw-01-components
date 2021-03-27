import React from "react";

import { StatBlock, StatItem, Label, Quantity } from "./StyledStats";

const Stats = ({ followers, views, likes }) => (
  <StatBlock>
    <StatItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatItem>
  </StatBlock>
);

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

export default Stats;
