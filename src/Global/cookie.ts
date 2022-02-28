export const setCookie = (
  key: "access_token",
  value: any,
  expiredays: number
) => {
  let todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}; path=/; expires=${todayDate.toUTCString()};`;
};

export const delCookie = (key: "access_token") => {
  document.cookie = `${encodeURIComponent(
    key
  )}=; path=/; expires=Thu, 01 Jan 1999 00:00:10 GMT`;
};

export const getCookie = (key: "access_token") => {
  const encodedValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(encodeURIComponent(key)))
    ?.split("=")[1];

  return decodeURIComponent(encodedValue ?? "");
};
