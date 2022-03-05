import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Join, Login, NotFound, Verification } from "Route";
import { AuthLayout, HomeLayout, RootLayout } from "Component";
import { useQuery } from "@apollo/client";
import { ISLOGIN_QUERY, ME_QUERY } from "Apollo/Query/user";
import { isLogin as IsLogin } from "Igql/isLogin";
import { me } from "Igql/me";

function App() {
  const { data: mydata } = useQuery<me>(ME_QUERY);
  const { loading, data } = useQuery<IsLogin>(ISLOGIN_QUERY);
  if (loading) {
    return <div>loading.......</div>;
  }
  return (
    <RootLayout>
      <Routes>
        {data?.isLogin ? (
          <Route path="/" element={<HomeLayout user={mydata?.me ?? null} />}>
            <Route index element={<Home user={mydata?.me ?? null} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Route>
        )}
        <Route path="verification" element={<AuthLayout />}>
          <Route index element={<NotFound />} />
          <Route path=":code" element={<Verification />} />
        </Route>
      </Routes>
    </RootLayout>
  );
  // replace속성은 히스토리에 기록이 안남도록 한다.
  // 자기자신 대신에 to로 replace
}

export default App;
