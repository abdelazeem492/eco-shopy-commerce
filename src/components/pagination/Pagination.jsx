/* eslint-disable react/prop-types */
import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatePages = [];
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }
  return (
    <div className="pagination py-3">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="previous"
        disabled={currentPage <= 1}
      >
        <i className="bi bi-chevron-double-left" />
      </button>
      <div className="pagination-nums">
        {generatePages.map((page) => (
          <div
            onClick={() => setCurrentPage(page)}
            className={`page ${currentPage === page && "active"}`}
            key={page}
          >
            {page}
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= pages}
        className="next"
      >
        <i className="bi bi-chevron-double-right" />
      </button>
    </div>
  );
};

export default Pagination;
