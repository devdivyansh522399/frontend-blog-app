import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup } from "../../services/Index/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/reducer/userReducer";
import { setToken } from "../../services/token";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      toast.success(data.message);
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  useEffect(() => {
    if (userState.userInfo) {
      setToken(userState.userInfo.token);
      navigate("/");
    }
  }, [navigate, userState.userInfo]);
  const {
    register,
    handleSubmit,
    formState: { errors},
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkBox : false
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const {name, email, password } = data;
    mutate({name, email, password });
  };
  const password = watch("password");
  return (
    <div className="p-2 flex flex-col">
      <h1 className="text-2xl font-roboto font-bold text-center mt-1 underline text-dark-soft">
        Create Your Account
      </h1>
      <form
        className="space-y-3 md:space-y-4 p-2 font-roboto"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            {...register("name", {
              minLength: {
                value: 2,
                message: "Name should contain atleast one letter",
              },
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
              errors.name ? "border-red-500" : "border-[#08fb51]"
            }`}
            placeholder="Your name"
            required
          />
          {errors.name?.message && (
            <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
              errors.email ? "border-red-500" : "border-[#08fb51]"
            }`}
            placeholder="Email.."
            required
          />
          {errors.email?.message && (
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              pattern : {
                value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                message : "Minimum 8 characters, at least one letter, one number and one special character required"
              }
            })}
            placeholder="••••••••"
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
              errors.password ? "border-red-500" : "border-[#08fb51]"
            }`}
          />
          {errors.password?.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 font-medium text-gray-900 "
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm password"
            id="confirm password"
            {...register("confirm password", {
              required: {
                value: true,
                message: "Confirm password is required",
              },
              validate: (value) => {
                if (value !== password) {
                  return "Passwords do not match";
                }
              },
            })}
            placeholder="••••••••"z
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
              errors.confirmPassword ? "border-red-500" : "border-[#08fb51]"
            }`}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              {...register("checkBox", {
                required: {
                  value: true,
                  message: "Please accept terms and conditons",
                },
              })}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-light text-drak-soft"
            >
              I accept the{" "}
              <a
                className="font-medium text-primary-600 hover:underline "
                href="/"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
          {errors.checkBox?.message && (
            <p className="text-red-500 text-xs">
              {errors.checkBox.message}
            </p>
          )}

        <div className="flex flex-row justify-center m-1">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Create an Account
          </button>
        </div>
        <p className="text-sm font-light text-gray-500 ">
          Already have an account?{" "}
          <a
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
