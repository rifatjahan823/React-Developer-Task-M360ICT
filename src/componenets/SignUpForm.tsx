import React from 'react';
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../redux/user/userApi";

const SignUpForm = () => {
          //Create user
  const [addUser] = useAddUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  
  const onSubmit = async (data: Partial<any>) => {
      const response = await addUser(data);
      // Handle the successful response
      console.log(response);
      // Reset the form after successful submission
      reset();
    
  };
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
            {...register("email", { required: "Email is required" })}
            className=""
          />
        </div>
        <div>
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            {...register("password", { required: "Password is required" })}
            className=""
          />
        </div>
        <button>registar</button>
      </form>
        </div>
    );
};

export default SignUpForm;