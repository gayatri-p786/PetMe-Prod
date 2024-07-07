// DigitalTemplate.jsx
import React, { useState } from 'react';

const DigitalTemplate = ({ pages, onSubmit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [signedPages, setSignedPages] = useState(new Array(pages.length).fill(false));

  const handleSignPage = () => {
    const updatedSignedPages = [...signedPages];
    updatedSignedPages[currentPage] = true;
    setSignedPages(updatedSignedPages);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    // Here you can handle form submission after all pages are signed
    onSubmit();
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Digital Template</h2>
      <div className="mb-4">
        <p className="text-sm">{pages[currentPage]}</p>
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePreviousPage}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md border border-gray-400"
          disabled={currentPage === 0 || signedPages[currentPage - 1]}
        >
          Previous
        </button>
        {!signedPages[currentPage] ? (
          <button
            onClick={handleSignPage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Sign this page
          </button>
        ) : (
          <p className="text-green-500">Page Signed ✔️</p>
        )}
        <button
          onClick={handleNextPage}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md border border-gray-400"
          disabled={currentPage === pages.length - 1 || !signedPages[currentPage]}
        >
          Next
        </button>
      </div>
      <div className="flex justify-end">
        {signedPages.every((signed) => signed) && (
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Submit Template
          </button>
        )}
      </div>
    </div>
  );
};

export default DigitalTemplate;
