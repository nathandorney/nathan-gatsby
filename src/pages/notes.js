import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'

import noteStyles from './note.module.scss'
import Avatar from "../components/avatar"
import Head from '../components/head'

const IntroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
  <body className={noteStyles.chat}>
    <Head title="Notes"/>
      <header>
        <div className={noteStyles.avatar}><Avatar /></div>
          <p className={noteStyles.message}>Here's a collection of my notes...</p>
      </header>
          
      <section className={noteStyles.noteSection}>
          <ol className={noteStyles.posts}>
              {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <Link className={noteStyles.link} to={`/notes/${edge.node.fields.slug}`}>
                    <li className={noteStyles.post}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p> 
                    </li>
                  </Link>
                )
              })}
          </ol>
      </section>

      <Link className={noteStyles.button} to="/">Home</Link>  
    </body>
    )
  }
  
export default IntroPage