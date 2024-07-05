import React from "react";
import { useFormik } from "formik";
import "./Style.css";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  Container,
} from "@mui/material";

// Store initial values:

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      address1: formData.address1 || "",
      address2: formData.address2 || "",
      city: formData.city || "",
      state: formData.state || "",
      zip: formData.zip || "",
    },

    // for validation and form data submission i am using formik and yup:
    validationSchema: Yup.object({
      address1: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zip: Yup.string()
        .required("This field is required")
        .matches(/^[0-9]+$/, "Pincode is not valid")
        .length(6, "Pin Code. must be 6 digits"),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    },
  });

  // Store all states in Arrray form for using all states in states section in form
  const States = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Union Territory",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <>
     {/* This style for responsive: */}
        <Box
          sx={{
            width: {
              xs: "280px",
              sm: "600px",
              md: "750px",
              lg: "800px",
              xl: "750px",
            },
            height: "auto",
            padding: "10px",
            borderRadius: "15px",
            boxShadow: "0 0 20px 2px #0055ff",
            marginTop: "50px",
            marginLeft: "20px",
            marginRight: "30px",
            marginBottom: "20px",
            backgroundColor: "white",
          }}
        >
          <form onSubmit={formik.handleSubmit} >
            <TextField
              id="address1"
              name="address1"
              label="Address Line 1"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.address1}
              error={formik.touched.address1 && Boolean(formik.errors.address1)}
              helperText={formik.touched.address1 && formik.errors.address1}
            />
            <TextField
              id="address2"
              name="address2"
              label="Address Line 2"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.address2}
            />
            <TextField
              id="city"
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.city}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              error={formik.touched.state && Boolean(formik.errors.state)}
            >
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                label="State"
              >
                {/* Using map method to render all staets in states section by using select and menu item of material ui */}
                {States.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="zip"
              name="zip"
              label="Zip Code"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.zip}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={formik.touched.zip && formik.errors.zip}
            />
{/* on Step 2 there are Two Buttons For Back and Next: */}
            <div className="button-container">
              <Button
                className="Btn"
                onClick={prevStep}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </div>
          </form>
        </Box>
     
    </>
  );
};

export default Step2;
