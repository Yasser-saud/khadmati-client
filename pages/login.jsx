import Login from '../components/login';
import { withAuthServerSideProps } from '../components/pageProtect';

const login = () => {
  return <Login />;
};

export const getServerSideProps = withAuthServerSideProps();
export default login;
