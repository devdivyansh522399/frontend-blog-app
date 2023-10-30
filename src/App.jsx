import React from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticleDetailPage from "./pages/ArticleDetails/ArticleDetailPage";
import CommonPage from "./pages/Register/CommonPage";
import {Toaster} from 'react-hot-toast'
import ProfilePage from "./pages/Profile/ProfilePage";
import FollowesPage from "./pages/Follwers/FollowesPage";
import EditProfilePage from "./pages/Profile/EditProfilePage";
import BlogPage from "./pages/Blog Pages/BlogPage";
import Writer from "./pages/Blog Writing Page/Writer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/register" element={<CommonPage flag={false}/>}/>
        <Route path="/login" element={<CommonPage flag={true}/>}/>
        <Route path="/profile/:id" element={<ProfilePage/>}/>
        <Route path="/followers" element={<FollowesPage title={"Followers List"}/>}/>
        <Route path="/following" element={<FollowesPage title={"Following List"}/>}/>
        <Route path="/editprofile" element={<EditProfilePage/>}/>
        <Route path="/write" element={<Writer/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
