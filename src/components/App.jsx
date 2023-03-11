import React, { Component } from 'react';
// import Statistics from './Feedback/Statistics';
// import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    console.dir(e.target.textContent);
    this.setState(prevState => {
      if (e.target.textContent === 'Good') {
        return { good: prevState.good + 1 };
      } else if (e.target.textContent === 'Neutral') {
        return { neutral: prevState.neutral + 1 };
      } else if (e.target.textContent === 'Bad') {
        return { bad: prevState.bad + 1 };
      }
      return;
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const total = this.countTotalFeedback();
    if (!total) {
      const percent = 0;
      return percent;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <Section
        title={'Please leave feedback'}
        onLeaveFeedback={this.onLeaveFeedback}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      ></Section>
    );
  }
}

export default App;
