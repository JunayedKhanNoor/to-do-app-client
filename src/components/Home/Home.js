import React from 'react';
import AddTask from './AddTask';
import MyTasks from './MyTasks';

const Home = () => {

    return (
        <div>
            <AddTask></AddTask>
            <div class="divider"></div> 
            <MyTasks></MyTasks>
        </div>
    );
};

export default Home;