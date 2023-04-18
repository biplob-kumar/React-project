import React from 'react';
import TaskCard from './TaskCard';

const AllCompleteTask = ({tasks,editEnable}) => {
    return (
        <div className='taskBoxes'>
            <h3>All Complete Tasks</h3>
            <div className="taskContainer">
                {
                    tasks.map((task) =><TaskCard editEnable={editEnable} key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default AllCompleteTask;