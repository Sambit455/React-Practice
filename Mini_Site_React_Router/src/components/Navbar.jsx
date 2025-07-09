import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: 10 }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/user/John">User</Link> |{" "}
      <Link to="/dashboard/profile">Profile</Link> |{" "}
      <Link to="/dashboard/settings">Settings</Link>
    </nav>
  );
};

export default Navbar;
