import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <LoginForm />
      <div className="w-full p-5 flex items-center justify-center">
        <span className="mr-2">회원이 아니신가요?</span>
        <Link to="/Join" className="font-medium hover:underline">
          회원 가입
        </Link>
      </div>
    </>
  );
};

export default Login;
