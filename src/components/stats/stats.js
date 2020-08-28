import React from 'react';
import {
  StatBlock,
  StatItem,
  Label,
  Quantity
} from './styledStats';

const Stats = ({followers, views, likes}) => (
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

export default Stats;