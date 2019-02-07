import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });
export default connect(mapStateToProps)(App);
