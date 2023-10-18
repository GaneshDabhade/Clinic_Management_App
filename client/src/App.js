import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import ErrorPage from './components/ErrorPage';
import {User} from './components/User';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}>
            <Route path="users" element={<User />}>
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />  
              <Route path="home" element={<Home />} />  
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;