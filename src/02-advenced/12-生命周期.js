//fish 220719
import React, { Component } from 'react'

export default class App extends Component {


    UNSAFE_componentWillUnmount(){


        console.log("will mount")
    }

    componentDidMount(){


        console.log("did mount")
    }

    render() {


        console.log("render")
        return (

            <div>App</div>
            
        
        )
    }
}
