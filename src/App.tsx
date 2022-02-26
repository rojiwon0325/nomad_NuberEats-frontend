import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Join, Login } from "Route";
import { AuthLayout, HomeLayout, RootLayout } from "Compoenet";

function App() {
  const [isLogin] = useState(true);
  return (
    <RootLayout>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
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
