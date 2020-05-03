import React, { Component } from 'react';

import {Links} from '../Context/Data';
import {Services} from '../Context/Data';
import {Portfolio} from '../Context/Data';
import {blogItems} from '../Context/Data';
import {Interiors} from '../Context/Data';
import {Events} from '../Context/Data';





// 1- 
const ProductContext = React.createContext();






class ProductProvider extends Component {
    state = {
        // for navbar
        sidebarOpen: false,
        closeLinks: false,
        links: Links,
        services: Services,
        portfolio:Portfolio,
        headerShow: false,
        blogItems: blogItems,
        Interios: Interiors,
        Events: Events
        // end navbar

    }

    // open the nav
    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
        console.log('click');
    }

    // close it when clocking the sidebar
    handleClose = () => (
        this.setState({
            sidebarOpen: false
        })
    )

    // scrolling effects
    componentDidMount() {
        window.addEventListener("scroll", this.scrollEffect);
    }

    scrollEffect = () => {
        if(window.scroll>50) {
            this.setState({
                handleShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleClose: this.handleClose,
                scrollEffect: this.scrollEffect

            }}> 
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}


