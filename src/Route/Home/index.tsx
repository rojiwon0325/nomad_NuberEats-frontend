import { UserRole } from "Igql/globalTypes";
import { me_me } from "Igql/me";
import React from "react";
import ClientHome from "./ClientHome";
import OwnerHome from "./OwnerHome";

const Home: React.FC<{ user: me_me | null }> = ({ user }) => {
  if (user === null) {
    return <div>loading...</div>;
  }
  if (!user.verified) {
    return <div>이메일 인증을 진행해주세요.</div>;
  }
  switch (user.role) {
    case UserRole.Client:
      return <ClientHome user={user} />;
    case UserRole.Owner:
      return <OwnerHome user={user} />;
    case UserRole.Rider:
      return <div>라이더용 페이지 제작중...</div>;
    default:
      return <div>Fail...</div>;
  }
};

export default Home;
