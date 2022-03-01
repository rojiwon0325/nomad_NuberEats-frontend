import { useMutation } from "@apollo/client";
import { ME_QUERY, VERIFYEMAIL_MUTATION } from "Apollo/Query/user";
import { verifyEmail, verifyEmailVariables } from "Igql/verifyEmail";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Verification: React.FC = () => {
  const { code } = useParams();
  const [verifyState, setState] = useState("인증 진행중...");
  const [verifyEmailMutaion] = useMutation<verifyEmail, verifyEmailVariables>(
    VERIFYEMAIL_MUTATION,
    {
      onCompleted: ({ verifyEmail: { ok, error, userId } }) => {
        if (ok && userId !== null) {
          setState("인증되었습니다.");
        } else {
          setState(error ?? "인증에 실패하였습니다.");
        }
      },
      refetchQueries: [ME_QUERY],
      awaitRefetchQueries: true,
    }
  );

  useEffect(() => {
    verifyEmailMutaion({ variables: { code: code ?? "" } });
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <span className="m-1 font-medium text-xl">{verifyState}</span>
      <Link to="/" className="hover:underline">
        홈으로 이동
      </Link>
    </div>
  );
};

export default Verification;
