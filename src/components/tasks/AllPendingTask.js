import React from 'react';
import TaskCard from './TaskCard';

const AllPendingTask = ({ tasks, editEnable, filterData, search }) => {


    const handleSort = (item) => {
        if (item.category === filterData) {
            return item;
        }
        else if (filterData === "All") {
            return item;
        }
    }


    const handleSearch = (item) => {
        if (search === "") {
            return item;
        }
        let searchValue = search.toLowerCase();
        let itemTitle = item.taskName.toLowerCase()
        if (itemTitle.includes(searchValue)) {
            return item;
        }
    }

    return (

        <div className='taskBoxes'>
            <h3>All Pending Tasks</h3>
            <div className="taskContainer">


                {tasks.length === 0 ? "Task is Empty" :
                    tasks.length > 0 ? tasks.filter(handleSort).filter(handleSearch).map(task => <TaskCard editEnable={editEnable} key={task.id} task={task} />) : ""}
            </div>
        </div>
    );
};

export default AllPendingTask;
