import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

import postStyles from './post.module.scss'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMM Do, YYYY")
            }
            html
        }
    }
`

const Notes = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
                <header>
                    <h1 className={postStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p className={postStyles.date}>{props.data.markdownRemark.frontmatter.date}</p>
                </header>
                
                <article>
                    <div className={postStyles.content} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
                </article>
        </Layout>
    )
}

export default Notes