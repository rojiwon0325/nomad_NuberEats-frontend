import { Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  Join,
  Login,
  NotFound,
  RestaurantRegister,
  Verification,
} from "Route";
import { HomeLayout, RootLayout } from "Component";
import { useQuery } from "@apollo/client";
import { ISLOGIN_QUERY } from "Apollo/Query/user";
import { isLogin as IsLogin } from "Igql/isLogin";

function App() {
  const { loading, data } = useQuery<IsLogin>(ISLOGIN_QUERY);
  if (loading) {
    return <div>loading.......</div>;
  }
  return (
    <RootLayout>
      <Routes>
        {data?.isLogin ? (
          <>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
              <Route
                path="restaurant/register"
                element={<RestaurantRegister />}
              />
              <Route path="login" element={<Navigate to="/" replace />} />
              <Route path="join" element={<Navigate to="/" replace />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
        <Route path="verification/:code" element={<Verification />} />
      </Routes>
    </RootLayout>
  );
  // replace속성은 히스토리에 기록이 안남도록 한다.
  // 자기자신 대신에 to로 replace
}

export default App;
