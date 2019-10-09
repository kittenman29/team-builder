import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form.js";
import { data } from "./components/data.js";
import MembersList from "./components/MembersList";

function App() {
  const [members, setMembers] = useState();

  useEffect(() => {
    const thing = () => {
      setMembers(data);
    };
    thing();
  }, []);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    console.log("heyyyy", newMember);
    setMembers([...members, newMember]);
  };

  const deleteMember = id => {
    console.log("working?");
    const newArray = members.filter(member => {
      return member.id !== id;
    });
    setMembers(newArray);
  };

  if (!members) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="App">
      <Form addMemberFn={addMember} />
      <MembersList deleteMemberFn={deleteMember} members={members} />
    </div>
  );
}

export default App;
