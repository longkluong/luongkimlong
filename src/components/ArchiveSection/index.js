import { Wrapper, ArchiveDescription, ArchiveTitle, ArchiveCounter} from "./ArchiveSection.style"
import React from "react"

const ArchiveSection = ({ title, numPosts, seeMore }) => {
  return(
    <Wrapper>
      <ArchiveTitle>{title}</ArchiveTitle>
      {numPosts && <ArchiveCounter>{numPosts} posts</ArchiveCounter>}
      {seeMore && <ArchiveDescription>{seeMore}</ArchiveDescription>}
    </Wrapper>
  )
}

export default ArchiveSection