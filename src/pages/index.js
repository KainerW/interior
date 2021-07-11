// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this ..hot..</p>
    <StaticImage
        alt="Terminator coming back to buy Bitcoin"
        src="../images/arnold-buying-bitcoin-cheap.jpeg"
      />
  </Layout>
  )
}

// Step 3: Export your component
export default IndexPage