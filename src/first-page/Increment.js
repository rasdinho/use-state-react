import React from 'react';
import './style.css'



class Increment extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    IncrementClickBtn = (e) =>{
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
<div id="num">
    <h1>The Current count is: {this.state.count}</h1>
    <button onClick={this.IncrementClickBtn}>Increment +1</button>
</div>
        );
    }
}

export default Increment;

