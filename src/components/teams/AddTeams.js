import React, { useState } from 'react';
import Button from '../shared/ui/button/Button';
import InputBox from '../shared/ui/inputBox/InputBox';

const AddTeams = ({handleSetMembers}) => {
    const [member, setMember] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(member);
        handleSetMembers(member);
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputBox
                value={member}
                onChange={(e) => setMember(e.target.value)}
                placeholder="Enter Member Name"
            />
            <Button type="submit" label="Add Team" />
        </form>
    );
};

export default AddTeams;