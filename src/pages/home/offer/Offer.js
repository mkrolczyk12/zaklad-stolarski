import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

const Offer = () => {
    const data = useStaticQuery(
        graphql`
        query {
          indexImage: file(relativePath: { eq: "home-offer-image.jpg" }) {
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
    const imageData = data.indexImage.childImageSharp.fluid

    return (
        <div className="home__offer">
            <div className="home__offer-quick-info">
                <p className="home__offer-quick-info-text">
                    Pracuję na terenie Małopolski
                    i jej okolic. Transport jest <b className="highlighted-text">zawsze
                    wliczony w cenie zamówienia.</b>
                </p>
            </div>
            <BackgroundImage
                className="home__offer-image"
                fluid={imageData}
                style={{opacity: 0.6}}
                >
                <div className="home__offer-content">
                    <h1 className="home__offer-title">Różnorodna oferta Produktów</h1>
                    <p className="home__offer-text">
                        Contrary to popular belief, Lorem
                        Ipsum is not simply random text.
                        It has roots in a piece of classical
                        Latin literature from 45 BC, making
                        it over 2000 years old. Richard
                        McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia
                    </p>
                    <div className="home__offer-action">
                        <a className="action-button" href="/nasza-oferta">Zobacz ofertę</a>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default Offer