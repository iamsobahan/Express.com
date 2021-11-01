import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/AuthProvider";

// custom useAuth we can collect data  throu useAuth . from any where
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
