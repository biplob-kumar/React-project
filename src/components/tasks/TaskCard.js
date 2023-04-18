import React from 'react';
import Button from '../shared/ui/button/Button';

const TaskCard = ({ task, editEnable }) => {
    // console.log(task);
    const { taskName, category, teamMember, deadline } = task;


    const handleClick = () => {
        editEnable(task)
        console.log("call");
    }
    return (
        <div className='taskCard'>
            <p>{taskName}</p>
            <h4 className='category'>Category:<span>{category}</span></h4>
            <h4>{teamMember}</h4>
            <h4>Deadline: {deadline}</h4>
            <Button onClick={() => handleClick()} label="Edit" />
            <Button label="Complete" />
        </div>
    );
};

export default TaskCard;