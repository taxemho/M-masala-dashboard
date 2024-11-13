import React, { useState } from 'react';
import './RSSDetailPage.css';

const RSSDetailPage = ({ isCollapsed }) => {
  const [formData, setFormData] = useState({
    title: 'Enter Title',
    category: 'Select',
    language: 'Select',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className={`container-fluid pxst-container ${isCollapsed ? 'content-moved-3' : ''}`}>
        <div className="row align-items-center justify-content-between contact-title-box">
          <div className="col mt-3">
            <p className="Add-text">Add RSS</p>
          </div>
          <div className="col-auto">
            <button className="view-butt">View RSS</button>
          </div>
        </div>
        <div className={`card-body post-box ${isCollapsed ? 'content-moved-1' : ''}`}>
          <form className="postform1" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Category Name</label>
                <select className="form-control" name="category" value={formData.category} onChange={handleChange}>
                  <option value="Select">Select</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>RSS Name</label>
                <textarea className="form-control" type="text" name="description" value={formData.description} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
                <label>Source URL</label>
                <textarea className="form-control" type="text" name="title" value={formData.title} onChange={handleChange}></textarea>
              </div>

              <div className="col-md-6 mb-2 form-group">
                <label>Status</label>
                <select className="form-control" name="language" value={formData.language} onChange={handleChange}>
                  <option value="Select">Select</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
              
            </div>
            
          </form>
          <div className="button-container">
              <button type="submit">
                Save
              </button>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default RSSDetailPage;
