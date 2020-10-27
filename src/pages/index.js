import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'

import introStyles from './intro.module.scss'
import Layout from "../components/layout"
import Head from '../components/head'
import PlayButton from '../components/playbutton'

const IntroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: {
        fields: [frontmatter___date]
        order: DESC
        }
          ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMM Do, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
   `)

return (
  <Layout>
    <Head title="Home"/>
      
      <section>
        <ul className={introStyles.projectList}>
          <li className={introStyles.projectItem}>
            <div className={introStyles.projectText}>
              <h2>Project 1</h2>
              <p>Read case study</p>
            </div>
          </li>

          <li className={introStyles.projectItem}>
            <div className={introStyles.projectText}>
              <h2>Project 2</h2>
              <p>Read case study</p>
            </div>
          </li>

          <li className={introStyles.projectItem}>
            <div className={introStyles.projectText}>
              <h2>Project 3</h2>
              <p>Read case study</p>
            </div>
          </li>
        </ul>
      </section>

      
      <section className={introStyles.noteSection}>
          <ul className={introStyles.noteList}>
              {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <Link className={introStyles.link} to={`/notes/${edge.node.fields.slug}`}>
                    <li className={introStyles.noteItem}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p> 
                    </li>
                  </Link>
                )
              })}
          </ul>
      </section>
    </Layout>
    )
  }
  
export default IntroPage