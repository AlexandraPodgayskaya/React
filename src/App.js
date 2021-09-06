import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from './context';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'))
  return (
    <AuthContext.Provider value={{
      isAuth,
      isAdmin,
      setIsAuth,
      setIsAdmin
    }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
