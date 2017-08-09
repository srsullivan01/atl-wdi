import React, {Component} from 'react';
import axios from 'axios';


class Debit extends Component{
  render() {
    const debitDescription = this.props.description;
    const debitAmount = this.props.amount;
    const debitDate = this.props.date;

    return(
        <div>
          <h2>description: {debitDescription}</h2>
          <h2>amount: {debitAmount}</h2>
          <h2>date: {debitDate}</h2>
        </div>
    );
  };
}


export default Debit;
