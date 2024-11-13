import React, { useState } from 'react';
import './VisualStoryPage.css';

const VisualStoryPage = ({ isCollapsed }) => {
  const [formData, setFormData] = useState({
    category: 'Select',
    chooseImage: null,
    categoryName: 'Enter Category Name',
    storyTitle: 'Enter Story Title',
    storyDescription: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
            <p className="Add-text">Add Visual Story</p>
          </div>
          <div className="col-auto">
            <button className="view-butt">View Stories</button>
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
                <label>Choose Image</label>
                <input className="form-control" type="file" name="chooseImage" onChange={handleChange} />
              </div>
              <div className="col-md-6 form-group">
                <label>Story Title</label>
                <textarea className="form-control" type="text" name="storyTitle" value={formData.storyTitle} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
                <label>Story Description</label>
                <textarea className="form-control" type="text" name="storyDescription" value={formData.storyDescription} onChange={handleChange}></textarea>
              </div>
            </div>  
          </form>
          <div className="button-container">
              <button type="submit">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisualStoryPage;
