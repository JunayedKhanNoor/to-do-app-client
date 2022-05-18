import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import AddTask from "./AddTask";
import CompletedTask from "./CompletedTask";
import Task from "./Task";

const MyTasks = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["myTask", user], () =>
    fetch(`http://localhost:5000/task/${user.email}`).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <AddTask refetch={refetch}></AddTask>
      <div className="divider"></div>
      <h2 className="my-3 text-2xl text-center font-bold text-blue-500">My Tasks: {tasks?.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        {tasks.map((task) => (
          <Task key={task._id} task={task} refetch={refetch}></Task>
        ))}
      </div>
      <div className="divider"></div>
      <h2 className="my-3 text-2xl text-center font-bold text-blue-500">My Completed Tasks:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        {tasks.map((task) => (
          <CompletedTask key={task._id} task={task} refetch={refetch}></CompletedTask>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
