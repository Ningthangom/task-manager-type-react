import React from 'react';
import logo from './logo.svg';
import './App.css';

import InputField from './components/InputField'

const  App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading"> Task Mananger </span>
      <InputField />
    </div>
  );
}

export default App;
