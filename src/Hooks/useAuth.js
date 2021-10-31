import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/AuthProvider";

// actually Authcontext ar kaj tah useAuth korche..
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
