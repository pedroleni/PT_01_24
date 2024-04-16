import { Outlet } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components';

export const App = () => {
  
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}