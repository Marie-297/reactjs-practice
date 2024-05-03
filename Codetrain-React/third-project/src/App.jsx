// import React from 'react'

//  function addNum() {
//   return (
//     <div>
//       <h1>This is my Function</h1>
//     </div>
//   )
// }

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h3>This is my Parent Component</h3>
//       </>
//     )
//   }
// }

// export default App;

//Another way or doing this
import {React, Component} from 'react';
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <>
        <h1>This is my Parent Component</h1>
        <Button name="Start" color="purple" textColor="white" />
        <Button name="Sign-Up" color="yellow"/>
        <Button name="Log In" color="darkred"/>
      </>
    )
  }
}

export default App;

// Props