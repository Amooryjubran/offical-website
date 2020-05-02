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
        sidebarOpen: false,
        closeLinks: false,
        links: links,
        services: Services,
        portfolio: Portfolio,
        headerShow: false,
        blogItems: blogItems,
        Interios: Interiors,
        Events: Events

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
    render() {
        return (
            <ProductContext.Provider value="hello"> 
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}