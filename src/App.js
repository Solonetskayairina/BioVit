import React from "react";
import './App.css';
import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div >
        <Header/>
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;
