import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { message } from "antd";

import axios from "../Axios/Axios";

function Register() {
  const navigate = useNavigate();
  const [validateError, setValidateErrors] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateFields = (data) => {
    let errors = {};

    // Validate email
    if (!data.username) {
      errors.username = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.username)) {
      errors.username = "Email is invalid";
    }

    // Validate password
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setValidateErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const submitForm = (data) => {
    if (validateFields(data)) {
      axios.post("/userSignup", data).then((response) => {
        let result = response.data;
        if (result.success) {
          message.success("Signup successfully!");
          navigate("/");
        } else {
          message.error(result.message);
        }
      });
    } else {
      console.log("not validated");
    }
  };
  return (
    <div className="text-center flex justify-center content-center">
      <div className="shadow-lg shadow-[#0e2d39]  border-2 rounded-2xl  my-16 p-14 ">
        <h1 className="text-xl font-bold font-serif text-[#0e2d39] ">
          Register Here..
        </h1>

        <form onSubmit={handleSubmit(submitForm)} className="">
          <div className="form-group  text-left mt-4 flex flex-col">
            <label className="text-left font-semibold " htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              className="form-input rounded-sm border-[#0e2d39] border-2"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="errorMsg text-red-600">
                Please check the First Name
              </p>
            )}
          </div>{" "}
          <div className="form-group  text-left mt-4 flex flex-col">
            <label className="text-left font-semibold " htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="form-input rounded-sm border-[#0e2d39] border-2"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <p className="errorMsg text-red-600">
                Please check the Last Name
              </p>
            )}
          </div>
          <div className="form-group  text-left mt-4 flex flex-col">
            <label className="text-left font-semibold " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-input rounded-sm border-[#0e2d39] border-2"
              {...register("username", { required: true })}
            />
            {validateError.username && (
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
            <h1 className="text-sm ">
              Already have one?
              <NavLink
                to="/"
                className="text-[#0e2d39] ml-2 text-base font-semibold"
              >
                Login
              </NavLink>{" "}
            </h1>
          </div>
          <button
            type="submit"
            className="button px-5 py-0.5 bg-[#0e2d39] mt-5 font-semibold rounded-md text-white "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
