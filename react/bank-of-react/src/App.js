import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import axios from 'axios';
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance: 12345.67,
      currentUser: {
        userName: 'bignast',
        memberSince: 1995
      },
      debits: [],
      credits: []
    }
  }
  _getDebits = () => {
    axios.get('http://localhost:4000/debits')
      .then((response) => {
        const debits = response.data;
        this.setState({ debits });
      });
  };
  _getCredits = () => {
   axios.get('http://localhost:4000/credits')
     .then((response) => {
       const credits = response.data;
       this.setState({ credits });
     });
 };

 _calculateAccountBalance = () => {
   const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
     return totalCredits + credit.amount;
   }, 0)

   const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
     return totalDebits + debit.amount;
   }, 0)

   return totalCredits - totalDebits;
 }

 componentWillMount() {
   this._getDebits();
   this._getCredits();
 }

  render() {
    const accountBalance = this._calculateAccountBalance();

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () =>(
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}  />
    )
    const DebitsPageComponent = (
      <DebitsPage debits={this.state.debits} /> );
    )


    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitsPageComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;
