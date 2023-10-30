import React from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticleDetailPage from "./pages/ArticleDetails/ArticleDetailPage";
import CommonPage from "./pages/Register/CommonPage";
import {Toaster} from 'react-hot-toast'
import BlogPage from "./pages/Blog Pages/BlogPage";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/register" element={<CommonPage flag={false}/>}/>
        <Route path="/login" element={<CommonPage flag={true}/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/dashboard/:id" element={<Dashboard/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
