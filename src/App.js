import React from "react";
// import "./style.css";
import Header from "./Header";
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <main> */}
        <Outlet /> {/* This renders the nested routes (Home and Contact) */}
      {/* </main> */}
    </div>
  );
}
