import React from 'react';
import './HomePage.css';
import './HomePage.css';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';

import Tesimonials from './Tesimonials';
import ContactForm from './ContactForm';
import Twitter from './Twitter';
import WhoIs from './WhoIs';
import JustDefault from './JustDefault';
import Tools from './Tools';
import Specials from './Specials';



export default function HomePage() {
    return (
        <div>
            <Header />
            <Twitter />
            <Services/>
            <Portfolio />
            <Tools />
            <JustDefault />
            <Tesimonials />
            <WhoIs />
            <Specials />
            <ContactForm />
        </div>
    )
}
