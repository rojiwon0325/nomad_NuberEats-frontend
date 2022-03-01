import { useMutation } from "@apollo/client";
import { VERIFYEMAIL_MUTATION } from "Apollo/Query/user";
import { verifyEmail, verifyEmailVariables } from "Igql/verifyEmail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Verification: React.FC = () => {
  const { code } = useParams();
  const [verifyState, setState] = useState("Confirming email...");
  const [verifyEmailMutaion] = useMutation<verifyEmail, verifyEmailVariables>(
    VERIFYEMAIL_MUTATION,
    {
      onCompleted: ({ verifyEmail: { ok, error } }) => {
        if (ok) {
          setState("인증되었습니다.");
        } else {
          setState(error ?? "인증에 실패하였습니다.");
        }
      },
    }
  );

  useEffect(() => {
    verifyEmailMutaion({ variables: { code: code ?? "" } });
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <span className="font-medium text-xl">{verifyState}</span>
    </div>
  );
};

export default Verification;
