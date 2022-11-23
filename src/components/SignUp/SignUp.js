import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  return (
    <div className="h-[800px] flex justify-center items-center">
      <div
        className="w-96 h-[580px] p-7"
        style={{
          boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "18px",
        }}
      >
        <h2 className="text-4xl mb-7 font-medium text-center">Sign Up</h2>
        <form onSubmit={handleSubmit()}>
          <div className="form-control w-full mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
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
          </div>
          <div className="form-control w-full mb-4">
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
                pattern: {
                  // value: /[a-zA-Z0-9]/,
                  message: "Password must be Strong",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
          </div>
          <input
            className="btn btn-accent text-white w-full"
            value="Sign Up"
            type="submit"
          />
        </form>
        <div>
          <p className="text-[12px] mt-[10px] text-center text-[#000000]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#19D3AE]">
              Please Login
            </Link>
          </p>
          <div className="divider">OR</div>

          <div>
            <button className="btn btn-outline w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;