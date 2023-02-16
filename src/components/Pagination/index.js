import React from "react"
import { Link } from "gatsby"

import { PaginationWrapper, PaginationItem } from "./Pagination.style"

const Pagination = ({ numPages, currentPage, contextPage }) => {
  if (numPages <= 1) {
    return null
  }

  return (
    <PaginationWrapper>
      {Array.from({ length: numPages }).map((item, i) => {
        const index = i + 1

        const baseLink = `/${contextPage ? `${contextPage}/` : ""}`
        const link = index === 1 ? baseLink : `${baseLink}page/${index}`

        return (
          <PaginationItem current={currentPage === index} key={link}>
            {currentPage === index ? (
              <span>{index}</span>
            ) : (
              <Link to={link}>{index}</Link>
            )}
          </PaginationItem>
        )
      })}
    </PaginationWrapper>
  )
}

export default Pagination
