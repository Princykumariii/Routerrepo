
import React, { useEffect, useState } from 'react';


function Result() {
  const [result, setResult] = useState(null);

  

  return (
    <div>
      <h1>Quiz Results</h1>
      {result ? (
        <div>
          <p>You answered {result.correctAnswers} out of {result.totalQuestions} correctly.</p>
          <p>Score: {result.score}%</p>
        </div>
      ) : (
        <p>Loading result...</p>
      )}
    </div>
  );
}

export default Result;
