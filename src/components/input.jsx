/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import toggleCollapse from "../assets/triangle.svg";
import "./input.css";

export default function Input({
  addResumeData,
  deleteResumeData,
  onChange,
  toggleActive,
  general,
  education,
  experience,
  project,
}) {
  const [activeId, setActiveId] = useState(0);

  function changeActiveId(id) {
    if (id === activeId) setActiveId(null);
    else setActiveId(id);
  }

  function addCard(title) {
    addResumeData(title.toLowerCase());
  }
  return (
    <div className="input-wrapper">
      <div className="input">
        <InputCard
          id={0}
          activeId={activeId}
          changeActiveId={changeActiveId}
          toggleActive={toggleActive}
          title={"General Information"}
          addCard={addCard}
          deleteCard={deleteResumeData}
        >
          <General key={0} onChange={onChange} resumeData={general} />
        </InputCard>
        <InputCard
          id={1}
          activeId={activeId}
          changeActiveId={changeActiveId}
          toggleActive={toggleActive}
          title={"Education"}
          addCard={addCard}
          deleteCard={deleteResumeData}
        >
          {education.map((item, index) => (
            <Education
              key={index}
              id={item.id}
              onChange={onChange}
              resumeData={item}
            />
          ))}
        </InputCard>
        <InputCard
          id={2}
          activeId={activeId}
          changeActiveId={changeActiveId}
          toggleActive={toggleActive}
          title={"Experience"}
          addCard={addCard}
          deleteCard={deleteResumeData}
        >
          {experience.map((item, index) => (
            <Experience
              key={index}
              id={item.id}
              onChange={onChange}
              resumeData={item}
            />
          ))}
        </InputCard>
        <InputCard
          id={3}
          activeId={activeId}
          changeActiveId={changeActiveId}
          toggleActive={toggleActive}
          title={"Projects"}
          addCard={addCard}
          deleteCard={deleteResumeData}
        >
          {project.map((item, index) => (
            <Project
              key={index}
              id={item.id}
              onChange={onChange}
              resumeData={item}
            />
          ))}
        </InputCard>
      </div>
    </div>
  );
}

function InputCard({
  children,
  id,
  activeId,
  changeActiveId,
  toggleActive,
  title,
  addCard,
  deleteCard,
}) {
  const [isSaved, setSaved] = useState(false);

  const filteredChildren = (
    Array.isArray(children) ? children : [children]
  ).filter((child) => child.props.resumeData.active);

  function changeStatus() {
    setSaved(!isSaved);
  }
  return (
    <div className="inputCard">
      <h2>{title}</h2>
      {isSaved &&
        id === activeId &&
        (Array.isArray(children) ? children : [children]).map((child, i) => (
          <div key={i} className="savedCard">
            <p>{Object.entries(child.props.resumeData)[0][1]}</p>
            <button
              onClick={() => {
                changeStatus();
                toggleActive(title.toLowerCase(), child.props.id);
              }}
            >
              Edit
            </button>
          </div>
        ))}

      {!isSaved && id === activeId && (
        <>
          <div>{filteredChildren}</div>
          <div className="cardButtons">
            <button type="button" onClick={changeStatus}>
              Save
            </button>
            <button
              onClick={() => {
                deleteCard(title.toLowerCase(), filteredChildren[0].props.id);
                changeStatus();
              }}
            >
              Cancel
            </button>
          </div>
        </>
      )}

      <button className="collapse" onClick={() => changeActiveId(id)}>
        <img
          className={id === activeId ? "active" : "inactive"}
          src={toggleCollapse}
          alt="triangle"
        />
      </button>
      {title !== "General Information" && isSaved && id === activeId && (
        <button
          className="cardButtons"
          onClick={() => {
            addCard(title);
            changeStatus();
          }}
        >
          Add {title}
        </button>
      )}
    </div>
  );
}

function General({ onChange, resumeData }) {
  return (
    <form action="">
      <fieldset>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          value={resumeData.name}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={onChange}
          value={resumeData.title}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          value={resumeData.email}
        />
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={onChange}
          value={resumeData.phone}
        />
        <label htmlFor="home">Location: </label>
        <input
          type="text"
          id="home"
          name="home"
          onChange={onChange}
          value={resumeData.home}
        />
        <label htmlFor="linkedin">Linkedin: </label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          onChange={onChange}
          value={resumeData.linkedin}
        />
      </fieldset>
    </form>
  );
}

function Education({ id, onChange, resumeData }) {
  return (
    <form action="">
      <label htmlFor={useId()}>School</label>
      <input
        type="text"
        id={useId()}
        name="school"
        onChange={(e) => onChange(e, "education", id)}
        value={resumeData.school}
      />
      <label htmlFor={useId()}>Location</label>
      <input
        type="text"
        id={useId()}
        name="location"
        onChange={(e) => onChange(e, "education", id)}
        value={resumeData.location}
      />
      <label htmlFor={useId()}>Degree</label>
      <input
        type="text"
        id={useId()}
        name="degree"
        onChange={(e) => onChange(e, "education", id)}
        value={resumeData.degree}
      />
      <label htmlFor={useId()}>Start Date</label>
      <input
        type="date"
        id={useId()}
        name="startDate"
        onChange={(e) => onChange(e, "education", id)}
        value={resumeData.startDate}
      />
      <label htmlFor={useId()}>End Date</label>
      <input
        type="date"
        id={useId()}
        name="endDate"
        onChange={(e) => onChange(e, "education", id)}
        value={resumeData.endDate}
      />
    </form>
  );
}

function Experience({ id, onChange, resumeData }) {
  return (
    <form action="">
      <label htmlFor={useId()}>Company</label>
      <input
        type="text"
        id={useId()}
        name="company"
        onChange={(e) => onChange(e, "experience", id)}
        value={resumeData.company}
      />
      <label htmlFor={useId()}>Location</label>
      <input
        type="text"
        id={useId()}
        name="companyLocation"
        onChange={(e) => onChange(e, "experience", id)}
        value={resumeData.companyLocation}
      />
      <label htmlFor={useId()}>Position</label>
      <input
        type="text"
        id={useId()}
        name="position"
        onChange={(e) => onChange(e, "experience", id)}
        value={resumeData.position}
      />
      <label htmlFor={useId()}>Bullets</label>
      <textarea
        id={useId()}
        name="bullets"
        onChange={(e) => onChange(e, "experience", id)}
        value={resumeData.bullets}
      />
      <label htmlFor={useId()}>Start Date</label>
      <input
        type="date"
        id={useId()}
        name="workStartDate"
        onChange={(e) => onChange(e, "experience", id)}
        value={resumeData.workStartDate}
      />
      <label htmlFor={useId()}>End Date</label>
      <input
        type="date"
        id={useId()}
        name="workEndDate"
        onChange={(e) => onChange(e, "experience", id)}
        value={resumeData.workEndDate}
      />
    </form>
  );
}

function Project({ id, onChange, resumeData }) {
  return (
    <form action="">
      <label htmlFor={useId()}>Project</label>
      <input
        type="text"
        id={useId()}
        name="project"
        onChange={(e) => onChange(e, "project", id)}
        value={resumeData.project}
      />
      <label htmlFor={useId()}>Bullets</label>
      <textarea
        id={useId()}
        name="description"
        onChange={(e) => onChange(e, "project", id)}
        value={resumeData.description}
      />
    </form>
  );
}
