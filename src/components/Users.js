import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      User List
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="users/user/:id" element={<User />}></Route>
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default Users;
