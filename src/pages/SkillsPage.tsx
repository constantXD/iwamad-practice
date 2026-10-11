import { SkillBadge, type Skill } from "../components/SkillBadge";

const mySkills: Skill[] = [
  { id: 1, label: "HTML5" },
  { id: 2, label: "CSS3 / Tailwind" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "TypeScript" },
  { id: 5, label: "React" },
  { id: 6, label: "React Router" },
];

export const SkillsPage = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-4">My Skills</h2>
      {mySkills.length > 0 ? (
        <div className="flex flex-wrap gap-2 justify-center">
          {mySkills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <p className="text-xs text-slate-400 italic">No skills listed</p>
      )}
    </div>
  );
};
