import { kebabCase } from "lodash"
import React from "react"
import {
  Wrapper,
  Content,
  FeaturedImage,
  Tag,
  Category,
  Title,
  // Author,
  Date,
  LinkWrapper,
} from "./BlogCard.style"
import { Link } from "gatsby"

const BlogCard = ({
  slug,
  image,
  category,
  title,
  // author,
  tags,
  excerpt,
  date,
}) => {
  const categoryUrl = `/category/${kebabCase(category)}`
  return (
    <LinkWrapper>
      <Link to={slug}>
        <Wrapper key={slug}>
          <FeaturedImage className="feature-image" image={image} alt={title} />
          <Content>
            <Category>
              <Link to={categoryUrl} className="category">{category}</Link>
            </Category>
            <Title>{title}</Title>
            <p>{excerpt}</p>
            <Tag>
              <ul>
                {tags.map(tag => {
                  const tagUrl = `/tag/${kebabCase(tag)}`
                  return (
                    <li>
                      <Link key={tag} to={tagUrl} className="tag">
                        {tag}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Tag>
            {/* <Author>{author}</Author> */}
            <Date>{date}</Date>
          </Content>
        </Wrapper>
      </Link>
    </LinkWrapper>
  )
}

export default BlogCard
