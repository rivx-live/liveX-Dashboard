"use client";

import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface CustomInputProps {
  name: string;
  label: string;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, label, type = "text" }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      label={label}
      type={type}
      fullWidth
      error={!!meta.error && meta.touched}
      helperText={meta.touched && meta.error}
      variant="outlined"
      sx={{ mb: 2 }}
    />
  );
};

export default CustomInput;
