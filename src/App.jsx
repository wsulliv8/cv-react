import { useState } from "react";
import Input from "./components/input.jsx";
import Resume from "./components/resume.jsx";
import {
  generalData,
  educationData,
  experienceData,
  projectData,
  templates,
} from "./components/resume-data.js";
import "./App.css";

export default function App() {
  const [general, setGeneral] = useState(generalData);
  const [education, setEducation] = useState(educationData);
  const [experience, setExperience] = useState(experienceData);
  const [project, setProject] = useState(projectData);

  function handleChange(e, type, id) {
    switch (type) {
      case "education":
        education[id][e.target.name] = e.target.value;
        setEducation([...education]);
        break;
      case "experience":
        experience[id][e.target.name] = e.target.value;
        setExperience([...experience]);
        break;
      case "project":
        project[id][e.target.name] = e.target.value;
        setProject([...project]);
        break;
      default:
        general[e.target.name] = e.target.value;
        setGeneral({ ...general });
    }
  }

  function addResumeData(type) {
    if (type === "education") {
      setEducation([
        ...education.map((item) => ({ ...item, active: false })),
        {
          ...templates.education,
          id:
            education.length === 0 ? 0 : education[education.length - 1].id + 1,
        },
      ]);
    } else if (type === "experience") {
      setExperience([
        ...experience.map((item) => ({ ...item, active: false })),
        {
          ...templates.experience,
          id:
            experience.length === 0
              ? 0
              : experience[experience.length - 1].id + 1,
        },
      ]);
    } else {
      setProject([
        ...project.map((item) => ({ ...item, active: false })),
        {
          ...templates.project,
          id: project.length === 0 ? 0 : project[project.length - 1].id + 1,
        },
      ]);
    }
  }

  function deleteResumeData(type, id) {
    switch (type) {
      case "education":
        setEducation((education) => education.filter((item) => item.id !== id));
        break;
      case "experience":
        setExperience((experience) =>
          experience.filter((item) => item.id !== id)
        );
        break;
      default:
        setProject((project) => project.filter((item) => item.id !== id));
    }
  }

  function toggleActive(type, id) {
    const changeActive = (arr, id) => {
      return arr.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      );
    };
    switch (type) {
      case "education":
        setEducation([...changeActive(education, id)]);
        break;
      case "experience":
        setExperience([...changeActive(experience, id)]);
        break;
      case "project":
        setProject([...changeActive(project, id)]);
        break;
    }
  }

  return (
    <div className="app">
      <Input
        addResumeData={addResumeData}
        deleteResumeData={deleteResumeData}
        toggleActive={toggleActive}
        onChange={handleChange}
        general={general}
        education={education}
        experience={experience}
        project={project}
      />
      <Resume
        general={general}
        education={education}
        experience={experience}
        project={project}
      />
    </div>
  );
}
