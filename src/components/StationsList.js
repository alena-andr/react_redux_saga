import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { toggleLikedStation } from '../actions/stationsActions';
import cn from 'classnames';

const STATIC_CLASSES = 'list-group-item list-group-item-action cursor-pointer';

class StationsList extends PureComponent {
  handleClickOnStation(name) {
    this.props.toggleLikedStation(name);
  };

  render() {
    const { stations, likedStations, loading, errors } = this.props;
    const numberOfStations = stations.length;

    return (
      <Fragment>
        { loading.companies || loading.stations ? <div className="loader"></div> : (
        <Fragment>
          <div className="mb-3">
            <h3>Stations</h3>
            <span><strong>Total number of stations:</strong>{numberOfStations}</span>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              {stations.map(station => {
                const { name } = station;
                const flagLikedStation = likedStations.includes(name);
                return (
                  <li
                    id={name}
                    className={cn(STATIC_CLASSES, { 'text-primary': flagLikedStation === true })}
                    key={name}
                    onClick={() => this.handleClickOnStation(name)}>
                    <div className="d-flex justify-content-between">
                      <span>{name}</span>
                      <span className={`${flagLikedStation ? 'd-inline' : 'd-none'}`}>&#x2661;</span>
                    </div>
                  </li>
                );
              })
              }
            </ul>
          </div>
        </Fragment>
        )}
        { errors.stationsRequestError && <div className="text-danger">{errors.stationsRequestError}</div> }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stations: state.requests.stations,
    likedStations: state.stations.likedStations,
    loading: state.options.loading,
    errors: state.options.errors,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    toggleLikedStation: name => {
      dispatch(toggleLikedStation(name));
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
