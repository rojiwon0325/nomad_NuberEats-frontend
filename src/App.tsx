import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Join, Login, NotFound, Verification } from "Route";
import { AuthLayout, HomeLayout, RootLayout } from "Component";
import { isLogin } from "Apollo/apollo";
import { useReactiveVar } from "@apollo/client";

function App() {
  const _isLogin = useReactiveVar(isLogin);
  return (
    <RootLayout>
      <Routes>
        <Route path="verification" element={<AuthLayout />}>
          <Route index element={<NotFound />} />
          <Route path=":code" element={<Verification />} />
        </Route>
        {_isLogin ? (
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
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
      </Routes>
    </RootLayout>
  );
  // replace속성은 히스토리에 기록이 안남도록 한다.
  // 자기자신 대신에 to로 replace
}

export default App;
