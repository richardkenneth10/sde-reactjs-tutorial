import AdminPanel from '../components/AdminPanel';
import LoginForm from '../components/LoginForm';

const isLoggedIn = false;

const ConditionalRendering = () => (
  <>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</>
);

export default ConditionalRendering;
