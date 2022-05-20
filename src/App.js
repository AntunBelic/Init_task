
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import { AuthProvider } from './Components/Auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
