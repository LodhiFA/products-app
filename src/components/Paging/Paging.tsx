import React, { MouseEvent } from 'react'
import { Pagination } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import { changePage, pages } from '../../redux/slices/product/productSlice'

/**
 * Component for handling Pagination.
 *
 * The component renders bootstrap pagination component based on total no. of pages in the redux store.
 *
 * Each pagination item triggers a call to redux store for fetching data according to current page no.
 */
export const Paging = () => {
  const dispatch = useAppDispatch()
  const pageInfo = useAppSelector(pages)

  /* Dispatching call to reducer to handle changing page */
  const handleClick = (e: MouseEvent<HTMLElement>, page: number) => {
    dispatch(changePage(page))
  }

  return (
    <Pagination style={{ margin: '0 25%' }}>
      <Pagination.First
        onClick={(e) => {
          handleClick(e, 1)
        }}
      />
      <Pagination.Prev
        disabled={pageInfo.currentPage === 1}
        onClick={(e) => {
          handleClick(e, pageInfo.currentPage - 1)
        }}
      />

      {
        /* Case 1: In case of pages 1-10, we will be displaying pages ranging from 1-10 */
        pageInfo.currentPage <= 10
          ? Array.from(
              { length: pageInfo.totalPages <= 10 ? pageInfo.totalPages : 10 },
              (_, i = pageInfo.currentPage) => i + 1
            ).map((k: number) => {
              return (
                <Pagination.Item
                  key={k}
                  active={pageInfo.currentPage === k}
                  onClick={(e) => {
                    handleClick(e, k)
                  }}>
                  {k}
                </Pagination.Item>
              )
            })
          : /* Case 2: In case of final pages, we will be displaying pages (Max Page - 10) to (Max Page) */
          pageInfo.currentPage >= pageInfo.totalPages - 9
          ? Array.from(
              { length: 10 },
              (_, i) => pageInfo.totalPages - 9 + i
            ).map((k: number) => {
              return (
                <Pagination.Item
                  key={k}
                  active={pageInfo.currentPage === k}
                  onClick={(e) => {
                    handleClick(e, k)
                  }}>
                  {k}
                </Pagination.Item>
              )
            })
          : /* Case 3: In this case (majority of the time), we will display 4 pages prior to and 5 pages after current page */
            Array.from(
              { length: 10 },
              (_, i) => pageInfo.currentPage - 5 + i
            ).map((k: number) => {
              return (
                <Pagination.Item
                  key={k}
                  active={pageInfo.currentPage === k}
                  onClick={(e) => {
                    handleClick(e, k)
                  }}>
                  {k}
                </Pagination.Item>
              )
            })
      }

      <Pagination.Next
        disabled={pageInfo.currentPage === pageInfo.totalPages}
        onClick={(e) => {
          handleClick(e, pageInfo.currentPage + 1)
        }}
      />
      <Pagination.Last
        onClick={(e) => {
          handleClick(e, pageInfo.totalPages)
        }}
      />
    </Pagination>
  )
}
