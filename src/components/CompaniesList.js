import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/requestActions';
import { setActiveCompanyId } from '../actions/optionActions';

class CompaniesList extends PureComponent {
  componentDidMount() {
    this.props.getData('companies');
  }

  setCurrentBikesForCompany = e => {
    const { id } = e.target;
    this.props.getData('stations', id);
    this.props.setActiveCompanyId(id);
  };

  render() {
    const { companies, activeCompanyId } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {
          companies.map(company => {
            const { id, name, country, city } = company;
            return  (
              <li
                id={ id }
                className={`list-group-item list-group-item-action ${ activeCompanyId === id ? 'active': '' }`}
                key={ id }
                onClick={this.setCurrentBikesForCompany}
              >
                {`${ name }, ${ country }, ${ city }`}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.requests.companies,
    activeCompanyId: state.options.activeCompanyId,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData: (name, id) => {
      dispatch(getData(name, id));
    },
    setActiveCompanyId: id => {
      dispatch(setActiveCompanyId(id));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);