import { AuthLayout } from "Component";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import JoinForm from "./JoinForm";

const Join: React.FC = () => {
  return (
    <AuthLayout>
      <Helmet>
        <title>Nuber | 회원가입</title>
      </Helmet>
      <JoinForm />
      <div className="w-full p-5 flex-center">
        <span className="mr-2">회원이신가요?</span>
        <Link to="/login" className="font-medium hover:underline">
          로그인
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Join;
