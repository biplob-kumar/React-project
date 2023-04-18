import React from 'react';

const DisplayTeams = ({ members }) => {
    return (
        <div>
            {
                members.length==0?  <p>Please Add members</p>:""
            }

            {
                members.map((member,i) =>
                    <div key={i} className="teamCard">
                        <h4>{member}</h4>
                    </div>
                )
            }



        </div>
    );
};

export default DisplayTeams;