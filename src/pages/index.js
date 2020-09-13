import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'

import introStyles from './intro.module.scss'
import Avatar from "../components/avatar"
import Head from '../components/head'

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
  <div className={introStyles.chat}>
    <Head title="Home"/>
      <header>
        <div className={introStyles.avatar}><Avatar /></div>
          <p className={introStyles.messageOne}>Hey, I’m Nathan.</p>
          <p className={introStyles.message}>I'm trying to make your day better by creating digital products and websites that solve problems.</p>
      </header>
          
      <section className={introStyles.noteSection}>
        <p className={introStyles.subtitle}>#notes   ·   <Link className={introStyles.smallLink} to="/notes">view all</Link> </p>
          <ol className={introStyles.posts}>
              {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <Link className={introStyles.link} to={`/notes/${edge.node.fields.slug}`}>
                    <li className={introStyles.post}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p>{edge.node.frontmatter.date}</p> 
                    </li>
                  </Link>
                )
              })}
          </ol>
      </section>
              
      <section className={introStyles.contactSection}>
        <p className={introStyles.subtitle}>#contact</p>
        <p className={introStyles.message}>Thanks for visiting my website. You can also find me on <a className={introStyles.externalLink} href="https://twitter.com/NathanDorney" target="_blank">Twitter</a> or send me a good old fashioned <a className={introStyles.externalLink} href="mailto: hello@nathandorney.co.uk">Email</a>.</p>    
      </section>  
    
      <section className={introStyles.footerSection}>
        <p className={introStyles.message}>✌ Catch you in a bit.</p>
      </section>    
    </div>
    )
  }
  
export default IntroPage