import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedbacks = () => {
    const values = Object.values(this.state);

    let total = 0;

    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    // console.log(typeof this.state.good);
    return Math.round((this.state.good / this.countTotalFeedbacks()) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button
          type="button"
          name="good"
          onClick={() => this.addFeedback('good')}
        >
          Good
        </button>
        <button
          type="button"
          name="good"
          onClick={() => this.addFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          type="button"
          name="good"
          onClick={() => this.addFeedback('bad')}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total feedbacks: {this.countTotalFeedbacks()}</p>
        <p>PositiveFeedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
