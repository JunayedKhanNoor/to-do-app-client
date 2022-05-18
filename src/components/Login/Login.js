import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user,from,navigate]);
 
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Hello there, welcome to your task management system</h1>
          <p className="py-6">
           Please SignIn before getting start.
          </p>
          <button onClick={() => signInWithGoogle()} className="btn btn-success">
            SignIn with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
