import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Videos.css";

const Videos = ({ isCollapsed }) => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const columnLabels = [
    '',
    'S.No',
    'Paparazzi Title',
    'Category',
    'Video File',
    'Video Link',
    'Status',
    'Created On',
    'Published On',
    'Edited On',
    'Action'
  ];

  const [rows, setRows] = useState([{ id: 1, data: Array(10).fill('') }]);
  const [currentPage, setCurrentPage] = useState(1);




  // Calculate pagination
  const pageSize = 10;
  const totalPages = Math.ceil(rows.length / pageSize);
  const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <div className={`container-fluid videox-container ${isCollapsed ? 'content-moved-2' : ''}`}>
        <div className="row">
          <div className="col">
            <p>Paparazzi Posts</p>
          </div>
          <div className="col d-flex justify-content-end">
            <Link to="/paparazzipost">
              <button className="btn btn-primary add-button-videos" type="button" onClick={handleButtonClick}>
                + Add New
              </button>
            </Link>
          </div>
        </div>
        <div className="container-fluid vh-100 all-post-container ">
          <nav className="container d-flex bg-secondary justify-content-evenly align-items-center nav-bar-inside">
            <p className="mt-3">Filters:</p>
            <select className="form-select custom-select">
              <option value="">Select Category</option>
              <option value="opt1">Option 1</option>
              <option value="opt2">Option 2</option>
            </select>
            <button className="btn btn-primary m-2 custom-button">Submit</button>
          </nav>
          <button className="btn btn-success pub-button-videos pub-but-post publish-post">🌎 Publish</button>
          <div className="export-buttons">
            <button className="btn btn-secondary me-1">Excel</button>
            <button className="btn btn-secondary me-1">PDF</button>
            <button className="btn btn-secondary">Print</button>
          </div>
          <div className="align-items-center justify-content-end row mb-3 search-container">
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
                  <tr key={rowIndex}>
                    <td><input type="checkbox" /></td>
                    {/* Render S.No. column with numbers 1 to 10 */}
                    <td>{(currentPage - 1) * pageSize + rowIndex + 1}</td>
                    {row.data.slice(2).map((cell, columnIndex) => (
                      <td key={columnIndex + 2}>{cell}</td>
                    ))}
                  </tr>
                ))}
                {/* Add remaining rows */}
                {[...Array(pageSize - visibleRows.length)].map((_, index) => (
                  <tr key={visibleRows.length + index}>
                    <td><input type="checkbox" /></td>
                    {/* Render S.No. column with numbers 1 to 10 */}
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
    </>
  );
};

export default Videos;
