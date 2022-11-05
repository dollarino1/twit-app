import React from "react";
import { Path, UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";
import { InputLabel, TextField } from "@mui/material";

type variants = 'outlined' | 'standard' | 'filled' | undefined

type Props<TFormValues extends FieldValues> = {
  label: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
  variant?: variants;
  type?: string;
  errorMessage?: string;
  minWidth?: string | number;
  placeholder?: string;
}

export const Input = <TFormValues extends Record<string, unknown>>({ label, register, rules, errorMessage, minWidth, ...props}: Props<TFormValues>) => (
  <>
    <InputLabel>{label}</InputLabel>
    <TextField
      sx={{minWidth: minWidth ? minWidth : '300px'}}
      error={!!errorMessage}
      helperText={errorMessage}
      {...register(label, rules)}
      {...props}
    />
  </>
);