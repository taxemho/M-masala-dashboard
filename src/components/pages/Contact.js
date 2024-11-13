import React, { useState } from 'react';
import "../pages/Contact.css";
import QuillEditor from '../QuillEditor';

const Contact = ({ isCollapsed }) => {
  const [formData, setFormData] = useState({
    catername: 'Select',
    postit: 'Enter Title',
    rssname: 'Select',
    user: 'Select',
    selopt: '',
    selimg: null,
    schpost: 'Select',
    sellang: 'Select',
    hashtag: 'Enter HashTag Name',
    status: 'Select',
    author: 'Select',
    bannerurl: '',
    postdes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else if (type === 'radio' && checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handlePublish = (withNotification) => {
    setFormData((prevData) => ({
      ...prevData,
      noti_input: withNotification ? 1 : 0,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Constructing the API request payload
    const requestData = {
      categoryid: 1, // Replace with appropriate logic to get category ID
      guid: 'some-gui1d', // Generate or replace with actual GUID
      posttitle: formData.postit,
      description: formData.postdes,
      postintro: 'Introduction to sample post1.', // Provide actual post intro
      Author: formData.author,
      publishedon: '2024-05-23 12:00:00', // Replace with actual published on date
      keywords: formData.hashtag.replace('#', ''),
      imagepath: formData.selimg ? `/images/${formData.selimg.name}` : '', // Provide the actual image path
      rssid: 1, // Replace with appropriate logic to get RSS ID
      hitcount: 10,
      trending_now: formData.selopt === 'Option A' ? 'yes' : 'no',
      hot_content: formData.selopt === 'Option B' ? 'yes' : 'no',
      status: formData.status,
      schedule: formData.schpost,
      schedule_date: '2024-05-24 12:00:00', // Replace with actual schedule date
      noti_input: formData.noti_input,
      created_at: '2024-05-23 12:00:00', // Replace with actual created at date
      published_date: '2024-05-23 12:00:00', // Replace with actual published date
      updated_at: '2024-05-23 12:00:00', // Replace with actual updated date
      uploaded_by: formData.user,
      hashtag: formData.hashtag,
      language: formData.sellang,
      writer: formData.user,
      posturltitle: formData.postit.replace(/\s+/g, '-').toLowerCase(),
      postlink: formData.bannerurl,
    };

    try {
      const response = await fetch('http://172.22.9.59:3000/create_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const res = await response.json();
        console.log('Response from API:', res);
        if (res.status === '201') {
          alert(res.message);
        } else {
          alert('Failed to create post');
        }
      } else {
        console.log(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
      alert('Failed to create post');
    }
  };

  return (
    <>
      <div className={`container-fluid pxst-container ${isCollapsed ? 'content-moved-3' : ''}`}>
        <div className="row align-items-center justify-content-between contact-title-box ">
          <div className="col mt-3">
            <p className="Add-text">Edit Posts</p>
          </div>
          <div className="col-auto">
            <button className="view-butt">View Posts</button>
          </div>
        </div>
        <div className={`card-body d-flex post-box ${isCollapsed ? 'content-moved-1' : ''}`}>
          <form className="postform1" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Category Name</label>
                <select className="form-control" name="catername" value={formData.catername} onChange={handleChange}>
                  <option value="opt1">opt1</option>
                  <option value="opt2">opt2</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>Post Title</label>
                <textarea className="form-control" type="text" name="postit" value={formData.postit} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
                <label>RSS Name</label>
                <select className="form-control" name="rssname" value={formData.rssname} onChange={handleChange}>
                  <option value="opt11">opt11</option>
                  <option value="opt22">opt22</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>User</label>
                <select className="form-control" name="user" value={formData.user} onChange={handleChange}>
                  <option value="opt111">opt111</option>
                  <option value="opt222">opt222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>Select Options:</label>
                <div className="d-flex">
                  <input
                    type="radio"
                    name="selopt"
                    value="Option A"
                    checked={formData.selopt === 'Option A'}
                    onChange={handleChange}
                  />
                  <span className="ms-2 mt-2">Option A</span>
                  <input
                    className="ms-4"
                    type="radio"
                    name="selopt"
                    value="Option B"
                    checked={formData.selopt === 'Option B'}
                    onChange={handleChange}
                  />
                  <span className="ms-2 mt-2">Option B</span>
                  <input
                    className="ms-4"
                    type="radio"
                    name="selopt"
                    value="Option C"
                    checked={formData.selopt === 'Option C'}
                    onChange={handleChange}
                  />
                  <span className="ms-2 mt-2">Option C</span>
                </div>
              </div>
              <div className="col-md-6 form-group">
                <label className="file-label">Select Images</label>
                <input className="form-control" type="file" name="selimg" onChange={handleChange} />
              </div>
              <div className="col-md-6 form-group">
                <label>Schedule Post</label>
                <select className="form-control" name="schpost" value={formData.schpost} onChange={handleChange}>
                  <option value="opt11111">opt11111</option>
                  <option value="opt22222">opt22222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="lang-1">Select Language</label>
                <select className="form-control" name="sellang" value={formData.sellang} onChange={handleChange}>
                  <option value="opt111111">opt111111</option>
                  <option value="opt222222">opt222222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>HashTag</label>
                <textarea className="form-control" type="text" name="hashtag" value={formData.hashtag} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
                <label className="stat-1">Status</label>
                <select className="form-control" name="status" value={formData.status} onChange={handleChange}>
                  <option value="opt1111111">opt1111111</option>
                  <option value="opt2222222">opt2222222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>Author</label>
                <select className="form-control" name="author" value={formData.author} onChange={handleChange}>
                  <option value="opt11111111">opt11111111</option>
                  <option value="opt22222222">opt22222222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="ban-1">Banner Redirection Url</label>
                <textarea className="form-control" type="text" name="bannerurl" value={formData.bannerurl} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-12 form-group">
                <label className="mt-2 descrip-1">Post Description</label>
                <QuillEditor value={formData.postdes} onChange={(content) => setFormData({ ...formData, postdes: content })} />
              </div>
            </div>
            <div className="mt-2 button-container">
              <button className="cancelled1" type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="ms-2" type="submit" onClick={() => handlePublish(true)}>
                Publish With Notification
              </button>
              <button className="ms-2" type="submit" onClick={() => handlePublish(false)}>
                Publish Without Notification
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
