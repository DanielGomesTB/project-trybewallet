import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { removeExpense } from '../redux/actions';

class Table extends React.Component {
  handleClick = (event) => {
    const { name } = event.target;
    const { removeUserDispach, expenses } = this.props;
    removeUserDispach(name);
    console.log(expenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={ index }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(
                  Number(expense.value)
                  * Number(expense.exchangeRates[expense.currency].ask)
                ).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                {/* <button type="button">Editar</button> */}
                <button
                  key={ expense.id }
                  type="button"
                  data-testid="delete-btn"
                  onClick={ this.handleClick }
                  name={ expense.id }
                >
                  Excluir

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: Proptypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeUserDispach: (name) => dispatch(removeExpense(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
