import { Tag } from "../components/ui/Tag";

type Skill = {
  id: number;
  label: string;
};

const mySkills: Skill[] = [
  { id: 1, label: "HTML5" },
  { id: 2, label: "CSS3 / Box Model" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "TypeScript" },
  { id: 5, label: "React" },
  { id: 6, label: "Design Tokens" },
];

export const SkillsPage = () => {
  return (
    <div style={{ padding: "var(--space-6)", textAlign: "center" }}>
      <h2 style={{ marginBottom: "var(--space-4)" }}>My Skills</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          justifyContent: "center",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {mySkills.map((skill) => (
          <Tag key={skill.id} label={skill.label} />
        ))}
      </div>
    </div>
  );
};
