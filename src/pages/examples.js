import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>Hello from examples page</p>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
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
`
export default examples
