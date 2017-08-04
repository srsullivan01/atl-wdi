import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
           <div idName="locations">
             <div className="locations">
             <div classname="location">
          <p>{this.props.data.name}</p>
          <strong>Address</strong>
          <p>{this.props.data.address}</p>
          <strong>Phone</strong>
          <p>{this.props.data.phone}</p>
        </div>
      </div>
      </div>
        );
    }
}
export default Location;
