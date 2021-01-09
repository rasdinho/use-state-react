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


    render() {
        return (
<div id="form-div">
    <h1 id="form-h1"> Forms and Inputs</h1>
     <form>      
        <input name="name" type="text" value={this.state.nameInput} class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" value={this.state.emailImput} class="feedback-input" placeholder="Email" />
        <textarea name="text" value={this.state.commentInput} class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
    </form>
</div>
        );
    }
}

export default Forms;