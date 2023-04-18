import React, { useState } from 'react';
import Button from '../shared/ui/button/Button';
import InputBox from '../shared/ui/inputBox/InputBox';
import './addtask.css'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const init = {
    taskName: '',
    category: "",
    teamMember: "",
    deadline: "",
    status: "Pending"
}

const AddTask = ({ editedData, members, handleSetTasks }) => {

    const [data, setData] = useState({ ...init });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let oldData = { ...data };
        oldData[name] = value;
        setData(oldData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editedData != "") {
            console.log(data);
            handleSetTasks(data, "update")

        } else {
            let newData = { ...data, id: uuidv4() };
            handleSetTasks(newData, "add")
            setData(init);
        }
    }

    useEffect(() => {
        if (editedData != "") {
            setData({ ...editedData });
        }
    }, [editedData])


    return (
        <div className='addTaskForm'>
            <h3>{editedData ? "Update Task" : "Add Task"}</h3>
            <form onSubmit={handleSubmit}>
                <InputBox
                    placeholder="Task Name"
                    value={data.taskName}
                    name="taskName"
                    onChange={handleChange}
                /><br />

                <select
                    defaultValue={data.category}
                    name='category'
                    onChange={handleChange}
                >
                    <option value="" disabled>Select Category</option>
                    <option value="Unit Test">Unit Test</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Backend-End</option>
                </select><br />
                <select
                    defaultValue={data.teamMember}
                    name="teamMember"
                    onChange={handleChange}
                >
                    <option value="">Select Team</option>

                    {
                        members.map((member, i) =>
                            <option key={i} value={member}>{member}</option>
                        )
                    }




                </select><br />
                <InputBox
                    type="date"
                    value={data.deadline}
                    name="deadline"
                    onChange={handleChange}
                /><br />

                <Button label={editedData ? "Update" : "Add"} type="submit" />
            </form>
        </div>
    );
};

export default AddTask;