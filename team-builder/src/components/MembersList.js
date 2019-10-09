import React from "react";

const MembersList = ({ members, deleteMemberFn }) => {
  return (
    <div>
      {members.map(member => {
        return (
          <>
            <p>{member.id}</p>
            <h4 key={member.id}>{member.name}</h4>
            <h4 key={member.id}>{member.email}</h4>
            <h4 key={member.id}>{member.role}</h4>
            <button onClick={() => deleteMemberFn(member.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default MembersList;
