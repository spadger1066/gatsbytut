import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          animi doloribus, molestias nobis obcaecati officia quo sit vero vitae
          voluptatum. Dicta ea facere modi obcaecati qui quisquam quod
          recusandae ut!
        </p>
      </div>
    </Layout>
  )
}

export default blog
