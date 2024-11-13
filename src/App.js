import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';
import Videos from './components/pages/Videos';
import VideoPost from './components/pages/VideoPost';
import RSSDetails from './components/pages/RSSDetails';
import RSSDetailPage from './components/pages/RSSDetailPage';
import VisualStories from './components/pages/VisualStories';
import VisualStoryPage from './components/pages/VisualStoryPage';
import TrendingNews from './components/pages/TrendingNews';
import Roles from './components/pages/Roles';
import CreateUsers from './components/pages/CreateUsers';
import ChangePassword from './components/pages/ChangePassword';
import Login from './components/pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Placeholder for actual authentication logic
    const isAuthenticated = true; // Change this to actual authentication logic

    if (isAuthenticated) {
      setIsLoggedIn(true);
      return <Navigate to="/home" />;
    } else {
      console.log('Authentication failed');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post" element={<Post />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/paparazzipost" element={<VideoPost />} />
            <Route path="/rssdetails" element={<RSSDetails />} />
            <Route path="/rssdetailpage" element={<RSSDetailPage />} />
            <Route path="/visualstories" element={<VisualStories />} />
            <Route path="/visualstorypage" element={<VisualStoryPage />} />
            <Route path="/trendingnews" element={<TrendingNews />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/createuser" element={<CreateUsers />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
       
          <Route path="/" element={<Login onLogin={handleLogin}  setIsLoggedIn={setIsLoggedIn} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
