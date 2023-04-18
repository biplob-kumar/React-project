import React from 'react';
import Button from '../shared/ui/button/Button';

const FilterHeader = ({ handleSetFilter,member,completeTask,pendingTask }) => {

    const data = ["All", "Unit Test", "Front-End", "Back-End"]

    return (
        <div>
            {
                data.map((item, id) => <Button onClick={() => handleSetFilter(item)} key={id}>{item}</Button>)
            }


            <div>
                <p>Total Pending Task: {pendingTask}</p>
                <p>Total Completed Task: {completeTask}</p>
                <p>Total Member: {member}</p>
            </div>

        </div>
    );
};

export default FilterHeader;