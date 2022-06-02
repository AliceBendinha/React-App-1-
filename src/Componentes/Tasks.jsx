import React from "react";

import Task from "./Task"

const Tasks = ({ tasks,  handleTaskClick, handleTaskDeletio }) => {
    return (
        <>
            {tasks.map((task) => ( 
               <Task 
                    task={task}  
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletio} 
               /> 
            ))}
        </>
    );
};
export default Tasks;