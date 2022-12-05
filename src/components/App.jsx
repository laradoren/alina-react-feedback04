import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statictics } from './Statistics/Statictics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, bad: 0, neutral: 0 });

  const countTotalFeedback = () => {
    return feedbacks.bad + feedbacks.good + feedbacks.neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbacks.good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = opt => {
    setFeedbacks(opt);
  };

  return (
    <div>
      <FeedbackOptions options={feedbacks} onLeaveFeedback={onLeaveFeedback} />
      {countTotalFeedback() ? (
        <Statictics
          good={feedbacks.good}
          bad={feedbacks.bad}
          neutral={feedbacks.neutral}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
