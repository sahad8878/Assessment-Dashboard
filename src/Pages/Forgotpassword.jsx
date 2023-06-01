import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from '../Axios/Axios'
import logo from "../Assets/logo.png";

function Forgotpassword() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const submitForm = (data) => {
        console.log(data,"data");
        axios.post("/forgotPassword", data).then((response) => {
         const result = response.data;
         if(result.success) {
             message.success("Password   successfully changed");
             navigate("/");
         }else {
             message.error(result.message)
 
         }
        })
       };
  return (
    <div>
    <div className="h-20 bg-[#0B3366] w-screen">
      <img className="p-7 pl-14" src={logo} alt="logo" />
    </div>
    <div className="text-center flex justify-center content-center">
    <div className="shadow-lg shadow-[#0e2d39]  border-2 rounded-2xl  my-16 p-14 ">
      <h1 className="text-xl font-bold font-serif text-[#0e2d39] ">
      Change Your Password
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
           New Password
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
   
            <NavLink
              to="/"
              className="text-[#0e2d39] ml-2 text-base font-semibold"
            >
             Back
            </NavLink>{" "}
          </h1>
        </div>


        <button
          type="submit"
          className="button px-5 py-0.5 bg-[#0e2d39] mt-5 font-semibold rounded-md text-white "
        >
          Submit
        </button>
      </form>

    </div>
  </div>  
  </div>  

  )
}

export default Forgotpassword
