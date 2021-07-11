// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Interior Design München/Köln">
    <p>I'm making this ..hot..</p>
    <StaticImage
        alt="Wohnzimmer Interior Design aus München"
        src="../images/pbshomes-interior-design-feng-shui.jpeg"
      />
  </Layout>
  )
}

// Step 3: Export your component
export default IndexPage