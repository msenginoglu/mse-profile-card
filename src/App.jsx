import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <main className="App">
      <img
        src="https://media.licdn.com/dms/image/D5603AQHN_Z2wpkdmqA/profile-displayphoto-shrink_800_800/0/1691747396902?e=1701907200&v=beta&t=SsAUYlmFkHrpMzV0D8J0MmbTd_6sUZzgD09KV3mFP5M"
        alt="Profile picture"
        className="profile-picture"
      />
      <h1 className="name">Muhammet Şükrü ENGİNOĞLU</h1>
      <p className="desc">
        Front-end web geliştiriciyim. Front-end teknolojilerini yakından takip
        ediyorum ve kullanıyorum. Özellikle JavaScript kütüphanesi olan React'i
        çalışmalarımda kullanıyorum. Statik web siteleri için HTML-CSS-JS tercih
        ediyorum. Ayrıca back-end teknolojilerine ilgim var. Full-stack
        geliştirme ileriki hedeflerim arasında.
      </p>
      <Skills />
    </main>
  );
}

const skillsData = [
  { skill: "HTML-CSS", level: "Intermediate" },
  { skill: "Javascript", level: "Intermediate" },
  { skill: "React", level: "Advanced" },
  { skill: "Web Design", level: "Beginner" },
  { skill: "Git & GitHub", level: "Beginner" },
];

const levelSigns = [
  { beginner: "👶" },
  { intermediate: "👍" },
  { advanced: "💪" },
];

const Skills = () => {
  return (
    <section className="skills">
      <p className="skills-list">
        {skillsData.map((skill) => (
          <span key={skill.skill}>
            {skill.skill}

            {skill.level === "Beginner"
              ? levelSigns[0].beginner
              : skill.level === "Intermediate"
              ? levelSigns[1].intermediate
              : skill.level === "Advanced"
              ? levelSigns[2].advanced
              : null}
          </span>
        ))}
      </p>
    </section>
  );
};
