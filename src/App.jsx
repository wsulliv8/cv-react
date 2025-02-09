import { use, useState } from "react";
import Input from "./components/input.jsx";
import Resume from "./components/resume.jsx";
import { generalData, educationData } from "./components/resume-data.js";
import "./App.css";

export default function App() {
  const [general, setGeneral] = useState(generalData);
  const [education, setEducation] = useState(educationData);

  function handleChange(e) {
    if (e.target.id in general) {
      general[e.target.id] = e.target.value;
      setGeneral({ ...general });
    } else if (e.target.id in education) {
      education[e.target.id] = e.target.value;
      setEducation({ ...education });
    }
  }

  return (
    <div className="app">
      <Input onChange={handleChange} general={general} education={education} />
      <Resume general={general} education={education} />
    </div>
  );
}
