import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h2 data-testid="email-field">
          {`Olá ${email}`}
        </h2>
        {/* <h3 data-testid="total-field">{`Despesas: ${account}`}</h3>
        <h3 data-testid="header-currency-field">{`${coin}`}</h3> */}
        <h3 data-testid="total-field">Despesas: 0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

Header.propTypes = {
  email: Proptypes.string.isRequired,
  // account: Proptypes.number.isRequired,
  // coin: Proptypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  // account: state.user.account,
  // coin: state.user.coin,
});

export default connect(mapStateToProps)(Header);
