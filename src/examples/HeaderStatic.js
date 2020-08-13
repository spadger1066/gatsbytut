import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            describe
            person {
              age
              name
            }
            title
          }
        }
      }
    `}
    render={data => <h4>{data.site.info.describe}</h4>}
  ></StaticQuery>
)

export default ComponentName
