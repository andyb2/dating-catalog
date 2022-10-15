import './App.css';
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import Authpage from './pages/Authpage';

interface state {
  user: {
    token: string
  }
}

function App() {
  const user = useSelector((state: state) => state.user.token)

  return (
    <div>
      { !user ? <Authpage /> : <Homepage /> }
    </div> 
  );
}

export default App;
