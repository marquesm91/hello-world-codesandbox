import React from 'react';
import { fullName } from './utils';
import { Card, Title, JobTitle, Description } from './styles';

const User = ({ user }) => (
  <Card>
    <Title>{fullName(user.firstName, user.lastName)}</Title>
    <JobTitle>{user.job}</JobTitle>
    <Description>
      My name is {user.firstName}, and I'm {user.age}. Currently working as{' '}
      {user.job}!
    </Description>
  </Card>
);

User.displayName = 'User';

export default User;
