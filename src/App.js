import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CompaniesList from './components/CompaniesList';
import BikesList from './components/BikesList';


class App extends PureComponent {
  render() {
    return (
      <div className="app-wrapper">
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <CompaniesList/>
            </div>
            <div className="col-6">
              <BikesList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({...state});
export default connect(mapStateToProps)(App);
