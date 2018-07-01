import React, { Component } from 'react';
import RouterIndex from './router/index';

import MainFooter from './view/main-footer';
import MainHeader from './view/main-header';

import './view/index.css';

class App extends Component {
  render() {
    return (
      // <RouterIndex />
      <div className='pageWrap'>
        <MainHeader />
        <div className="main">
          <RouterIndex />
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default App;
