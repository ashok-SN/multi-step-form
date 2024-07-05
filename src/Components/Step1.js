import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";



// Store initial values:
const Step1 = ({ formData, setFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      name: formData.name || "",
      email: formData.email || "",
      phone: formData.phone || "",
    },

    // for validation and form data submission i am using formik and yup:
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Enter valid Email")
        .required("This field is required"),
      phone: Yup.string()
        .required("This field is required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Mobile number is not valid"
        )
        .length(10, "Mobile No. must be 10 digits"),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    },
  });

  return ( 
<>

{/* This style for responsive */}
    <Box sx={{
          width: {
            xs: "300px",
            sm:"650px",
            md: "700px",
            lg: "800px",
            xl: "850px",
          },
          height: "auto",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 0 20px 2px #0055ff",
          textAlign: "center",
          marginTop: "50px",
          marginRight:"60px",
          marginBottom: "20px",
          backgroundColor: "white",          
        }}>

          {/* TextField from Materialui */}
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="phone"
        name="phone"
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

      {/* Button for next on step 1 */}
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
    </Box>
    </>
  );
};

export default Step1;
