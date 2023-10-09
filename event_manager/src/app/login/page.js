import React from "react";
import Header from '@/components/header/Header';
import Login from "@/components/login";
import usersData from "@/app/DB/users.json"


// src/App.js


function App() {
  return (
    <div className="App">
        <Header/>
        <Login/>
    </div>
  );
}

export default App;
