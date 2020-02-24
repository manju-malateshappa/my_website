
import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
// import Header from './components/header1'
import Introduction from './components/introduction'
import About from './components/about'
import Resume from './components/resume'
import Services from './components/services';
import Contact from './components/contact';
class App extends Component {
  render() {
    return (
      <div className="colorlib-App">
         	<Header></Header>
					<Introduction></Introduction>
					<About></About>
					<Resume></Resume>
					<Services></Services>
					<Contact></Contact>
      </div>
    );
  }
}

export default App;


// Header
// intro
// about
// resume
// services
// contact




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

