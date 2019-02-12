import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <header className="header d-fixed fixed-top bg-primary">
        <h1>CityBikes</h1>
      </header>
    );
  }
}

export default Header;