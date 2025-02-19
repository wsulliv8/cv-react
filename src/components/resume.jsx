/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import "./resume.css";

export default function Resume({ general, education, experience, project }) {
  return (
    <div className="resume-wrapper">
      <div className="resume">
        <div className="header flex-contents">
          <h1>{general.name}</h1>
          <h2>{general.title}</h2>
        </div>
        <div className="sidebar flex-contents">
          <h3>Contact</h3>
          <section>
            <a href="">{general.email}</a>
            <p>{general.phone}</p>
            <p>{general.home}</p>
            <a href={general.linkedin}>Linkedin</a>
            <section className="contact"></section>
          </section>
          <h3>Education</h3>
          {education.map((item, index) => {
            return (
              <EducationSection
                key={index}
                education={education[index]}
              ></EducationSection>
            );
          })}
          <h3>Skills</h3>
          <section className="skills"></section>
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
        <i>{education.startDate}</i>
      </p>
      <p>
        <i>{education.endDate}</i>
      </p>
    </section>
  );
}

function ExperienceSection({ experience }) {
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
        <h5>{experience.companyLocation}</h5>
        <h5>
          {experience.workStartDate} - {experience.workEndDate}
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
    <section className="work-experience">
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
