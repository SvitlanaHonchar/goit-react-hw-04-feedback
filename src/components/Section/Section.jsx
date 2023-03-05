import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
