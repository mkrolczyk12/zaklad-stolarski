import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"

// Vendor Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from "gatsby-background-image"

import ContactForm from "../../components/contactForm/ContactForm"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const QuickQuery = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage1: file(relativePath: { eq: "quick-query-image.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        indexImage2: file(relativePath: { eq: "home-offer-image.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1800, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        }
      `
    )
    // set imageData
    const imageData1 = data.indexImage1.childImageSharp.fluid
    const imageData2 = data.indexImage2.childImageSharp.fluid

    return(
        <section className="home__quick-query">
            <BackgroundImage
                className="home__quick-query-image"
                fluid={imageData1}
            >
                <div className="home__quick-query-content">
                    <h1 className="home__quick-query-main-title">Masz pytanie?</h1>
                    <h2 className="home__quick-query-sub-text">Zapytaj o co tylko chcesz!</h2>
                    <Link className="home__quick-query-action-button"  to="/#menu-query-form">
                        <FontAwesomeIcon className="#" icon={faAngleDown}/>
                    </Link>
                </div>
            </BackgroundImage>
            <BackgroundImage
                className="home__quick-query-form-image"
                fluid={imageData2}
            >
                <ContactForm
                    formId = "menu-query-form"
                />
            </BackgroundImage>
        </section>
    )
}

export default QuickQuery