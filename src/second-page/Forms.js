import React, { Component } from 'react';
import './style.css'

class Forms extends Component {
    render() {
        return (
<div id="form-div">
    <h1 id="form-h1"> Type Your Imformation Here</h1>
     <form>      
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
    </form>
</div>
        );
    }
}

export default Forms;