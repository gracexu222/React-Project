import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
const Avatar = () => {
  return <img className="avatar" src="IMG_1443.JPG" alt="Grace Xu" />;
};
const Intro = () => {
  return (
    <div>
      <h1>Grace Xu</h1>
      <p>Frontend React engineer</p>
    </div>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list" key={skills.id}>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
};
const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🦁"}
        {level === "intermediate" && "🐝"}
        {level === "advanced" && "🪲"}
      </span>
    </div>
  );
};

export default App;
