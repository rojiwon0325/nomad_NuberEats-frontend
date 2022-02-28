import React from "react";
import { Link } from "react-router-dom";
import JoinForm from "./JoinForm";

const Join: React.FC = () => {
  return (
    <>
      <JoinForm />
      <div className="w-full p-5 flex items-center justify-center">
        <span className="mr-2">회원이신가요?</span>
        <Link to="/login" className="font-medium hover:underline">
          로그인
        </Link>
      </div>
    </>
  );
};

export default Join;
