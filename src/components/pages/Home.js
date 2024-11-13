import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Home.css';

const Home = ({ isCollapsed }) => {
  return (
    <>
      <div className="container-fluid mt-2">
        <div className={`box-container flex-column ${isCollapsed ? 'content-moved' : ''}`}>
          <div>
            <h4>Dashboard</h4>
            <p>Welcome to Mobile Masala</p>
          </div>
          <div className={`dasb ${isCollapsed ? 'collapsed' : ''}`}>
            <Link to="post" className="box1 bg-box1">
              
              <h4>POSTS</h4>
              <p>260</p>
            </Link>
            <Link to="rssdetails" className="box2 bg-box2">
              <h4>RSS DETAILS</h4>
              <p>260</p>
            </Link>
            <Link to="visualstories" className="box3 bg-box3">
              <h4>VISUAL STORIES</h4>
              <p>260</p>
            </Link>
            <Link to="#" className="box4 bg-box4">
              <h4>CATEGORIES</h4>
              <p>260</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
