import React, {Component} from 'react';
import Debit from './Debit';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const DebitsList = (props) => {

     const debitComponents = props.debit.map((debits) => {
       return <Debit
          description={debit.description}
          amount={debit.amount}
          date={debit.date}
        />
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
