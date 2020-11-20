import React, { useEffect, useState } from 'react';

import './App.scss';
import { getUsers } from './common/api-utils';
import Card from './components/card/Card';
import Avatar from './components/avatar/Avatar';

type User = {
  avatarUrl: string;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      const { users } = response;

      setUsers(users);
    })();
  }, [setUsers]);

  return (
    <div className="App">
      <h1>PagerDuty Phonebook</h1>
      {users.map(({ avatar_url, name, email }) => (
        <Card>
          <Avatar src={avatar_url} alt={name} />
          <p>{name}</p>
          <p>{email}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;
