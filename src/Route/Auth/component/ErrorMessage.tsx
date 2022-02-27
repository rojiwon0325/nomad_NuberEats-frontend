import React from "react";

const ErrorMessage: React.FC<{ message: string | undefined | null }> = ({
  message,
}) =>
  message ? (
    <span className="font-normal text-sm text-red-500">{message}</span>
  ) : null;

export default ErrorMessage;
