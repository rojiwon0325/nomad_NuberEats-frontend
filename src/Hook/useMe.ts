import { useQuery } from "@apollo/client";
import { ME_QUERY } from "Apollo/Query/user";
import { me } from "Igql/me";

const useMe = () => useQuery<me>(ME_QUERY);

export default useMe;
