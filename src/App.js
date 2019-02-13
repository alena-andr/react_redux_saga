import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CompaniesList from './components/CompaniesList';
import StationsList from './components/StationsList';
import { getData } from './actions/requestActions';

class App extends PureComponent {
  componentDidMount() {
    this.props.getData('companies');
  }

  render() {
    const { globalLoading }  = this.props;

    return (
      <div className="app-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="row">
            {globalLoading ?
              (<div className="d-flex w-100 align-items-center justify-content-center">
                <div className="loader"/>
              </div>) : (
              <Fragment>
                <div className="col-6 h-100 py-4">
                  <CompaniesList />
                </div>
                <div className="col-6 h-100 py-4">
                  <StationsList />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    globalLoading: state.options.globalLoading,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData: (name, id) => {
      dispatch(getData(name, id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
