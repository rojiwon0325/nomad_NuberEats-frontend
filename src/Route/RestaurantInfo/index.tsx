import { useMutation } from "@apollo/client";
import { uploadCoverImage } from "Apollo/apollo";
import { CREATEDISH_MUTATION } from "Apollo/Query/restaurant";
import { ErrorMessage } from "Component";
import { createDish, createDishVariables } from "Igql/createDish";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface IForm {
  data: { name: string; description: string; price: number };
  result?: string;
  file: FileList;
}

const MenuRegister = () => {
  const { id: restaurantId } = useParams();
  const [loading, setLoad] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
    clearErrors,
    setError,
  } = useForm<IForm>({
    mode: "onChange",
  });

  const nameRegister = register("data.name", {
    required: "음식 이름이 필요합니다.",
  });
  const descriptionsRegister = register("data.description");
  const priceRegister = register("data.price", {
    required: "음식 가격이 필요합니다.",
    min: { value: 0, message: "0 이상의 값이 필요합니다." },
  });
  const fileRegister = register("file", {
    required: "음식 이미지가 필요합니다.",
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal_background">
      <div className="modal_component">
        <form
          className="modal_form"
          onSubmit={handleSubmit((value) => console.log(value))}
        >
          <h1 className="text-2xl py-3 font-normal text-white">
            새로운 메뉴 추가
          </h1>
          <input
            {...nameRegister}
            onChange={(e) => {
              clearErrors();
              nameRegister.onChange(e);
            }}
            placeholder={"음식 이름"}
            className="auth_input"
          />
          <textarea
            {...descriptionsRegister}
            onChange={(e) => {
              clearErrors();
              descriptionsRegister.onChange(e);
            }}
            placeholder={"메뉴 설명"}
            className="auth_input"
          />
          <input
            {...priceRegister}
            onChange={(e) => {
              clearErrors();
              priceRegister.onChange(e);
            }}
            placeholder={"기본 가격"}
            className="auth_input"
            type="number"
          />
          <input
            onChange={(e) => {
              clearErrors();
              fileRegister.onChange(e);
            }}
            placeholder={"메뉴 이미지"}
            className="auth_input"
            accept="image/*"
            type="file"
          />
          <div className="h-4" />
          <button
            type="submit"
            className={`py-3 px-5 my-1 w-full rounded-lg bg-green-400 font-medium text-lg text-white ${
              isValid && !loading ? "" : "opacity-80 disabled"
            }`}
            disabled={!isValid || loading}
          >
            등록
          </button>
          <ErrorMessage
            message={
              errors.result?.message ??
              errors.data?.name?.message ??
              errors.data?.description?.message ??
              errors.data?.price?.message
            }
          />
        </form>
      </div>
      <button
        onClick={() => navigate(`/restaurant/${restaurantId}`)}
        className="h-6 w-6 absolute top-0 right-0"
      >
        ❌
      </button>
    </div>
  );
};

export default MenuRegister;
