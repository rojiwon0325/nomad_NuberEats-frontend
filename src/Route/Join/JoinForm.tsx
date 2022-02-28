import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATEACCOUNT_MUTATION } from "Apollo/Query/user";
import { ErrorMessage } from "Component";
import { useForm } from "react-hook-form";
import { UserRole } from "Igql/globalTypes";
import { createAccount, createAccountVariables } from "Igql/createAccount";
import { useNavigate } from "react-router-dom";

interface IForm {
  email: string;
  username: string;
  password: string;
  role: UserRole;
  result?: string;
}

const JoinForm = () => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
    clearErrors,
    setError,
    watch,
    setFocus,
  } = useForm<IForm>({
    mode: "onChange",
    defaultValues: { role: UserRole.Client },
  });

  const emailRegister = register("email", { required: "이메일을 입력하세요." });
  const usernameRegister = register("username", {
    required: "이름을 입력하세요.",
  });
  const passwordRegister = register("password", {
    required: "비밀번호를 입력하세요.",
  });

  const [loginMutation, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATEACCOUNT_MUTATION, {
    onCompleted: ({ createAccount: { ok, error } }) => {
      if (ok) {
        const { email, password } = getValues();
        navigate("/login", { state: { email, password } });
      } else {
        setError("result", { message: error ?? undefined });
      }
    },
    onError: () => setValue("result", "서버에 문제가 발생했습니다."),
  });

  const onSubmit = handleSubmit(
    ({ email, username, password, role }) =>
      loading ||
      loginMutation({
        variables: { user: { email, username, password, role } },
      })
  );

  useEffect(() => {}, [watch("role")]);

  return (
    <form
      onSubmit={onSubmit}
      className="w-full mb-5 flex flex-col items-center relative"
    >
      <h1 className="text-2xl m-0 font-normal">회원가입</h1>
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
        onKeyUp={({ key }) => (key === "Enter" ? setFocus("username") : null)}
      />
      <input
        {...usernameRegister}
        onChange={(e) => {
          clearErrors();
          usernameRegister.onChange(e);
        }}
        placeholder={usernameRegister.name}
        className="auth_input"
        onKeyUp={({ key }) => (key === "Enter" ? setFocus("password") : null)}
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
      <div className="w-full flex flex-row">
        <button
          type="button"
          className={`auth_btn ${
            getValues("role") !== UserRole.Client ? "btn_disabled" : ""
          } transition-colors`}
          onClick={() => setValue("role", UserRole.Client)}
        >
          일반
        </button>
        <button
          type="button"
          className={`auth_btn ${
            getValues("role") !== UserRole.Owner ? "btn_disabled" : ""
          } transition-colors`}
          onClick={() => setValue("role", UserRole.Owner)}
        >
          사업자
        </button>
        <button
          type="button"
          className={`auth_btn ${
            getValues("role") !== UserRole.Rider ? "btn_disabled" : ""
          } transition-colors`}
          onClick={() => setValue("role", UserRole.Rider)}
        >
          라이더
        </button>
      </div>
      <div className="h-4" />
      <button
        type="submit"
        className={`auth_btn ${isValid ? "" : "btn_disabled"}`}
        disabled={!isValid || loading}
      >
        회원가입
      </button>
      <ErrorMessage
        message={
          errors.email?.message ??
          errors.username?.message ??
          errors.password?.message ??
          errors.role?.message ??
          errors.result?.message
        }
      />
    </form>
  );
};

export default JoinForm;
