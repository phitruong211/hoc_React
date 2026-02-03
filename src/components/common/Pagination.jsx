import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Pagination Component
 */
const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  maxPagesToShow = 5,
  size,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <BootstrapPagination size={size}>
      <BootstrapPagination.First
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      />
      <BootstrapPagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {pages[0] > 1 && (
        <>
          <BootstrapPagination.Item onClick={() => onPageChange(1)}>
            1
          </BootstrapPagination.Item>
          {pages[0] > 2 && <BootstrapPagination.Ellipsis disabled />}
        </>
      )}

      {pages.map((page) => (
        <BootstrapPagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </BootstrapPagination.Item>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <BootstrapPagination.Ellipsis disabled />
          )}
          <BootstrapPagination.Item onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </BootstrapPagination.Item>
        </>
      )}

      <BootstrapPagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <BootstrapPagination.Last
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    </BootstrapPagination>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  maxPagesToShow: PropTypes.number,
  size: PropTypes.oneOf(["sm", "lg"]),
};

export default Pagination;
