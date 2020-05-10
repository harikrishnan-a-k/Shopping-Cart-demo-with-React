import React from 'react';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart';

function App() {
  const flexStyle={display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  };
  const items=[{id:1, name:'nike shoes', price:2000, qty:2},
               {id:2, name:'addidas football', price:1500, qty:5},
               {id:3, name:'yonex racket', price:10000, qty:3}];
  return (
    <div className="App">
      
      <Navbar/>
      
      <header className="App-header">
      <Cart initialItems={items}/>
       <div style={flexStyle}>
        <Counter step={5}/>
        <Counter step={3}/>
       </div>
        
        {/* <Greeting name="hari" age="27" excitementNo={8}/>
        <Greeting name="manu"  excitementNo={4}/> */}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
