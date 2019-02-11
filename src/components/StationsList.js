import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/requestActions';
import { toggleLikedStation } from '../actions/stationsActions';

class StationsList extends PureComponent {
  handleClickOnStation(name) {
    this.props.toggleLikedStation(name);
  };

  render() {
    const { stations, likedStations } = this.props;
    const numberOfStations = stations.length;
    return (
      <Fragment>
        <h3>Stations</h3>
        <span><strong>Total number of stations:</strong> { numberOfStations }</span>
        <ul className="list-group list-group-flush">
          {
            stations.map(station => {
              const { name } = station;
              return (
                <li
                  id={ name }
                  className={`list-group-item ${ likedStations.includes(name) ? 'favorite-station' : '' }`}
                  key={ name }
                  onClick={this.handleClickOnStation.bind(this, name)}>
                  <div className="d-flex justify-content-between">
                    <span>{ name }</span>
                    <span>&#x2661;</span>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stations: state.requests.stations,
    likedStations: state.stations.likedStations,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData: name => {
      dispatch(getData(name));
    },
    toggleLikedStation: name => {
      dispatch(toggleLikedStation(name));
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
