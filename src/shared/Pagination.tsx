import React from "react";
import '../css/Pagination.css'
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }:PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div className="pagination">
      <Link to='' onClick={() => onPageChange(currentPage - 1)}>
        &laquo;
      </Link>
      <Link to='' onClick={() => onPageChange(currentPage - 1)}>
      <FaAngleLeft style={{fontSize:10}}/>
      </Link>
      {pages.map((page) => (
       <Link
       key={page}
       to=''
       className={currentPage === page ? "active" : ""}
       onClick={() => onPageChange(page)}
     >
       {page}
     </Link>
      ))}
      <Link to='' onClick={() => onPageChange(currentPage + 1)}>
      <FaAngleRight style={{fontSize:10}}/>
      </Link>
      <Link to='' onClick={() => onPageChange(currentPage + 1)}>
        &raquo;
      </Link>
    </div>
  );
};

export default Pagination;
