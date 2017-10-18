import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const UPDATE_NAME = 'update_name';

/* Hello world examples
const Hello = ({name}, {henk}) => (
    <div>{`Hellow ${name} ${henk}`}</div>
);

const HelloWorld = ({name}) => (
    <div>{`Hi ${name}`}</div>
);
*/

//Whihout a nay default is File name here it is App
export default ({ name, updateName }) => (
    <div>
        <b>Hoi, mijn naam is {name}</b>
    <button onClick={() => {
            updateName('JP');
        }
    }>
    Zet de naam
    </button>
    <input type="text"
           value={name}
           onChange={e => {
               console.log("targetvalue", e.target.value);
            updateName(e.target.value);
           }}
           />
    </div>
);




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//             {/*<NavigationBar title="Categories" titleColor="#ff0" NavBarColor="#f0b210" />*/}
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

//export default App;
//export default HelloWorld;