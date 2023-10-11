import React from "react";
import { Link, graphql} from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data);
  // const {title,description}=data.site.siteMetadata;
  // const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/>
        </div>
      </section>
    </Layout>
  )
}

export const query=graphql`
  query MyQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`