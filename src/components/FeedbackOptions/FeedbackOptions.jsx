import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Please leave feedback'}>
      <button
        className={css.button}
        type="submit"
        onClick={() => onLeaveFeedback({ ...options, good: options.good + 1 })}
      >
        Good
      </button>
      <button
        className={css.button}
        type="submit"
        onClick={() => onLeaveFeedback({ ...options, bad: options.bad + 1 })}
      >
        Bad
      </button>
      <button
        className={css.button}
        type="submit"
        onClick={() =>
          onLeaveFeedback({ ...options, neutral: options.neutral + 1 })
        }
      >
        Neutral
      </button>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func.isRequired,
};
