import React, { MouseEvent } from 'react'
import { Pagination } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import { changePage, pages } from '../../redux/slices/product/productSlice'

export const Paging = () => {
  const dispatch = useAppDispatch()
  const pageInfo = useAppSelector(pages)

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

      {pageInfo.currentPage <= 10
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
        : pageInfo.currentPage >= pageInfo.totalPages - 9
        ? Array.from({ length: 10 }, (_, i) => pageInfo.totalPages - 9 + i).map(
            (k: number) => {
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
            }
          )
        : Array.from(
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
          })}

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
