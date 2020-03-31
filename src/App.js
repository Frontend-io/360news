import React from 'react';
import { Provider } from "react-redux"
import './App.css';
import './index.css'
import { RouterMain } from './container/router/router';
import { store } from './container/Redux/Store/store';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Logger from './components/portal/modal/logger';


function App() {

  return (
    <Provider store={store}>
        <div className="App">
          <Header />
            <div className="appWrapper">
                <RouterMain />
            </div>
          <Footer />
          <Logger />
        </div>
    </Provider>
  );
}

export default App;
