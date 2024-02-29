import "./Register.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
  });
  return (
    <>
      <div className="register_page">
        <h1>Registeration Form</h1>
        <div className="register_section">
          <Tabs defaultActiveKey="registration" id="justify-tab-example" className="mb-3" justify>
            <Tab eventKey="registration" title="Registration">
              Username <br /> Skill proficient at <br /> Skills to learn <br /> Portfolio Link
            </Tab>
            <Tab eventKey="education" title="Education">
              College
              <br /> Highest degree achieved
              <br /> Subject majored in
            </Tab>
            <Tab eventKey="longer-tab" title="Additional">
              Bio
            </Tab>
            <Tab eventKey="Preview" title="Confirm Details">
              Preview of the Form
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Register;