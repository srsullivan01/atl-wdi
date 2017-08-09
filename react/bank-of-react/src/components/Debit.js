import React, {Component} from 'react';
import axios from 'axios';


class Debit extends Component{
  render() {


    return(
        <div>
          <h2>description: {props.description}</h2>
          <h2>amount: {props.amount}</h2>
          <h2>date: {props.date}</h2>
        </div>
    );
  };
}


export default Debit;
