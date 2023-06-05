import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import { Component } from 'react';
import { Container } from './App.styled';

const ratings = [
  { id: 1, type: 'Good' },
  { id: 2, type: 'Neutral' },
  { id: 3, type: 'Bad' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item));
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  onLeaveFeedback = e => {
    const type = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
    } = this;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={ratings}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}

export default App;
