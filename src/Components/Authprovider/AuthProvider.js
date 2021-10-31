import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

// exporting authcontext so that we can useAuth as a custom hook
export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  // invoking custom hook useFirebase
  const allcontext = useFirebase();
  return (
    <AuthContext.Provider value={allcontext}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
