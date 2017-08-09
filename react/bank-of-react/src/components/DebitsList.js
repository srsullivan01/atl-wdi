import React, {Component} from 'react';
import Debit from './Debit';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const DebitsList = (props) => {

     const debitComponents = this.props.debit.map((debits, index) => {
       return <Debit
          description={this.props.debit.description}
          amount={this.props.debit.amount}
          date={this.props.debit.date}
          key={index}
          index={index}/>
     });


     return(
       <div>
         <Link to ="/"> Home </Link>
         <AccountBalance AccountBalance={props.accountBalance} />
         <h1>Debits</h1>
         {debitComponents}
       </div>
     );
   };

export default DebitsList;
