import React from 'react';
import "./Style.css"
import { Button, Typography, Grid,Box } from '@mui/material';

// make variable for submit, prestep and preview all the data whic filled in form
const Step3 = ({ formData, prevStep, handleSubmit }) => {
  return (
    <> 
    {/* This Style For responsive */}
     <Box  sx={{
          width: {
            xs: "280px",
            sm: "600px",
            md: "700px",
            lg: "800px",
            xl: "750px",
          },
          height: "auto",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 0 20px 2px #0055ff",
          textAlign:'center',
          marginTop: "50px",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
        }}>

          {/* Using Grid And typography for Shwowing all the data which filled in Form */}
       <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom className="section-title">
          Personal Information
        </Typography>
        <Typography>Name: {formData.name}</Typography>
        <Typography>Email: {formData.email}</Typography>
        <Typography>Phone: {formData.phone}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className="section-title">Address Information</Typography>
        <Typography>Address Line 1: {formData.address1}</Typography>
        <Typography>Address Line 2: {formData.address2}</Typography>
        <Typography>City: {formData.city}</Typography>
        <Typography>State: {formData.state}</Typography>
        <Typography>Zip: {formData.zip}</Typography>
      </Grid>
    </Grid>
{/* On step3 There are two buttons submit form and move back to revisit your filled data */}
    <div className="button-container">
    <Button className='Btn' onClick={prevStep} variant="contained"color="secondary">
        Back
      </Button>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </div>
     </Box>
    </>
  );
};

export default Step3;
