import React, from 'react';

const DebitsPage = () => {
  var self=this;
  return(
    <div>
      <h1>Debits</h1>
      <DebitsList debits={props.debits}/>
    </div>
  );
};

export default DebitsPage;
