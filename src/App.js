import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

//pages
import Users from "./components/Users";
import User from "./components/User";
import About from "./components/About";
import Home from "./components/Home";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#7600dc',
        }
      : { color: '#545e6f', background: '#f0f0f0' }
  }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#7600dc',
        }
      : { color: '#545e6f', background: '#f0f0f0' }
  }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#7600dc',
        }
      : { color: '#545e6f', background: '#f0f0f0' }
  }>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users/*" element={<Users />}>
            <Route path="user/:id" element={<User />}></Route>
          </Route>
          <Route path="*" element={<Error404/> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
