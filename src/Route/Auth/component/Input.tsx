import React from "react";
import { UseFormClearErrors, UseFormRegisterReturn } from "react-hook-form";

interface props {
  registerReturn: UseFormRegisterReturn;
  clearErrors: UseFormClearErrors<any>;
}
export default function Input({ registerReturn, clearErrors }: props) {
  return (
    <input
      {...registerReturn}
      onChange={(e) => {
        clearErrors();
        registerReturn.onChange(e);
      }}
      placeholder={registerReturn.name}
      className="auth_input"
    />
  );
}
