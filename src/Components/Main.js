import React, { useState } from 'react';
import { Container, Box, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './Style.css'; 


// Store Steps in Array:
const steps = ['Personal Information', 'Address Information', 'Confirmation'];

const Main = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
 
// handlenext for navigate move to next:
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
//  handleback for navigate back:
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

// handle submit for submission and after submission move on step1:
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log("Submitted", formData);
    alert("Form submitted successfully!");
    setFormData({});
    setActiveStep(0);
    localStorage.removeItem("formData");
  };
//  switch case for every steps with form filing data:
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={handleNext}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            prevStep={handleBack}
            nextStep={handleNext}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            prevStep={handleBack}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" className="stepper-container">
      {/* /using typography for heading name */}
      <Typography variant="h4" align="center" gutterBottom className="Multi">
        Multi-Step Form
      </Typography>
    {/* using map method for render steps on page */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className={activeStep > index ? 'completedStep' : ''}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="stepper-content">{getStepContent(activeStep)}</Box>
    </Container>
  );
};

export default Main;
