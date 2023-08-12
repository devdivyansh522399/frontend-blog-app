import React, { useEffect } from 'react'
import { images } from '../../constants'
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { login } from '../../services/Index/users';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store/reducer/userReducer';

const LoginPage = () => {
  const navigate = useNavigate()  
  const dispatch = useDispatch();   
  const userState = useSelector(state => state.user)

  const {mutate, isLoading} = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      toast.success(data.message)
      dispatch(userActions.setUserInfo(data))
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError : (error) => {
      toast.error(error.message )
      console.log(error)
    }
  });
  useEffect(()=> {
    if(userState.userInfo?.success){
      navigate('/')
    }
    if(userState.userInfo?.success === false){
      toast.error(userState.userInfo?.message)
    }
}, [navigate, userState.userInfo])
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        defaultValues: {
          email: "",
          password: "",
        },
        mode : 'onChange'
      });
      const submitHandler = (data) => {
        const {email, password} = data;
        mutate({email, password });
      };
  return (
    <div className="p-2 flex flex-col">
      <div className='flex flex-row justify-center m-2'>
         <img src={images.LoginProfile} alt="" className='h-16 w-16'/>
      </div>
      <form className="space-y-4 md:space-y-6 p-2 font-roboto" onSubmit={handleSubmit(submitHandler)}>
    
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
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
              })}
            placeholder="••••••••"
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2 ${
                errors.password ? "border-red-500" : "border-[#08fb51]"
              }`}
            
          />
          {errors.password?.message && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>
        <div className='flex flex-row justify-center m-2'>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={!isValid || isLoading}
        >
          Sign In
        </button>
        </div>
        <p className="text-sm font-light text-gray-500 ">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign Up here
          </a>
        </p>
      </form>
    </div>
  )
}

export default LoginPage