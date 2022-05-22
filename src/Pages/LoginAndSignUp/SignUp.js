import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, errorVerification] =
    useSendEmailVerification(auth);
  const [signInWithGoogle, userGoogle, gloading, gerror] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
    alert("Verification email has been send");
    console.log("update done");
  };
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    signInWithGoogle();
  };
  const navigate = useNavigate();
  if (loading || gloading || updating || sending) {
    <Loading></Loading>;
  }
  let signInError;
  if (error || gerror || updateError) {
    signInError = (
      <p className="text-red-500">{error?.message || gerror?.message}</p>
    );
  }
  if (user || userGoogle) {
    navigate("/");
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-primary">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>

              <input
                name="name"
                type="text"
                placeholder="Type here"
                class="input input-bordered  max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
            </div>
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>

              <input
                name="email"
                type="text"
                placeholder="Type here"
                class="input input-bordered  max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "provide a valid email",
                  },
                })}
              />
            </div>
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                class="input input-bordered  max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password should be of minimum 6 charecters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              value="Sign Up"
              class="btn modal-button btn-primary w-full"
              type="submit"
            />

            <div>
              <small>
                Already Have a account?
                <Link className="text-secondary" to="/login">
                  Login here
                </Link>
              </small>
            </div>
            <div class="divider">OR</div>

            <button
              onClick={handleGoogleLogin}
              type="submit"
              class="btn btn-outline btn-primary w-full"
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
