/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import "./resume.css";

export default function Resume({ general, education }) {
  return (
    <div className="resume-wrapper">
      <div className="resume">
        <div className="header flex-contents">
          <h1>{general.name}</h1>
          <h2>{general.position}</h2>
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
          <section className="work-experience">
            <div>
              <h3>Microsoft</h3>
              <h5>Software Engineer</h5>
            </div>
            <div>
              <h5>Seattle, Washington</h5>
              <h5>January 2016 - Present</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </section>
          <h2>Projects</h2>
          <section className="projects">
            <h3>Resume Builder</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </section>
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
