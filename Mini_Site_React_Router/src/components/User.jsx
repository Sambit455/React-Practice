import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams();
  return <h2>Welcome, {username}!</h2>;
};

export default User;
