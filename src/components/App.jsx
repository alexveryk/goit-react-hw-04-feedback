import React, { useState } from 'react';
import Section from './Feedback/Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    console.log('Button:', event.target.textContent);

    const button = event.target.textContent;
    switch (button) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      const percent = 0;
      return percent;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <Section
      title={'Please leave feedback'}
      onLeaveFeedback={onLeaveFeedback}
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback()}
      positivePercentage={countPositiveFeedbackPercentage()}
    ></Section>
  );
};

export default App;
