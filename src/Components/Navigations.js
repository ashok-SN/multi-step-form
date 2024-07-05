import React from 'react';
// this navigation tab show navigate button when should disable when should enable:
const Navigation = ({ currentStep, nextStep }) => {
  return (
    <div>
      <button disabled={currentStep === 1} onClick={() => nextStep(1)}>Step 1</button>
      <button disabled={currentStep === 2} onClick={() => nextStep(2)}>Step 2</button>
      <button disabled={currentStep === 3} onClick={() => nextStep(3)}>Step 3</button>
    </div>
  );
};

export default Navigation;
