import React, { useState } from 'react';
import QuillEditor from '../QuillEditor';

const VideoPost = ({ isCollapsed }) => {
  const [formData, setFormData] = useState({
    postvidtit: 'Enter Title',
    videolink: 'Enter Title',
    vidcater: 'Select',
    selcimag: null,
    selclangc: 'Select',
    redirecturl: '',
    vidstatus: 'Select',
    vidselopt: '',
    vidpostdes: '',
  });

  const handleChange = (e) =>{
    const { name, value, type, checked } = e.target;

    if (type === 'file'){
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else if (type ==='radio' && checked){
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <>
      <div className={`container-fluid pxst-container ${isCollapsed ? 'content-moved-3' : ''}`}>
        <div className="row align-items-center justify-content-between contact-title-box">
          <div className="col mt-3">
            <p className="Add-text">Edit Paparazzi Posts</p>
          </div>
          <div className="col-auto">
            <button className="view-butt">View Paparazzi</button>
          </div>
        </div>
        <div className={`card-body d-flex post-box ${isCollapsed ? 'content-moved-1' : ''}`}>
          <form className="postform1" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Post Title</label>
                <textarea className="form-control" type="text" name="postvidtit" value={formData.postvidtit} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
                <label>
                    Video Link</label>
                    <textarea className="form-control" type="text" name="videolink" value={formData.videolink} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
              <label>Category Name</label>
                <select className="form-control" name="vidcater" value={formData.vidcater} onChange={handleChange}>
                  <option value="opt11111">opt11111</option>
                  <option value="opt22222">opt22222</option>
                </select>
                </div>
              <div className="col-md-6 form-group">
                <label>
                    Select Images</label>
                    <input className="form-control file-input1" type="file" name="selcimag" onChange={handleChange}/>
            </div>
              <div className="col-md-6 form-group">
              <label>
                Select Language</label>
                <select className="form-control" name="selclangc" value={formData.selclangc} onChange={handleChange}>
                    <option value="opt11111">opt11111</option>
                    <option value="opt22222">opt22222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label className="redirecturlbox">
                    Redirection Url Link</label>
                    <textarea className="form-control" type="text" name="redirecturl" value={formData.redirecturl} onChange={handleChange}></textarea>
              </div>
              <div className="col-md-6 form-group">
                <label>
                Status</label>
                <select className="form-control" name="vidstatus" value={formData.vidstatus} onChange={handleChange}>
                    <option value="opt11111">opt11111</option>
                    <option value="opt22222">opt22222</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
               <label>
                Select Options:</label>
                <div className="d-flex">
                <input
                    className="videoptions mb-1"
                    type="radio"
                    name="vidselopt"
                    value="Option A"
                    checked={formData.vidselopt === 'Option A'}
                    onChange={handleChange}
                />
                <span className="ms-2 mt-2">
                  Option A
                </span>
                </div>                   
            </div>
          <div className="col-md-12 form-group">  
            <label className="video-description-label">
              Post Description
            </label>
            <QuillEditor 
              value={formData.vidpostdes} 
              onChange={(content) => setFormData({ ...formData, vidpostdes: content })} 
            />
          </div>
                      </div>

          <div className="mt-2 button-container">
              <button className="cancelled1" type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="ms-2" type="submit" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default VideoPost;
