import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {loading && <div>Loading...</div>}

      {!loading && <code>{JSON.stringify(user)}</code>}

      <br />
      <br />
      <Link to={`/users/user/${parseInt(id) + 1}`}>
        {id < 10 ? <p>Next User ({parseInt(id) + 1})</p> : <div></div>}
      </Link>
      <br />
      <br />

      <Link to={`/users/user/${parseInt(id) - 1}`}>
        {id > 1 ? <p>Before User ({parseInt(id) - 1})</p> : ""}
      </Link>
    </div>
  );
}

export default User;
