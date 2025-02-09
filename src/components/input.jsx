/* eslint-disable react/prop-types */
import { act, useState, Children } from "react";
import toggleCollapse from "../assets/triangle.svg";
import "./input.css";

export default function Input({ onChange, general, education, workHistory }) {
  const [activeId, setActiveId] = useState(0);

  function collapse(id) {
    if (id === activeId) setActiveId(null);
    else setActiveId(id);
  }

  return (
    <div className="input-wrapper">
      <div className="input">
        <InputCard
          id={0}
          activeId={activeId}
          onClick={collapse}
          title={"General Information"}
        >
          <General onChange={onChange} general={general} />
        </InputCard>
        <InputCard
          id={1}
          activeId={activeId}
          onClick={collapse}
          title={"Education"}
        >
          <Education onChange={onChange} education={education} />
        </InputCard>
        <InputCard
          id={2}
          activeId={activeId}
          onClick={collapse}
          title={"Work History"}
        >
          <Practical onChange={onChange} workHistory={workHistory} />
        </InputCard>
      </div>
    </div>
  );
}

function InputCard({ children, id, activeId, onClick, title }) {
  const [isSaved, setSaved] = useState(false);

  function saveCard(e) {
    setSaved(true);
  }

  return (
    <div className="inputCard">
      <h2>{title}</h2>
      {!isSaved && (
        <div className={id === activeId ? "expand" : "contract"}>
          {children}
        </div>
      )}

      <button type="button" onClick={saveCard}>
        Save
      </button>
      <button className="collapse" onClick={() => onClick(id)}>
        <img
          className={id === activeId ? "active" : "inactive"}
          src={toggleCollapse}
          alt="triangle"
        />
      </button>
    </div>
  );
}

function General({ onChange, general }) {
  return (
    <>
      <form action="">
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={onChange}
            value={general.name}
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            onChange={onChange}
            value={general.position}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={onChange}
            value={general.email}
          />
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            onChange={onChange}
            value={general.phone}
          />
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            onChange={onChange}
            value={general.location}
          />
          <label htmlFor="linkedin">Linkedin: </label>
          <input
            type="url"
            id="linkedin"
            onChange={onChange}
            value={general.linkedin}
          />
        </fieldset>
      </form>
    </>
  );
}

function Education({ onChange, education }) {
  return (
    <>
      <form action="">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          onChange={onChange}
          value={education.school}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={onChange}
          value={education.location}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          onChange={onChange}
          value={education.degree}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          onChange={onChange}
          value={education.startDate}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          onChange={onChange}
          value={education.endDate}
        />
      </form>
    </>
  );
}

function Practical() {
  return <h2>Work History</h2>;
}
