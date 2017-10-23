import React from 'react';

export default class Devices extends React.Component {
  render() {
    const containerStyle = {
      marginTop: '60px',
    };
    return (
      <div>
        <h1>Devices</h1>
        <div className="row well text-center">
          <select>
            <option value="apt-15-lock">Apt 15 Lock</option>
            <option value="apt-25-thermostat">Apt 25 Thermostat</option>
            <option value="apt-12-unlocked">Apt 12 Unlocked</option>
            <option value="apt-35-random">Apt 35 Random</option>
          </select>
        </div>
      </div>
    );
  }
}
