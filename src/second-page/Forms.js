import React, { Component } from 'react';
import './style.css'

class Forms extends Component {
    constructor(){
        super();
        this.state = {
            nameInput: "",
            emailImput: "",
            commentInput: ""

        }
    }

handleNameInput = () => {

}

handleEmailInput = () => {

}

handleCommentInput = () => {

}
    render() {
        return (
<div id="form-div">
    <h1 id="form-h1"> Forms and Inputs</h1>
     <form>      
        <input name="name" type="text" value={this.state.nameInput} class="feedback-input" placeholder="Name" onChange={this.handleNameInput}/>   
        <input name="email" type="text" value={this.state.emailImput} class="feedback-input" placeholder="Email" onChange={this.handleEmailInput}/>
        <textarea name="text" value={this.state.commentInput} class="feedback-input" placeholder="Comment" onChange={this.handleCommentInput}></textarea>
        <input type="submit" value="SUBMIT"/>
    </form>
</div>
        );
    }
}

export default Forms;