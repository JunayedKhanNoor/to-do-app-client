import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const AddTask = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (loading) {
      return<Loading></Loading>;
  }
  const onSubmit = (data) => {
    const task = {
      name: data.name,
      description: data.description,
      email: user.email,
    };
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
          
        if (data.success) {
          toast.success(`${data.name}, task added successfully `);
        } else {
          toast.error(`Failed to add task: ${data.name}`);
        }
        reset();
      });
  };
  return (
    <>
      
      <div className="flex justify-center">
        <div className="card w-full md:max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Please add your task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Task Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Task Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Task Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Task Description"
                  className="input input-bordered w-full"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
              <input className="btn w-full text-white" type="submit" value="Add Task" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
