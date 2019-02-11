import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/requestActions';
import { setSelectedCompanyIdAndName } from '../actions/companiesActions';

class CompaniesList extends PureComponent {
  componentDidMount() {
    this.props.getData('companies');
  }

  setCurrentBikesForCompany(id, name) {
    this.props.getData('stations', id);
    this.props.setSelectedCompanyIdAndName(id, name);
  };

  render() {
    const { companies, selectedCompanyId, selectedCompanyName } = this.props;
    return (
      <Fragment>
        <h3>Companies</h3>
        <span><strong>Selected company name:</strong> { selectedCompanyName }</span>
        <ul className="list-group list-group-flush">
          {
            companies.map(company => {
              const { id, name, country, city } = company;
              return  (
                <li
                  id={ id }
                  className={`list-group-item list-group-item-action ${ selectedCompanyId === id ? 'active': '' }`}
                  key={ id }
                  onClick={this.setCurrentBikesForCompany.bind(this, id, name)}
                >
                  {`${ name }, ${ country }, ${ city }`}
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
    companies: state.requests.companies,
    selectedCompanyId: state.companies.selectedCompanyId,
    selectedCompanyName: state.companies.selectedCompanyName,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData: (name, id) => {
      dispatch(getData(name, id));
    },
    setSelectedCompanyIdAndName: id => {
      dispatch(setSelectedCompanyIdAndName(id));
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);