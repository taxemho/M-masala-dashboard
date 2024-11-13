import React, { useState, useEffect } from 'react';
import './Roles.css';

const Roles = ({ isCollapsed }) => {
  const [rows, setRows] = useState([{ id: 1, data: Array(5).fill('') }]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const totalPages = Math.ceil(rows.length / pageSize);
  const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);


  const handleCellChange = (rowIndex, columnIndex, value) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].data[columnIndex] = value;
    setRows(updatedRows);
  };

  useEffect(() => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".role-btn-open");
    const closeModalBtn = document.querySelector(".role-close-btn");

    const openModal = function () {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };

    const closeModal = function () {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    return () => {
      openModalBtn.removeEventListener("click", openModal);
      closeModalBtn.removeEventListener("click", closeModal);
      overlay.removeEventListener("click", closeModal);
    };
  }, []);

  const columnLabels = ['','S.No',  'Role Name', 'Status', 'Action', 'Permissions'];

  return (
    <>
      <div className={`container-fluid roles-container ${isCollapsed ? 'content-moved-11' : ''}`}>
      <div className="row">
        <div className="col">
          <p>Roles</p>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn btn-primary role-btn-open">+Add Role</button>
        </div>
        <section className="modal hidden role-modal">
            <div className="flex">
              <h2>Add User Role</h2>
            </div>
            <p>Role Name*</p>
            <input type="text" id="textrole" placeholder="Rolename" />
            <div className="role-stack-button">
              <button className="role-close-btn">Close</button>
              <button className="role-add-btn">Add</button>
            </div>
          </section>
      </div>
        <div className="overlay hidden"></div>
        <div className="container-fluid vh-100 all-post-container ">
          <div className="export-buttons">
            <button className="btn btn-secondary">Excel</button>
            <button className="btn btn-secondary ms-1">PDF</button>
            <button className="btn btn-secondary ms-1">Print</button>
          </div>
          <div className="align-items-center justify-content-end row mb-2 ">
            <div className="col-auto">
              <label>Search: </label>
            </div>
            <div className="col-auto">
              <input type="text" />
            </div>
          </div>
          <div className="inside-rss-details-container">
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

export default Roles;
