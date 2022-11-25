import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  // const [createdUserEmail, setCreatedUserEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data.role);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
          photoURL: data.photoURL,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
            console.log(data.name, data.email);
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  //handle google sign in
  const handleGoogleSignIn = () => {
    console.log("google sign in");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        saveUser(user?.displayName, user?.email, 'seller');
        toast.success("Sign In Successfully");
      })
      .catch((err) => {
        const errorMessage = err.message;
        setSignUPError(errorMessage);
        console.log(err);
      });
  };
  

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };


  return (
    <div className="h-[800px] flex justify-center items-center">
      <div
        className="w-96 h-[730px] p-7"
        style={{
          boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "18px",
        }}
      >
        <h2 className="text-4xl mb-7 font-medium text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            {signUpError.email && (
              <p className="text-red-600">{signUpError.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", {
                required: "Photo Url is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            {signUpError.email && (
              <p className="text-red-600">{signUpError.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text">Your Role</span>
            </label>

            <select
              {...register("role")}
              className="input input-bordered w-full"
            >
              <option defaultValue="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>

            <small className="text-danger">
              {errors?.role && errors.role.message}
            </small>
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
            className="btn btn-accent bg-[#e0c83d] border-[#e0c83d] text-white w-full"
            value="Sign Up"
            type="submit"
          />
        </form>
        <div>
          <p className="text-[12px] mt-[10px] text-center text-[#000000]">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#e0c83d]">
              Please Sign In
            </Link>
          </p>
          <div className="divider">OR</div>

          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
