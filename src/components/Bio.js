import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Wrapper, AuthorDescription } from "./Bio.style"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            facebook
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <Wrapper>
      <StaticImage
        className="AuthorAvatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <AuthorDescription>
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://facebook.com/${social?.facebook || ``}`}>
            You should follow him on Facebook
          </a>
        </p>
      )}
      </AuthorDescription>
    </Wrapper>
  )
}

export default Bio
