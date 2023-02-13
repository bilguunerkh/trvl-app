import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      {isSignIn ? <Signin seto={setIsSignIn} /> : <Signup seto={setIsSignIn} />}
    </>
  );
};

export default AuthPage;
