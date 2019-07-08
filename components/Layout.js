import React, { Component } from 'react';
import Head from 'next/head';

import Navbar from "./Navbar";

class Layout extends Component{
    render(){
        return(
            <div>
                <Head>
                    <title>Laughing Colors</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
                </Head>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;