import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //Bem class naming convention
    <div className="app">
    <Router>
    <Header/> 
     <Routes>
      <Route path='/search/:searchTerm' element={ 
     <div className="app__page">
        <Sidebar/>
        <SearchPage/>
      </div>}/>
<Route
  path="/"
  element={<div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
      </div>}
/>
     </Routes>
    </Router> 
    {/* <div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
      </div>    */}
    </div>
  );
}

export default App;
