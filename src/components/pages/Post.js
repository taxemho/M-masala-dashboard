import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Post.css";

const Post = ({ isCollapsed }) => {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.22.9.59:3000');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columnLabels = [
    '',
    'S.No',
    'Category Name',
    'Post Title',
    'RSS Name',
    'Status',
    'Received on',
    'Published on',
    'Edited on',
    'View',
    'Action',
    'Uploaded By',
  ];

  const pageSize = 10;
  const totalPages = Math.ceil(rows.length / pageSize);
  const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className={`container-fluid post-container ${isCollapsed ? 'content-moved-2' : ''}`}>
      <div className="row">
        <div className="col">
          <p>Posts</p>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to="/contact">
            <button className="btn btn-primary add-button-posts" type="button">
              + Add New
            </button>
          </Link>
        </div>
      </div>
      <div className="container-fluid vh-100 all-post-container">
        <nav className="container d-flex bg-secondary justify-content-evenly align-items-center nav-bar-inside">
          <p className="mt-3">Filters:</p>
          <select className="form-select custom-select">
            <option value="">Select Category</option>
            <option value="opt1">opt1</option>
            <option value="opt2">opt2</option>
          </select>
          <select className="form-select custom-select">
            <option value="">Select RSS</option>
            <option value="opt1">opt1</option>
            <option value="opt2">opt2</option>
          </select>
          <select className="form-select custom-select">
            <option value="">Select Status</option>
            <option value="opt1">opt1</option>
            <option value="opt2">opt2</option>
          </select>
          <button className="btn btn-primary m-2 custom-button">Submit</button>
        </nav>
        <button className="btn btn-success pub-but-post publish-post">🌎 Publish</button>
        <div className="join-but-post">
          <button className="btn btn-secondary me-1">Excel</button>
          <button className="btn btn-secondary me-1">PDF</button>
          <button className="btn btn-secondary">Print</button>
        </div>
        <div className="align-items-center justify-content-end row mb-2">
          <div className="col-auto">
            <label>Search: </label>
          </div>
          <div className="col-auto">
            <input type="text" />
          </div>
        </div>
        <div className="inside-post-container">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  {columnLabels.map((label, index) => (
                    <th key={index}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleRows.map((row, rowIndex) => (
                  <tr key={row.postid}>
                    <td><input type="checkbox" /></td>
                    <td>{(currentPage - 1) * pageSize + rowIndex + 1}</td>
                    <td>{row.categoryid}</td>
                    <td>{row.posttitle}</td>
                    <td>{row.rssid}</td>
                    <td>{row.status}</td>
                    <td>{new Date(row.created_at).toLocaleDateString()}</td>
                    <td>{new Date(row.publishedon).toLocaleDateString()}</td>
                    <td>{new Date(row.updated_at).toLocaleDateString()}</td>
                    <td><button className="btn btn-link">View</button></td>
                    <td><button className="btn btn-link">Edit</button></td>
                    <td>{row.uploaded_by}</td>
                  </tr>
                ))}
                {[...Array(pageSize - visibleRows.length)].map((_, index) => (
                  <tr key={visibleRows.length + index}>
                    <td><input type="checkbox" /></td>
                    <td>{visibleRows.length + index + 1}</td>
                    {[...Array(columnLabels.length - 2)].map((_, columnIndex) => (
                      <td key={columnIndex + 2}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Post;
