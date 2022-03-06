import { AuthLayout } from "Component";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <Helmet>
        <title>Nuber | 로그인</title>
      </Helmet>
      <LoginForm />
      <div className="w-full p-5 flex-center">
        <span className="mr-2">회원이 아니신가요?</span>
        <Link to="/Join" className="font-medium hover:underline">
          회원 가입
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
