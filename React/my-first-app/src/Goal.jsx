import React from 'react';

const Goal = (props) => {
  const isGoal = props.isGoal;
  console.log(isGoal);

  return <div>{isGoal ? <h2>Yes</h2> : <h2>No</h2>}</div>;
};

export default Goal;
