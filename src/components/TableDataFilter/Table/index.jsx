import React, { useState } from 'react';

import Pagination from '../Pagination';

import { TableContainer } from './styles';

export const Table = ({
  limit,
  headData,
  renderHead,
  bodyData,
  renderBody,
}) => {

  const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit));
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  
  return (
    <div>
      <TableContainer>
        <table>
          {
            headData && renderHead ? (
              <thead>
                <tr>
                  {
                    headData.map((item, index) => renderHead(item, index))
                  }
                </tr>
              </thead>
            ) : null
          }
          {
            bodyData && renderBody ? (
              <tbody>
                {
                  dataShow.map((item, index) => renderBody(item, index))
                }
              </tbody>
            ) : null
          }
        </table>
      </TableContainer>
      {
        pages > 1 ? 
          <Pagination 
            limitOfPage={limit}
            totalItems={bodyData.length}
            offset={offset}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setDataShow={setDataShow}
            bodyData={bodyData}
          />
       : null
      }
    </div>
  )
}
