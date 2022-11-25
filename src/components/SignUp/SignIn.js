import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserDetails, setLoginUserDetails] = useState("");
  console.log(loginUserDetails)
  // call location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

 //handle google sign in
 const handleGoogleSignIn = () => {
  console.log("google sign in");
  googleLogin()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
      toast.success("Sign In Successfully");
    })
    .catch((err) => {
      const errorMessage = err.message;
      setLoginError(errorMessage);
      console.log(err);
    });
};


  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserDetails(data.email);
        toast.success("Sign in Successfully");
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div
        className="w-96 h-[500px] p-7"
        style={{
          boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "18px",
        }}
      >
        <h2 className="text-4xl mb-8 font-medium text-center">Sign In</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            {loginError.email && (
              <p className="text-red-600">{loginError.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full"
            />
            <label className="label">
              {" "}
              <span className="label-text text-[10px] text-[#000]">
                Forget Password?
              </span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent text-white w-full"
            value="Login"
            type="submit"
          />
        </form>
        <div>
          {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
          <p className="text-[12px] mt-[10px] text-center text-[#000000]">
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-[#19D3AE]">
              Create new Account
            </Link>
          </p>
          <div className="divider">OR</div>

          <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
