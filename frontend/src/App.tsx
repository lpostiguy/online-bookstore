import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="text-bold text-blue-800">
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} ({user.email})
        </p>
      ))}
    </div>
  );
}

export default App;
