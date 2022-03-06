import { useMutation, useQuery } from "@apollo/client";
import { FINDALLCATEGORY_QUERY } from "Apollo/Query/category";
import {
  CREATERESTAURANT_MUTATION,
  FINDALLMYRESTAURANT_QUERY,
} from "Apollo/Query/restaurant";
import { ME_QUERY } from "Apollo/Query/user";
import { ErrorMessage } from "Component";
import {
  createRestaurant,
  createRestaurantVariables,
} from "Igql/createRestaurant";
import { findAllCategory } from "Igql/findAllCategory";
import { CreateRestaurantInput, UserRole } from "Igql/globalTypes";
import { me } from "Igql/me";
import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

interface IForm extends CreateRestaurantInput {
  result: string;
}

const RestaurantRegister: React.FC = () => {
  const { data: myData } = useQuery<me>(ME_QUERY);
  if (!myData?.me || myData.me.role !== UserRole.Owner) {
    return <Navigate to="/" replace />;
  }
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
    clearErrors,
    setError,
    setFocus,
  } = useForm<IForm>({ mode: "onChange" });
  const nameRegister = register("name", {
    required: "가게 이름이 필요합니다.",
  });
  const coverImageRegister = register("coverImage", {
    required: "가게 이미지가 필요합니다.",
  });
  const addressRegister = register("address", {
    required: "가게 주소가 필요합니다.",
  });
  const categoryRegister = register("category");
  const { data } = useQuery<findAllCategory>(FINDALLCATEGORY_QUERY);
  const [createRestaurantMutation, { loading }] = useMutation<
    createRestaurant,
    createRestaurantVariables
  >(CREATERESTAURANT_MUTATION, {
    onCompleted: async ({ createRestaurant: { ok, error } }) => {
      if (ok) {
        navigate("/");
      } else {
        setError("result", { message: error ?? undefined });
      }
    },
    onError: () => setValue("result", "서버에 문제가 발생했습니다."),
    update: (cache, result) => {
      const data = result.data?.createRestaurant.result;
      if (data) {
        cache.modify({
          id: "ROOT_QUERY",
          fields: {
            findAllMyRestaurant: (exi) => {
              return {
                ...exi,
                totalResults: exi.totalResults + 1,
                result: [{ __ref: `Restaurant:${data.id}` }, ...exi.result],
              };
            },
          },
        });
      }
    },
  });
  const onSubmit = handleSubmit(
    ({ name, coverImage, category, address }) =>
      loading ||
      createRestaurantMutation({
        variables: { restaurant: { name, coverImage, category, address } },
      })
  );
  return (
    <div className="h-full w-full sm:max-w-md mt-10 flex justify-center rounded-2xl bg-black">
      <form
        onSubmit={onSubmit}
        className="h-fit w-full mt-2 mb-5 px-5 flex flex-col items-center sm:max-w-md relative"
      >
        <h1 className="text-2xl m-0 font-normal text-white">가게 정보 입력</h1>
        <div className="h-4" />
        <input
          {...nameRegister}
          onChange={(e) => {
            clearErrors();
            nameRegister.onChange(e);
          }}
          placeholder={"가게 이름"}
          className="auth_input"
          onKeyUp={({ key }) => (key === "Enter" ? setFocus("address") : null)}
        />
        <input
          {...addressRegister}
          onChange={(e) => {
            clearErrors();
            addressRegister.onChange(e);
          }}
          placeholder={"가게 주소"}
          className="auth_input"
        />
        <input
          {...coverImageRegister}
          onChange={(e) => {
            clearErrors();
            coverImageRegister.onChange(e);
          }}
          placeholder={"가게 이미지 주소"}
          className="auth_input"
          type="url"
        />
        <select
          {...categoryRegister}
          name={categoryRegister.name}
          className="auth_input"
        >
          {data?.findAllCategory.result?.map(({ name }, idx) => (
            <option key={idx}>{name}</option>
          ))}
        </select>
        <div className="h-4" />
        <button
          type="submit"
          className={`py-3 px-5 my-1 w-full rounded-lg bg-green-400 font-medium text-lg text-white ${
            isValid ? "" : "opacity-80 disabled"
          }`}
          disabled={!isValid}
        >
          등록
        </button>
        <ErrorMessage
          message={
            errors.name?.message ??
            errors.address?.message ??
            errors.coverImage?.message ??
            errors.category?.message
          }
        />
      </form>
    </div>
  );
};

export default React.memo(RestaurantRegister);
