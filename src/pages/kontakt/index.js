import React from 'react'

import "../../styles/main.scss"

// Vendor components

// Contact components
import Title from "./title/Title";
import ContactSection from "./contact/ContactSection";
import Localization from "./localization/Localization";

// Common components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/scrollToTopButton/ScrollToTopButton";

const Contact = () => {

    return (
        <section className="contact">
            <Header/>
            <Title/>
            <ContactSection/>
            <Localization/>
            <Footer/>
            <ScrollToTopButton/>
        </section>
    )
}

export default Contact