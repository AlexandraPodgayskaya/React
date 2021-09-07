import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Context } from './context';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'))
  const [reboot, setReboot] = useState(false)

  return (
    <Context.Provider value={{
      isAuth,
      isAdmin,
      reboot,
      setIsAuth,
      setIsAdmin,
      setReboot
    }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
