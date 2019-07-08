import React, {Component} from 'react';
import axios from 'axios';

import Layout from '../components/Layout';

class Index extends Component{ 
    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: ''
        }
    }
    
    componentDidMount(){
        axios.get(`http://laughingcolours.com/wp-json/wp/v2/posts/112705`)
        .then(res => {
            console.log(res.data);
            const title = res.data.title['rendered'];
            const content = res.data.content['rendered'];

            this.setState({ title, content }, ()=>{
                document.getElementById('content').innerHTML =  this.state.content;
            });
        })
    }

    render(){
        return(
            <Layout>
                <div>
                    <h1>{this.state.title}</h1>
                    <div id="content"></div>
                </div>
            </Layout>
        );
    }
}

export default Index;