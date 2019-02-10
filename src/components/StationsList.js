import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/requestActions';

class StationsList extends PureComponent {
  render() {
    const { stations } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {
          stations.map(station => {
              const { name } = station;
              return  (<li className="list-group-item" key={ name }>{ name }</li>);
            })
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    stations: state.requests.stations,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData: name => {
      dispatch(getData(name));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
