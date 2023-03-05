import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
