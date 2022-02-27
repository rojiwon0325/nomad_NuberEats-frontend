import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ErrorMessage, Input } from "./component";

interface IForm {
  email: string;
  password: string;
  result?: string;
}

export default function Login() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
    clearErrors,
    setError,
  } = useForm<IForm>({ mode: "onChange" });
  const onSubmit = handleSubmit((data) => console.log(data));

  const emailRegister = register("email", { required: "이메일을 입력하세요." });
  const passwordRegister = register("password", {
    required: "비밀번호를 입력하세요.",
  });

  return (
    <>
      <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
        <h1 className="text-2xl m-0 font-normal">회원정보를 입력하세요.</h1>
        <div className="h-4" />
        <Input registerReturn={emailRegister} clearErrors={clearErrors} />
        <Input registerReturn={passwordRegister} clearErrors={clearErrors} />
        <div className="h-4" />
        <button
          type="submit"
          className={`auth_btn ${isValid || "auth_btn_disabled"}`}
          onClick={() => {
            setValue("email", "");
            setValue("password", "");
            setError("result", { message: "회원 정보가 일치하지 않습니다." });
          }}
          disabled={!isValid}
        >
          로그인
        </button>
        <ErrorMessage
          message={
            errors.email?.message ??
            errors.password?.message ??
            errors.result?.message
          }
        />
      </form>
      <div className="w-full p-5 flex items-center justify-center">
        <span className="mr-2">회원이 아니신가요?</span>
        <Link to="/Join" className="font-medium hover:underline">
          회원 가입
        </Link>
      </div>
    </>
  );
}
