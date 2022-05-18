import React from "react";
import { toast } from "react-toastify";

const CompletedTask = ({ task, refetch }) => {
  const handleDelete = () => {
    fetch(`https://stormy-mesa-77384.herokuapp.com/task/${task._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${task.name} is deleted`);
          refetch();
        }
      });
  };
  const makeComplete = () => {
    fetch(`https://stormy-mesa-77384.herokuapp.com/task/complete/${task._id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully Completed Task`);
          refetch();
        }
      });
  };
  return (
    <>
      {task.status === "done" && (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-actions justify-between">
              <input
                type="checkbox"
                checked={task.status === "done" && "checked"}
                className="checkbox checkbox-lg"
                onClick={makeComplete}
              />
              <button className="btn btn-square btn-sm btn-outline" onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-xl font-bold text-success line-through">{task.name}</h1>
            <p className="line-through">{task.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CompletedTask;
