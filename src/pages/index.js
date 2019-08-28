import React from "react"
import './../theme/base.css'
import SEO from "../components/seo"
import Footer from "../components/footer";
import Hero from "../components/hero";
import About from "../components/about";
import Images from "../components/images";

const IndexPage = () => (
  <>
    <SEO title="Introducing Mr & Mrs Wilkinson" />
    <Hero />
    <About />
    <Images />
    <Footer />
  </>
)

export default IndexPage
