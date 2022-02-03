import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card";
import {store} from "./store/store";
import { Provider } from "react-redux";



function App() {
  return (
      <React.StrictMode>
    <div className="App">
        <Provider store={store}>

        <Card/>
        </Provider>
    </div>
      </React.StrictMode>
  );
}

export default App;
