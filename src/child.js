import React from 'react';
import { Component } from "react";


class Child extends Component {
    state = {
        counter: 0 
    }
    constructor(props) {
        super(props);
        console.log("Child --- Constructor");
        this.setState({
            counter: props.count
        });
    }
    componentWillMount() {
        console.log("Child --- componentWillMount");
    }
    render(){
        console.log("Child --- Render")
    return(<h3>{this.state.counter} :Child</h3>);
    }
    componentDidMount(){
        console.log("Child --- componentDidMount");
    }
    componentWillReceiveProps(props){
        this.setState({
            counter: props.count
        })
        console.log("Child --- componentWillReceiveProps");
    }
    componentWillUpdate(){
        console.log("Child --- componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("Child --- componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("Child --- componentWillUnmount");       
    }
}

export default Child;