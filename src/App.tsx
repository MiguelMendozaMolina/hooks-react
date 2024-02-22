import React from 'react';
import Counter from './Counter';
import User from './User';
import ThemedButton from './ThemedButton';
import CounterWithReducer from './CounterWithReducer';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>React Hooks Demo</h1>
     <Counter/>
     <User userId="1" />
     <ThemedButton/>
     <CounterWithReducer/>
     <TextInputWithFocusButton />
    </div>
  );
}

export default App;
