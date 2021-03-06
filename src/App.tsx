import { Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  Join,
  Login,
  MenuRegister,
  NotFound,
  RestaurantDashboard,
  RestaurantInfo,
  RestaurantRegister,
  Verification,
} from "Route";
import { AuthLayout, HomeLayout, RootLayout } from "Component";
import { useApolloClient, useQuery } from "@apollo/client";
import { ISLOGIN_QUERY } from "Apollo/Query/user";
import { isLogin as IsLogin } from "Igql/isLogin";
import { useEffect } from "react";

function App() {
  const client = useApolloClient();

  const { loading, data } = useQuery<IsLogin>(ISLOGIN_QUERY);
  useEffect(() => {
    if (data?.isLogin === false) {
      client.resetStore();
    }
  }, [data]);

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
              <Route path="restaurant">
                <Route index element={<NotFound />} />
                <Route path="register" element={<RestaurantRegister />} />
                <Route path=":id" element={<RestaurantDashboard />}>
                  <Route path="menu" element={<MenuRegister />} />
                  <Route path="restaurantinfo" element={<RestaurantInfo />} />
                </Route>
              </Route>
              <Route path="login" element={<Navigate to="/" replace />} />
              <Route path="join" element={<Navigate to="/" replace />} />
            </Route>
            <Route
              path="*"
              element={
                <AuthLayout>
                  <NotFound />
                </AuthLayout>
              }
            />
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
  // replace????????? ??????????????? ????????? ???????????? ??????.
  // ???????????? ????????? to??? replace
}

export default App;
