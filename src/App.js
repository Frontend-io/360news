import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux"
import './App.css';
import './index.css'
import { RouterMain } from './container/router/router';
import { store } from './container/Redux/Store/store';
import Footer from './components/footer/footer';
import Header from './components/header/header';
// import axios from 'axios';

function App() {

  

  
  return (
    <Provider store={store}>
        <div className="App">
          <Header />
            <div className="appWrapper">
                <RouterMain />
            </div>
          <Footer />
        </div>
    </Provider>
  );
}

export default App;
