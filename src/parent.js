import React from 'react';
import Child from './child';

class Parent extends React.Component {
    state = {
        counter: 0,
        show: true
    }
    constructor() {
        super();
        console.log("Parent --- Constructor");
    }
    componentWillMount() {
        console.log("Parent --- componentWillMount");
    }
    componentDidMount() {
        console.log("Parent --- componentDidMount");
    }
    componentWillReceiveProps() {
        console.log("Parent --- componentWillReceiveProps");
    }
    shouldComponentUpdate() {
        console.log("Parent --- shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("Parent --- componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("Parent --- componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("Parent --- componentWillUnmount");
    }

    updateCounter = () => {
        this.setState(previousState => ({
            counter: previousState.counter + 1,
            show: previousState.show
        }))
    }
    render() {
        console.log("Parent --- render");
        return (
            <>
                <h2>{this.state.counter} :Parent</h2>
                <button onClick={this.updateCounter}>Click </button>
                {this.state.show && <Child count={this.state.counter} />}
            </>
        );
    }


}
export default Parent;