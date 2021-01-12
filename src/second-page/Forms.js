import React, { Component } from 'react';
import './style.css'

class Forms extends Component {
    constructor(){
        super();
        this.state = {
            nameInput: "",
            emailInput: "",
            commentInput: ""

        }
    }

handleNameInput = (e) => {
    e.preventDefault()
    this.setState({
        nameInput: e.target.value
    })
}

handleEmailInput = (e) => {
    e.preventDefault()
    this.setState({
        emailInput: e.target.value
    })

}

handleCommentInput = (e) => {
    e.preventDefault()
    this.setState({
        commentInput: e.target.value
    })

}

handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("this is", data)
}
    render() {
        return (
<div id="form-div">
    <h1 id="form-h1"> Forms and Inputs</h1>
    <p id="p-form">Name is: <span id="form-span">{this.state.nameInput} </span></p>
    <p id="p-form">Email is: <span id="form-span">{this.state.emailInput}</span></p>
    <p id="p-form">Comment is: <span id="form-span">{this.state.commentInput}</span></p>
     <form onSubmit={this.handleSubmit}>      
        <input name="name" type="text" value={this.state.nameInput} className="feedback-input" placeholder="Name" onChange={this.handleNameInput}/>   
        <input name="email" type="text" value={this.state.emailInput} className="feedback-input" placeholder="Email" onChange={this.handleEmailInput}/>
        <textarea name="text" value={this.state.commentInput} className="feedback-input" placeholder="Comment" onChange={this.handleCommentInput}></textarea>
        <input type="submit" value="SUBMIT"/>
    </form>

</div>
        );
    }
}

export default Forms;