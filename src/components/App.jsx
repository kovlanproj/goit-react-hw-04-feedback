import React, { useState, useMemo } from 'react';
import { Statistics } from './Feedback';
import { FeedbackOptions } from './Feedback';
import { Section } from './Feedback';
import { Notification } from './Feedback';
import { Container } from './App.styled.js';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedbacks = () => {
    const total = good + neutral + bad;
    return total;
  };

  const totalFeedbacks = useMemo(countTotalFeedbacks, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedbacks) * 100);
  };

  const positiveFeedbackPercentage = useMemo(countPositiveFeedbackPercentage, [
    good,
    totalFeedbacks,
  ]);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedbacks === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};
