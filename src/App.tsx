import { useState, useEffect } from "react";

import style from "./App.module.scss";
import { api } from "./services/api";

type User = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get<User[]>("/todos");

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <main className={style.contentWrapper}>
      {users.map((user) => (
        <div key={user.id}>
          {user.userId} - {user.title}
        </div>
      ))}
    </main>
  );
}

export { App };
