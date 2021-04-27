import Profile from '../components/profile';
import { profileProtect } from '../components/pageProtect';

const profile = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export const getServerSideProps = profileProtect();

export default profile;
