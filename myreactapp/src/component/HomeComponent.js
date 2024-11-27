// Date: 2024-11-26
//1. Create a page with name, topics discussed
//2. Create a route to render this page, Topics
//3. When you click on the First Topic it should take you to another page, with name TopicDetails with some random information
//4. We need to display 5 Topics <Webpack, React, Router, VirtualDom,PropTypes>

import React, {Component} from "react";

export default class Home extends Component {


    render () {
        return (
            <>
                <h2>Home page</h2>
            
            </>
        )
    }
}

export class Mywebpack extends Component {


    render () {
        return (
            <>
                <h2>Mywebpack page</h2>
            
            </>
        )
    }
}

export class Myreact extends Component {


    render () {
        return (
            <>
                <h2>Myreact page</h2>
            
            </>
        )
    }
}

export class Myrouter extends Component {


    render () {
        return (
            <>
                <h2>Myrouter page</h2>
            
            </>
        )
    }
}

export class Myvdom extends Component {


    render () {
        return (
            <>
                <h2>My Virtual Dom page</h2>
            
            </>
        )
    }
}

export class Myptypes extends Component {


    render () {
        return (
            <>
                <h2>My PropTypes page</h2>
            
            </>
        )
    }
}