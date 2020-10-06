import React from "react"
import Layout from "../components/layout"

import Head from '../components/head'
import Feed from "../images/feed.png"

import Avatar from "../components/avatar"

import aboutStyles from './about.module.scss'


const AboutPage = () => {
    return (
      <Layout>
          <Head title="About"/>
          <Avatar></Avatar>
          <img className={aboutStyles.feed} src={Feed} alt="Me" />
          <h1 className={aboutStyles.title}>About me</h1>          
          <p>The exponential growth of mobile technology has ushered in an age where time and attention is an increasingly scarce resource. Instead of technology enhancing our abilities as humans, we’ve seen it become a vehicle for extracting our attention, monetizing our personal information, and exploiting our psychological vulnerabilities. As designers, we play a key role in the creation of such technology, and it’s time we take responsibility for the impact that these products and services we build are having on people it should serve.</p> 
          <p>In this talk, I focus on the guiding principles I’ve outlined in my recent project Humane by Design. I explore various UX patterns that designers can use that consider user well-being, as well as the ultimate benefits of designing humane products and services.</p>
          <h2>Colophon</h2>
          <p>This website is built with Gatsby. You can read about how I built it here. The code is open source on Github and is hosted with Netlify.  This site collects no data, cookies and has no analytics.</p>
          <h2>Now</h2>
          <p>In this talk, I focus on the guiding principles I’ve outlined in my recent project Humane by Design. I explore various UX patterns that designers can use that consider user well-being, as well as the ultimate benefits of designing humane products and services.</p>
      </Layout>
    )
  }
  
  export default AboutPage