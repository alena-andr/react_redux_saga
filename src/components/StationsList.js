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
    const { stations, likedStations, loading, errors: { stationsRequestError } } = this.props;
    const numberOfStations = stations.length;

    return (
      <Fragment>
        {loading.stations ?
          (<div className="d-flex h-100 align-items-center justify-content-center">
            <div className="loader"/>
          </div>) : (
            <Fragment>
              <div className="mb-5">
                <h3>Stations</h3>
                <div className="text-truncate">
                  <strong>Total number of stations: </strong>
                  {numberOfStations}
                </div>
              </div>
              { stationsRequestError && <div className="text-danger border border-danger">{stationsRequestError}</div> }
              <div className="h-75 overflow-auto">
                <ul className="list-group list-group-flush">
                  {stations.map(station => {
                    const {name} = station;
                    const flagLikedStation = likedStations.includes(name);
                    return (
                      <li
                        id={name}
                        className={cn(STATIC_CLASSES, {'text-primary': flagLikedStation === true})}
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
