import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const aboutClass = location.pathname === '/' ? 'active' : '';
    const devicesClass = location.pathname.match(/^\/devices/) ? 'active' : '';
    const navClass = collapsed ? 'collapse' : '';

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className={`navbar-collapse ${navClass}`} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={aboutClass}>
                <IndexLink to="/about-us" onClick={this.toggleCollapse.bind(this)}>About Us</IndexLink>
              </li>
              <li className={devicesClass}>
                <Link to="devices" onClick={this.toggleCollapse.bind(this)}>Devices</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
