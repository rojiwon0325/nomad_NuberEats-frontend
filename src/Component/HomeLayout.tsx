import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "Component";
import { Helmet } from "react-helmet-async";
import useMe from "Hook/useMe";

const HomeLayout: React.FC = () => {
  useMe();
  return (
    <>
      <Helmet>
        <title>Nuber | Home</title>
      </Helmet>
      <header className="h-12 w-full sm:h-20 px-4 sm:px-9 flex items-center bg-black">
        <Logo />
      </header>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="h-full sm:h-auto w-full flex flex-col px-4 sm:px-9 sm:pt-6 sm:max-w-md">
          <div className="w-full h-full pt-4 flex flex-col items-center justify-between">
            <Outlet />
          </div>
          <footer className="flex flex-col items-center text-center">
            <div className="py-5">
              <a className="px-1 text-gray-700 cursor-pointer">
                개인정보 보호정책
              </a>
              |<a className="px-1 text-gray-700 cursor-pointer">이용 약관</a>
            </div>
            <div className="pb-5">
              <span className="text-xs">
                이 사이트는 reCAPTCHA 및 Google 개인정보 보호정책에 의해
                보호되며 서비스 약관이 적용됩니다.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
