import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { getData } from '../actions/requestActions';
import { setSelectedCompanyIdAndName } from '../actions/companiesActions';

const STATIC_CLASSES = 'list-group-item list-group-item-action cursor-pointer';

class CompaniesList extends PureComponent {
  // componentDidMount() {
  //   this.props.getData('companies');
  // }

  setCurrentBikesForCompany = (id, name) => {
    this.props.getData('stations', id);
    this.props.setSelectedCompanyIdAndName(id, name);
  };

  render() {
    const { companies, selectedCompanyId, selectedCompanyName, loading, errors } = this.props;
    return (
      <Fragment>
        { loading.companies ? null : (
        <Fragment>
          <div className="mb-3">
            <h3>Companies</h3>
            <span><strong>Selected company name:</strong> {selectedCompanyName}</span>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              {companies.map(company => {
                const { id, name, country, city } = company;
                const fullNameCompany = `${name}, ${country}, ${city}`;
                return  (
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
        )}
        { errors.companiesRequestError && <div className="text-danger">{errors.companiesRequestError}</div> }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.requests.companies,
    selectedCompanyId: state.companies.selectedCompanyId,
    selectedCompanyName: state.companies.selectedCompanyName,
    loading: state.options.loading,
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