import './App.css';
import Home from './pages/Home';
import SendMSGContext from './context/SendMSGContext';
import LoginContext from './context/LoginContext';

function App() {
  return (
    <LoginContext>
      <SendMSGContext>
        <Home/>
      </SendMSGContext>
    </LoginContext>
  );
}
export default App;

