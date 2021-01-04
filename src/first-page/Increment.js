import React from 'react';
import './style.css'



class Increment extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            show: true
        }
    }

    IncrementClickBtn = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    DecrementClickbtn = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetBtn = () => {
        this.setState({
            count: 0
        })
    }

    // we used ! to display the opposite of the initail state
    ToggleClick = () => {
        this.setState({ 
            show: !this.state.show });  
    }

    render() {
        return (
<>
    <div id="num">
        {/* this how the line under was before we wnated to hide and show by clicking, we put <h1> inside ternary function*/}
        {/* <h1>The Current count is: {this.state.count}</h1> */}

        {this.state.show ? <h1>The Current count is: {this.state.count}</h1> : ''} {/* Here as you see we used ternary function*/}

        <button onClick={this.IncrementClickBtn}>Increment +1</button>

        <button onClick={this.DecrementClickbtn}>Decrement -1</button>

        <button onClick={this.resetBtn}>Reset Count</button>

        <button onClick={this.ToggleClick}>{ this.state.show ? 'Hide number' : 'Show number' } </button>

    </div>
</>
        );
    }
}

export default Increment;








    // ====================================================== Other Examples ==================================================================

// class Increment extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         value: 0,
//         show: true
//     };

// }

//     IncrementClickBtn = () => {
//         this.setState({
//             value: this.state.value + 1
//         })
//     }
//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   }

//   reset = ()=> {
//    this.setState({
//        value: 0
//    })
//   }

//     render() {
//         return (
// <>

//     <div id="num">
//         <h1> Current Count: {this.state.value}</h1>
//         { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }

//         <button onClick={this.IncrementClickBtn}>Add +1</button>

//     </div>

// </>
//         );
//     }
// }

// export default Increment;
// ========================================================================================================================
// import React, { Component } from 'react';

// class Increment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicks: 0,
//     //   show: true
//     };
// }

// IncrementItem = () => {
//     this.setState({ clicks: this.state.clicks + 1 });
// }
// DecreaseItem = () => {
//     this.setState({ clicks: this.state.clicks - 1 });
// }

//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.IncrementItem}>Add 1</button>
//         <button onClick={this.DecreaseItem}>Subrtract 1</button>
//         <button onClick={this.ToggleClick}>
//           { this.state.show ? 'Hide number' : 'Show number' }
//         </button>
//         { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
//       </div>
//     );
//   }
// }
// ========================================================================================================================

// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     // change code below this line
  
//     increment() {
//       this.setState({
//         count: this.state.count + 1
//       });
//     };
    
//     decrement() {
//       this.setState({
//         count: this.state.count - 1
//       });
//     };
  
//     reset() {
//       this.setState({
//         count: 0
//       });
//     };
  
//     // change code above this line
//     render() {
//       return (
  
//      <div>
//      <button className='inc' onClick={(e) => this.increment(e)}>Increment!</button>
//       <button className='dec' onClick={(e) => this.decrement(e)}>Decrement!</button>
//       <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
//       <h1>Current Count: {this.state.count}</h1>
//     </div>
//       );
//     }
//   };