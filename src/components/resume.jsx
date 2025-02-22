/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import "./resume.css";

export default function Resume({ general, education, experience, project }) {
  return (
    <div className="resume-wrapper">
      <div className="resume">
        <div className="header flex-contents">
          <h1>{general.name}</h1>
          <h3>{general.title}</h3>
        </div>
        <div className="sidebar flex-contents">
          <h2>Contact</h2>
          <section>
            <span>
              <a href="">{general.email}</a>{" "}
              <span className="material-symbols-outlined resumeIcon">mail</span>
            </span>
            <span>
              <p>{general.phone}</p>
              <span className="material-symbols-outlined resumeIcon">
                phone
              </span>
            </span>
            <span>
              <p>{general.home}</p>
              <span className="material-symbols-outlined resumeIcon">
                home_pin
              </span>
            </span>
            <span>
              <a href={general.linkedin}>Linkedin</a>
              <span className="material-symbols-outlined resumeIcon">link</span>
            </span>
            <section className="contact"></section>
          </section>
          <h2>Education</h2>
          {education.map((item, index) => {
            return (
              <EducationSection
                key={index}
                education={education[index]}
              ></EducationSection>
            );
          })}
        </div>
        <div className="resume-body flex-contents">
          <h2>Work Experience</h2>
          {experience.map((item, index) => {
            return (
              <ExperienceSection
                key={index}
                experience={item}
              ></ExperienceSection>
            );
          })}
          <h2>Projects</h2>
          {project.map((item, index) => {
            return <ProjectSection key={index} project={item}></ProjectSection>;
          })}
        </div>
      </div>
    </div>
  );
}

function EducationSection({ education }) {
  const formatDate = (date) => {
    const [year, month] = date.split("-");
    return new Date(year, month - 1).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="education">
      <h4>{education.school}</h4>
      <p>
        <i>{education.location}</i>
      </p>
      <p>
        <i>{education.degree}</i>
      </p>
      <p>
        <i>
          {formatDate(education.startDate)} - {formatDate(education.endDate)}
        </i>
      </p>
    </section>
  );
}

function ExperienceSection({ experience }) {
  const formatDate = (date) => {
    const [year, month] = date.split("-");
    return new Date(year, month - 1).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  function createBullets(str) {
    return str ? str.split("\n") : [];
  }

  return (
    <section className="work-experience">
      <div>
        <h3>{experience.company}</h3>
        <h5>{experience.position}</h5>
      </div>
      <div>
        <i>
          <h5>{experience.companyLocation}</h5>
        </i>
        <h5>
          <i>
            {formatDate(experience.workStartDate)} -{" "}
            {formatDate(experience.workEndDate)}
          </i>
        </h5>
      </div>
      <ul>
        {createBullets(experience.bullets).map((bullet, index) => (
          <li key={`${bullet}-${index}`}>{bullet} </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectSection({ project }) {
  function createBullets(str) {
    return str ? str.split("\n") : [];
  }

  return (
    <section className="project">
      <div>
        <h3>{project.project}</h3>
      </div>
      <ul>
        {createBullets(project.description).map((bullet, index) => (
          <li key={`${bullet}-${index}`}>{bullet} </li>
        ))}
      </ul>
    </section>
  );
}
