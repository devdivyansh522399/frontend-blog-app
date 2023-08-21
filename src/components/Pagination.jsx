import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);   

  return (
      <div className='space-x-3'>
          <button
            className="px-4 py-1 rounded-full text-[18px] bg-dark-soft hover:bg-dark-hard text-white font-medium font-roboto "
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className='px-4 py-2 rounded-full text-[18px] bg-[#f95151] hover:bg-dark-hard text-white font-medium font-roboto '>{currentPage} of {totalPages}</span>
          <button
            className="px-4 py-1 rounded-full text-[18px] bg-dark-soft hover:bg-dark-hard text-white font-medium font-roboto "
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
      </div>
  );
};

export default Pagination;
