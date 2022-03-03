type CookieKey = "isLogin";

export const setCookie = (key: CookieKey, value: any, expiredays?: number) => {
  const cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}; path=/;`;
  if (expiredays) {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = `${cookie} expires=${todayDate.toUTCString()};`;
  } else {
    document.cookie = cookie;
  }
};

export const delCookie = (key: CookieKey) => {
  document.cookie = `${encodeURIComponent(
    key
  )}=; path=/; expires=Thu, 01 Jan 1999 00:00:10 GMT`;
};

export const getCookie = (key: CookieKey) => {
  const encodedValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(encodeURIComponent(key)))
    ?.split("=")[1];

  return decodeURIComponent(encodedValue ?? "");
};
