import React from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "Apollo/Query/user";
import { ErrorMessage } from "Component";
import { login, loginVariables } from "Igql/login";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { isLogin } from "Apollo/apollo";
import { setCookie } from "Global/cookie";

interface IForm {
  email: string;
  password: string;
  result?: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email: string; password: string } | null;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
    clearErrors,
    setError,
  } = useForm<IForm>({ mode: "onChange", defaultValues: state ?? undefined });

  const emailRegister = register("email", { required: "이메일을 입력하세요." });
  const passwordRegister = register("password", {
    required: "비밀번호를 입력하세요.",
  });

  const [loginMutation, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted: ({ login: { ok, error, token } }) => {
        if (ok && token !== null) {
          setCookie("access_token", token, 30);
          isLogin(true);
          navigate("/");
        } else {
          setError("result", { message: error ?? undefined });
        }
      },
      onError: () => setValue("result", "서버에 문제가 발생했습니다."),
    }
  );

  const onSubmit = handleSubmit(
    ({ email, password }) =>
      loading ||
      loginMutation({
        variables: { user: { email, password } },
      })
  );

  return (
    <form
      onSubmit={onSubmit}
      className="w-full mb-5 flex flex-col items-center relative"
    >
      <h1 className="text-2xl m-0 font-normal">회원정보를 입력하세요.</h1>
      <div className="h-4" />
      <input
        {...emailRegister}
        onChange={(e) => {
          clearErrors();
          emailRegister.onChange(e);
        }}
        placeholder={emailRegister.name}
        className="auth_input"
        type="email"
      />
      <input
        {...passwordRegister}
        onChange={(e) => {
          clearErrors();
          passwordRegister.onChange(e);
        }}
        placeholder={passwordRegister.name}
        className="auth_input"
        type="password"
      />
      <div className="h-4" />
      <button
        type="submit"
        className={`auth_btn ${isValid ? "" : "btn_disabled"}`}
        disabled={!isValid || loading}
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
  );
};

export default LoginForm;
