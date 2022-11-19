import * as React from "react"
import About from "../components/about/about"
import Banner from "../components/banner/banner"
import Blog from "../components/blog/blog"
import Contacts from "../components/contacts/contacts"

import Layout from "../components/layout"
import Partners from "../components/partners/partners"
import Seo from "../components/seo"
import Services from "../components/services/services"

const IndexPage = () => (
  <Layout>
    <Banner />
    <About />
    <Services />
    <Partners />
    <Blog />
    <Contacts />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
