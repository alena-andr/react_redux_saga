import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { getData } from '../actions/requestActions';
import { setSelectedCompanyIdAndName } from '../actions/companiesActions';

const STATIC_CLASSES = 'list-group-item list-group-item-action cursor-pointer';

class CompaniesList extends PureComponent {
  setCurrentBikesForCompany = (id, name) => {
    this.props.getData('stations', id);
    this.props.setSelectedCompanyIdAndName(id, name);
  };

  render() {
    const {
      companies,
      selectedCompanyId,
      selectedCompanyName,
      errors: { companiesRequestError }
    } = this.props;

    return (
      <Fragment>
        <div className="mb-5">
          <h3>Companies</h3>
          <div className="text-truncate">
            <strong>Selected company name: </strong>
            {selectedCompanyName}
          </div>
        </div>
        { companiesRequestError && <div className="text-danger border border-danger">{companiesRequestError}</div> }
        <div className="h-75 overflow-auto">
          <ul className="list-group list-group-flush">
            { companies.map(company => {
              const { id, name, country, city } = company;
              const fullNameCompany = `${name}, ${country}, ${city}`;
              return (
                <li
                  id={id}
                  className={cn(STATIC_CLASSES, { active: selectedCompanyId === id })}
                  key={id}
                  onClick={() => this.setCurrentBikesForCompany(id, fullNameCompany)}
                >
                  {fullNameCompany}
                </li>
              );
            })
            }
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.requests.companies,
    selectedCompanyId: state.companies.selectedCompanyId,
    selectedCompanyName: state.companies.selectedCompanyName,
    errors: state.options.errors,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getData: (name, id) => {
      dispatch(getData(name, id));
    },
    setSelectedCompanyIdAndName: (id, name) => {
      dispatch(setSelectedCompanyIdAndName(id, name));
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);