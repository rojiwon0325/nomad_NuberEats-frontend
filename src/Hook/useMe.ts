import { useQuery } from "@apollo/client";
import { isLogin } from "Apollo/apollo";
import { ME_QUERY } from "Apollo/Query/user";
import { delCookie } from "Global/cookie";
import { me } from "Igql/me";

const useMe = () => {
  const me = useQuery<me>(ME_QUERY);
  if (me.error) {
    isLogin(false);
    delCookie("access_token");
  }
  return me;
};

export default useMe;
