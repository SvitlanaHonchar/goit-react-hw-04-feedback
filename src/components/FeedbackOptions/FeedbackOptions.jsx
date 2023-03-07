import PropTypes from 'prop-types';
import { StyledLi, StyledUl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <StyledUl>
        {options.map((option, idx) => {
          return (
            <StyledLi key={idx}>
              <button type="button" onClick={() => onLeaveFeedback(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            </StyledLi>
          );
        })}
      </StyledUl>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
