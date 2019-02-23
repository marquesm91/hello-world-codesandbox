import React from 'react';
import getRandomUsers from './utils/getRandomUsers';
import { User, List } from './components';

console.log(User);

const users = getRandomUsers(2);

const App = () => {
  return <List data={users} keyExtractor={user => user.id} renderItem={User} />;
};

export default App;
