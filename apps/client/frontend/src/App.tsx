import { Route, Routes } from 'react-router-dom';
import EditUserPage from './pages/EditUserPage/EditUserPage';
import Login from './pages/Login/LoginPage';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/RegisterPage';
import UserInfoPage from './pages/UserInfo/UserInfoPage';

function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<UserInfoPage />} />
          <Route path='/edit-user' element={<EditUserPage />} />
      </Routes>
    </>
  )
}

export default App
