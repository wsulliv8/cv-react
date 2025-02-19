import { use, useState } from "react";
import Input from "./components/input.jsx";
import Resume from "./components/resume.jsx";
import {
  generalData,
  educationData,
  experienceData,
  templates,
} from "./components/resume-data.js";
import "./App.css";

export default function App() {
  const [general, setGeneral] = useState(generalData);
  const [education, setEducation] = useState(educationData);
  const [experience, setExperience] = useState(experienceData);

  function handleChange(e, id) {
    if (e.target.name in general) {
      general[e.target.name] = e.target.value;
      setGeneral({ ...general });
    } else if (e.target.name in education[0]) {
      education[id][e.target.name] = e.target.value;
      setEducation([...education]);
    } else if (e.target.name in experience[0]) {
      experience[id][e.target.name] = e.target.value;
      setExperience([...experience]);
    }
  }

  function addResumeData(type) {
    if (type === "education") {
      setEducation([
        ...education.map((item) => ({ ...item, active: false })),
        templates.education,
      ]);
    } else if (type === "experience") {
      setExperience([
        ...experience.map((item) => ({ ...item, active: false })),
        templates.experience,
      ]);
    }
  }

  return (
    <div className="app">
      <Input
        addResumeData={addResumeData}
        onChange={handleChange}
        general={general}
        education={education}
        experience={experience}
      />
      <Resume general={general} education={education} experience={experience} />
    </div>
  );
}
