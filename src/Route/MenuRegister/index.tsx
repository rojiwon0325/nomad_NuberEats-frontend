import { useMutation } from "@apollo/client";
import { uploadCoverImage } from "Apollo/apollo";
import { CREATEDISH_MUTATION } from "Apollo/Query/restaurant";
import { ErrorMessage } from "Component";
import { createDish, createDishVariables } from "Igql/createDish";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface IForm extends createDishVariables {
  file: FileList;
  result?: string;
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
  const fileRegister = register("file", {
    required: "음식 이미지가 필요합니다.",
  });
  const priceRegister = register("data.price", {
    required: "음식 가격이 필요합니다.",
    valueAsNumber: true,
    min: { value: 0, message: "0 이상의 값이 필요합니다." },
  });

  const [createDishMutation] = useMutation<createDish, createDishVariables>(
    CREATEDISH_MUTATION,
    {
      onCompleted: async ({ createDish: { ok, error, result } }) => {
        setLoad(false);
        if (ok) {
          navigate(`/restaurant/${restaurantId}`);
        } else {
          setError("result", { message: error ?? undefined });
        }
      },
      onError: () => setValue("result", "서버에 문제가 발생했습니다."),
      update: (cache, result) => {
        const data = result.data?.createDish.result;
        if (data) {
          cache.modify({
            id: `Restaurant:${restaurantId}`,
            fields: {
              menu: (exi) => [{ __ref: `Dish:${data.id}` }, ...exi],
            },
          });
        }
      },
    }
  );

  const onSubmit = useCallback(
    async ({ file, data }: IForm) => {
      if (loading) {
        return;
      }
      try {
        setLoad(true);
        const coverImage = await uploadCoverImage(file[0]);
        if (coverImage) {
          createDishMutation({
            variables: {
              restaurantId: parseInt(restaurantId ?? ""),
              data: {
                ...data,
                coverImage,
              },
            },
          });
        } else {
          setError("result", { message: "이미지 업로드에 실패하였습니다." });
        }
      } catch (e) {
        console.log(e);
      }
      setLoad(false);
    },
    [loading, setLoad, createDishMutation]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal_background">
      <div className="modal_component">
        <form className="modal_form" onSubmit={handleSubmit(onSubmit)}>
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
            {...fileRegister}
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
              errors.data?.price?.message ??
              errors.data?.coverImage?.message ??
              errors.file?.message
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
