import React from 'react';
import Navbar from "../Navbar";
import { Routes, Route } from 'react-router-dom';
import Sidey from '../Sidey';
import Home from "../pages/Home";
import Post from './Post';
import Contact from './Contact';
import Videos from './Videos';
import VideoPost from './VideoPost';
import RSSDetails from './RSSDetails';
import RSSDetailPage from './RSSDetailPage';
import VisualStories from './VisualStories';
import VisualStoryPage from './VisualStoryPage';
import TrendingNews from './TrendingNews';
import Roles from './Roles';
import CreateUsers from './CreateUsers';
import ChangePassword from './ChangePassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidey = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='container-responsiveness'>
      <Navbar toggleSidey={toggleSidey} isCollapsed={isCollapsed} />
      <div className='row mt-5'>
        {!isCollapsed && (
          <div className="col-2">
            <Sidey isCollapsed={isCollapsed} />
          </div>
        )}
        <div className={`col ${isCollapsed ? 'col-12 p-2' : 'col-10 p-2'}`}>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="post" element={<Post />} />
            <Route path="contact" element={<Contact />} />
            <Route path="videos" element={<Videos />} />
            <Route path="paparazzipost" element={<VideoPost />} />
            <Route path="rssdetails" element={<RSSDetails />} />
            <Route path="rssdetailpage" element={<RSSDetailPage />} />
            <Route path="visualstories" element={<VisualStories />} />
            <Route path="visualstorypage" element={<VisualStoryPage />} />
            <Route path="trendingnews" element={<TrendingNews />} />
            <Route path="roles" element={<Roles />} />
            <Route path="createuser" element={<CreateUsers />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
