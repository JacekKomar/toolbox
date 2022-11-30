import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/calculator">Kalkulatorek</Link>
        <Link to="/calendar">Kalendarzyk</Link>
      </div>
    );
  }
}
