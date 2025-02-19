/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import toggleCollapse from "../assets/triangle.svg";
import "./input.css";

export default function Input({
  addResumeData,
  onChange,
  general,
  education,
  experience,
}) {
  const [activeId, setActiveId] = useState(0);
  const [educationList, setEducationList] = useState([[0, true]]);

  function collapse(id) {
    if (id === activeId) setActiveId(null);
    else setActiveId(id);
  }

  function addCard() {
    setEducationList([...educationList, [educationList.length, true]]);
    addResumeData("education");
  }
  return (
    <div className="input-wrapper">
      <div className="input">
        <InputCard
          id={0}
          activeId={activeId}
          onClick={collapse}
          title={"General Information"}
          addCard={addCard}
        >
          <General
            key={0}
            onChange={onChange}
            resumeData={general}
            show={true}
          />
        </InputCard>
        <InputCard
          id={1}
          activeId={activeId}
          onClick={collapse}
          title={"Education"}
          addCard={addCard}
        >
          {/*           {educationList.map((item) => (
            <Education
              key={item[0]}
              id={item[0]}
              onChange={onChange}
              resumeData={education[item[0]]}
              show={item[1]}
            />
          ))} */}
          {education.map((item, index) => (
            <Education
              key={index}
              id={index}
              onChange={onChange}
              resumeData={item}
              show={true}
            />
          ))}
        </InputCard>
        <InputCard
          id={2}
          activeId={activeId}
          onClick={collapse}
          title={"Experience"}
          addCard={addCard}
        >
          <Practical
            key={0}
            onChange={onChange}
            resumeData={experience}
            show={true}
          />
        </InputCard>
      </div>
    </div>
  );
}

function SavedCard({ formData, changeStatus }) {
  return (
    <>
      <p>{Object.entries(formData)[0][1]}</p>
      <button onClick={changeStatus}>Edit</button>
    </>
  );
}

function InputCard({ children, id, activeId, onClick, title, addCard }) {
  const [isSaved, setSaved] = useState(false);

  if (title == "Education") console.log(children);
  const filteredChildren = (
    Array.isArray(children) ? children : [children]
  ).filter((child) => child.props.resumeData.active);

  function changeStatus(e) {
    setSaved(!isSaved);
  }

  return (
    <div className="inputCard">
      <h2>{title}</h2>
      {isSaved &&
        id === activeId &&
        /*         <div className="savedCard">
          <SavedCard
            formData={formData}
            changeStatus={changeStatus}
          ></SavedCard>
        </div> */
        (Array.isArray(children) ? children : [children]).map((child, i) => (
          <div key={i} className="savedCard">
            <p>{Object.entries(child.props.resumeData)[0][1]}</p>
            <button onClick={changeStatus}>Edit</button>
          </div>
        ))}

      {!isSaved && id === activeId && (
        <>
          <div>{filteredChildren}</div>
          <button type="button" onClick={changeStatus}>
            Save
          </button>
        </>
      )}

      <button className="collapse" onClick={() => onClick(id)}>
        <img
          className={id === activeId ? "active" : "inactive"}
          src={toggleCollapse}
          alt="triangle"
        />
      </button>
      {title !== "General Information" && isSaved && id === activeId && (
        <button
          onClick={() => {
            addCard();
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
    <>
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
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            onChange={onChange}
            value={resumeData.position}
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
            value={resumeData.location}
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
    </>
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
        onChange={(e) => onChange(e, id)}
        value={resumeData.school}
      />
      <label htmlFor={useId()}>Location</label>
      <input
        type="text"
        id={useId()}
        name="location"
        onChange={(e) => onChange(e, id)}
        value={resumeData.location}
      />
      <label htmlFor={useId()}>Degree</label>
      <input
        type="text"
        id={useId()}
        name="degree"
        onChange={(e) => onChange(e, id)}
        value={resumeData.degree}
      />
      <label htmlFor={useId()}>Start Date</label>
      <input
        type="date"
        id={useId()}
        name="startDate"
        onChange={(e) => onChange(e, id)}
        value={resumeData.startDate}
      />
      <label htmlFor={useId()}>End Date</label>
      <input
        type="date"
        id={useId()}
        name="endDate"
        onChange={(e) => onChange(e, id)}
        value={resumeData.endDate}
      />
    </form>
  );
}

function Practical() {
  return <h2>Work History</h2>;
}
