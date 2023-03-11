import FeedbackBtn from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackBtn type="button" onClick={onLeaveFeedback}>
        Good
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={onLeaveFeedback}>
        Neutral
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={onLeaveFeedback}>
        Bad
      </FeedbackBtn>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
