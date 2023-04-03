import React from "react";
import ReactPaginate from "react-paginate";

type IPagination = {
  totalPages: number;
  page: number;
  active: any;
};

const Pagination = (props: IPagination) => {
  return (
    <ReactPaginate
      nextLabel={<button>Next</button>}
      initialPage={props.page - 1}
      onPageChange={props.active}
      pageRangeDisplayed={5}
      pageCount={props.totalPages}
      previousLabel={<button>Previous</button>}
    />
  );
};

export default Pagination;
