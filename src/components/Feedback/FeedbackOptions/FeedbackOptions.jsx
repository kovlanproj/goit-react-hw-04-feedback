import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './FeedbackOptions.styled.js';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
