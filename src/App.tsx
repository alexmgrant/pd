import React, { useEffect, useState } from 'react';

import './App.scss';
import { getUsers } from './common/api-utils';
import Card from './components/card/Card';
import Avatar from './components/avatar/Avatar';
import Button from './components/button/Button';

type User = {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
};

const incrimentLimit = (limit: number) => limit + 10;

function App() {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(10);
  const handleSetLimit = (limit: number) => setLimit(incrimentLimit(limit));

  useEffect(() => {
    (async () => {
      const response = await getUsers(limit);
      const { users } = response;

      setUsers(users ?? []);
    })();
  }, [setUsers, limit]);

  return (
    <div className="App">
      <h1>PagerDuty Phonebook</h1>
      <div className="pd-l--three-column">
        {users.map(({ id, avatar_url, name, email }: User) => (
          <Card key={id}>
            <Avatar src={avatar_url} alt={name} />
            <p>{name}</p>
            <p>{email}</p>
          </Card>
        ))}
      </div>
      <Button onClick={() => handleSetLimit(limit)}>Load more</Button>
    </div>
  );
}

export default App;
