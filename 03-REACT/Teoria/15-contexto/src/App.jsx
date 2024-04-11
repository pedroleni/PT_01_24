import './App.css'
import { Outlet } from 'react-router-dom'
import { useAuth } from './contexts/useAuthContext'

export const App = () => {
  const { login, user } = useAuth();
  console.log(user);
  return (
    <>
      {user == null ? (
        <>
          <label>Introduzca su nombre</label>
          <input type="text" onChange={(e) => {login({name: e.target.value})}}/>
        </>
      ) : (
        <Outlet />
      )}
    </>
  )
}