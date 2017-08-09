import React, {Component} from 'react';
import Credit from './Credit';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const CreditsList = {props} => {

     const creditComponents = this.props.credits.map((credit) => {
       return <Credit
          description={credit.description}
          amount={credit.amount}
          date={credit.date} />
     });

     return(
       <div>
         <Link to ="/"> Home </Link>
         <AccountBalance AccountBalance={props.accountBalance} />
         <h1>Credits</h1>
         {creditComponents}
       </div>
     );
   };

export default DebitsList;
