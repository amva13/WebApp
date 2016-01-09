import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class BallotIndex extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render () {
    return (
      <div className="ballot">

        { this.props.children }

      </div>
    );
  }
};
