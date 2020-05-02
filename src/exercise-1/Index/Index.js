import React from 'react';
import {Component} from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

import './Index.css'
class Index extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="hello" >
                <Sidebar />
                <Content />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index;