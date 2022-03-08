import React from "react";
import Logo from "./Logo";

const AuthLayout: React.FC = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center">
        <Header />
        <div className="w-full flex flex-col px-4 sm:px-9 sm:pt-6 sm:max-w-md">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AuthLayout;

const Header = () => (
  <header className="h-12 w-full sm:h-20 px-4 sm:px-9 flex items-center bg-black">
    <Logo />
  </header>
);

const Footer = () => (
  <footer className="flex-center flex-col">
    <div className="py-5">
      <a className="px-1 text-gray-700 cursor-pointer">개인정보 보호정책</a>|
      <a className="px-1 text-gray-700 cursor-pointer">이용 약관</a>
    </div>
    <div className="pb-5">
      <span className="text-xs">
        이 사이트는 reCAPTCHA 및 Google 개인정보 보호정책에 의해 보호되며 서비스
        약관이 적용됩니다.
      </span>
    </div>
  </footer>
);
