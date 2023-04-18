import React, { useState } from 'react';
import AllCompleteTask from './AllCompleteTask';
import AllPendingTask from './AllPendingTask';
import FilterHeader from './FilterHeader';
import './task.css'
const Tasks = ({ tasks, editEnable, search, members }) => {

    const [filterData, setFilterData] = useState("All")

    let completeTask = tasks.filter(task => task.status === 'Complete')
    let pendingTask = tasks.filter(task => task.status === 'Pending')

    const handleSetFilter = (item) => {
        setFilterData(item)
    }


    return (
        <div>
            <FilterHeader
                member={members.length}
                completeTask={completeTask.length}
                pendingTask={pendingTask.length}
                handleSetFilter={handleSetFilter}
            />
            <AllPendingTask search={search} filterData={filterData} editEnable={editEnable} tasks={pendingTask} />
            <AllCompleteTask editEnable={editEnable} tasks={completeTask} />
        </div>
    );
};

export default Tasks;