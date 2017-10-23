import React from 'react';

export default class About extends React.Component {
  render() {
    console.log('About');
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
              <h1>CasaIQ - A Smart Home Solution Custom-built for Apartments, Condos, and Multifamily Real Estate.</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
