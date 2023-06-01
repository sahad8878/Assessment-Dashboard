import React,{useContext} from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "../Axios/Axios";
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const { login} = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    axios.post("/userLogin", data).then((response) => {
      const result = response.data;
      if (result.success) {
        login({token:result.userToken})
        // localStorage.setItem("userToken", result.userToken);
        message.success("Login  successfully!");
        navigate("/home");
      } else {
        message.error(result.message);
      }
    });
  };
  return (
    <div className="text-center flex justify-center content-center">
      <div className="shadow-lg shadow-[#0e2d39]  border-2 rounded-2xl  my-16 p-14 ">
        <h1 className="text-xl font-bold font-serif text-[#0e2d39] ">
          Login Here..
        </h1>

        <form onSubmit={handleSubmit(submitForm)} className="">
          <div className="form-group  text-left mt-4 flex flex-col">
            <label className="text-left font-semibold " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-input rounded-sm border-[#0e2d39] border-2"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="errorMsg text-red-600">Please check the Email</p>
            )}
          </div>
          <div className="form-group text-left flex flex-col mt-2">
            <label htmlFor="password" className="text-left font-semibold ">
              Password
            </label>
            <input
              type="password"
              className="form-input rounded-sm border-[#0e2d39] border-2"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="errorMsg text-red-600">Please check the Password</p>
            )}
          </div>
          <div className="my-2">
            <NavLink
              to="/forgotPassword"
              className="text-[#0e2d39] ml-2 text-base font-semibold"
            >
              Forgot Password
            </NavLink>
            <h1 className="text-sm ">
              Create New Account?
              <NavLink
                to="/register"
                className="text-[#0e2d39] ml-2 text-base font-semibold"
              >
                Signup
              </NavLink>{" "}
            </h1>
          </div>

          <button
            type="submit"
            className="button px-5 py-0.5 bg-[#0e2d39] mt-5 font-semibold rounded-md text-white "
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
