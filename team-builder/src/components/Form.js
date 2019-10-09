import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleSubmit = e => {
    e.preventDefault();
    props.addMemberFn(member);
    setMember({ name: "", email: "", role: "" });
  };

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: [e.target.value] });
  };

  return (
    <div>
      <h1>I'm a form!</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input
            value={member.Name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={member.Email}
            name="email"
            type="text"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Role:
          <input
            value={member.Role}
            name="role"
            type="text"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default Form;
