import React, { useEffect, useState } from 'react'
import "./styles/App.css"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';


function App() {
      return (
      <BrowserRouter>
        <Navbar />
        <AppRouter />

      </BrowserRouter>
      )
}

export default App;



