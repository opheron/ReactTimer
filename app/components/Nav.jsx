var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><IndexLink to="/" activeClassName="active-link">React Timer</IndexLink></li>
            <li><Link to="/stopwatch" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Stopwatch</Link></li>
            <li><Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Countdown Timer</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by Andrew Chong</li>
          </ul>
        </div>
      </div>
    );
  }
} );

module.exports = Nav;