import React from "react";
import { BsFillCaretRightFill, BsSkipBackwardFill, BsFillSkipForwardFill, BsFillCaretLeftFill } from "react-icons/bs";

import { TablePagination, ArrowsIcon, PaginationItem } from "./styles";

const maxItems = 7;
const maxItemsOnLeft = (maxItems - 1) / 2;

export const Pagination = ({
  limitOfPage,
  totalItems,
  offset,
  setOffset,
  currentPage,
  setDataShow,
  setCurrentPage,
  bodyData,
}) => {

  currentPage = offset ? (offset / limitOfPage) + 1 : 1;
  const pages = Math.ceil(totalItems / limitOfPage) - 1;
  const first = Math.max(currentPage - maxItemsOnLeft, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limitOfPage);

    const start = Number(limitOfPage) * page
    const end = start + Number(limitOfPage)
    setDataShow(bodyData.slice(start, end))
    setCurrentPage(page)
  }

  return (
    <TablePagination>
      <div>
        <ArrowsIcon
          onClick={() => onPageChange((currentPage - currentPage) + 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? 'btn-disabled' : null}
        >
          <BsSkipBackwardFill />
        </ArrowsIcon>
      </div>
      <div>
        <ArrowsIcon
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? 'btn-disabled' : null}
        >
          <BsFillCaretLeftFill />
        </ArrowsIcon>
      </div>

      {Array.from({ length: Math.min(maxItems, pages) })
        .map((_, index) => index + first)
        .map((page, index) => (

          <PaginationItem
            key={index}
            className={page === currentPage ? 'active' : null}
          >
            {page <= pages ?
              <button onClick={() => onPageChange(page)}>
                {page}
              </button>
              :
              <></>
            }
          </PaginationItem>
        ))}

      <div>
        <ArrowsIcon
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pages}
          className={currentPage === pages ? 'btn-disabled' : null}
        >
          <BsFillCaretRightFill />
        </ArrowsIcon>
      </div>
      <div>
        <ArrowsIcon
          onClick={() => onPageChange(pages)}
          disabled={currentPage === pages}
          className={currentPage === pages ? 'btn-disabled' : null}
        >
          <BsFillSkipForwardFill />
        </ArrowsIcon>
      </div>
    </TablePagination>
  )

}




