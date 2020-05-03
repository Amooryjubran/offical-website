import React from 'react';
import './HomePage.css';
import './HomePage.css';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import justDefault from './justDefault';
import Tesimonials from './Tesimonials';
import ContactForm from './ContactForm';
import Twitter from './Twitter';
import WhoIs from './WhoIs';



export default function HomePage() {
    return (
        <div>
            <Header />
            <Services/>
            <Portfolio />
            <justDefault />
            <Tesimonials />
            <ContactForm />
            <Twitter />
            <WhoIs />
        </div>
    )
}
