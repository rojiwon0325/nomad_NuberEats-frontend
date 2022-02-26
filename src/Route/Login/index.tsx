import React from "react";
import { useForm } from "react-hook-form";

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
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-white">
      <form
        onSubmit={onSubmit}
        className="w-full p-5 flex flex-col items-center justify-start"
      >
        <h3>회원정보를 입력하세요.</h3>
        <ErrorMessage message={errors.email?.message} />
        <input
          {...emailRegister}
          onChange={(e) => {
            clearErrors();
            emailRegister.onChange(e);
          }}
          placeholder="email"
          className="auth_input"
        />
        <ErrorMessage message={errors.password?.message} />
        <input
          {...passwordRegister}
          onChange={(e) => {
            clearErrors();
            passwordRegister.onChange(e);
          }}
          placeholder="password"
          className="auth_input"
        />
        <div className="pt-1" />
        <ErrorMessage message={errors.result?.message} />
        <button
          type="submit"
          className={isValid ? "auth_btn" : "auth_btn auth_btn_disabled"}
          onClick={() => {
            setValue("email", "");
            setValue("password", "");
            setError("result", { message: "회원 정보가 일치하지 않습니다." });
          }}
          disabled={!isValid}
        >
          로그인
        </button>
      </form>
      <div className="w-full"></div>
    </div>
  );
}

const ErrorMessage = ({ message }: { message: string | null | undefined }) =>
  message ? (
    <span className="font-normal text-sm text-red-500">{message}</span>
  ) : null;
