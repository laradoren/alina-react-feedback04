import React from 'react';
import css from './Statictics.module.css';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const Statictics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title={'Statistics'}>
      <div className={css.item}>Good: {good}</div>
      <div className={css.item}>Bad: {bad}</div>
      <div className={css.item}>Neutral: {neutral}</div>
      <div className={css.item}>Total: {total}</div>
      <div className={css.item}>Positive percentage: {positivePercentage}%</div>
    </Section>
  );
};

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
