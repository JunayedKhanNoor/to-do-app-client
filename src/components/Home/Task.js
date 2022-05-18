import React from 'react';
import { toast } from 'react-toastify';

const Task = ({task, refetch}) => {
    const handleDelete = () => {
        fetch(`http://localhost:5000/task/${task._id}`, {
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
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions justify-between">
          <input type="checkbox" checked="checked" class="checkbox checkbox-lg" /> 
            <button class="btn btn-square btn-sm" onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          <h1 className='text-xl font-bold text-success'>{task.name}</h1>
          <p>{task.description}</p>
        </div>
      </div>
    );
};

export default Task;