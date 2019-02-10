import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CompaniesList from './components/CompaniesList';
import StationsList from './components/StationsList';

class App extends PureComponent {
  render() {
    return (
      <div className="app-wrapper">
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 py-3">
              <h3>Companies</h3>
              <CompaniesList/>
            </div>
            <div className="col-6 py-3">
              <h3>Stations</h3>
              <StationsList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state});
export default connect(mapStateToProps)(App);
