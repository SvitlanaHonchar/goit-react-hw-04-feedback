import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledUl, StyledLi } from './Statistics,styled';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const totalFeedback = total();
    const positiveFeedbackPercentage = positivePercentage().toFixed(0);
    return (
      <div>
        <StyledUl>
          <StyledLi>Good: {good}</StyledLi>
          <StyledLi>Neutral: {neutral}</StyledLi>
          <StyledLi>Bad: {bad}</StyledLi>
          <StyledLi>Total: {totalFeedback}</StyledLi>
          <StyledLi>
            Positive Feedback:{' '}
            {totalFeedback > 0 ? positiveFeedbackPercentage : '0'}%
          </StyledLi>
        </StyledUl>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
