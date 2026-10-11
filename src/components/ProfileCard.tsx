import { useState } from "react";

export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200">
      {skill.label}
    </span>
  );
};

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
  skills: Skill[];
};

export const ProfileCard = ({
  name,
  role,
  bio,
  avatarUrl,
  email,
  githubUrl,
  skills,
}: ProfileCardProps) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <article
      className={`profile-card rounded-2xl shadow-lg p-6 bg-white border-2 transition-all max-w-sm mx-auto text-center ${
        liked ? "border-red-400 bg-red-50/20" : "border-slate-200"
      }`}
    >
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={`Avatar of ${name}`}
          className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-slate-300"
        />
      )}

      <h2 className="text-xl font-semibold text-slate-900 mt-4">{name}</h2>
      <p className="text-sm text-slate-500 mb-3">{role}</p>
      <p className="text-slate-700 text-sm leading-relaxed mb-4">{bio}</p>

      {/* Список навыков + Empty state */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Skills
        </h3>
        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">No skills listed</p>
        )}
      </div>

      {/* Ссылки */}
      <div className="flex gap-3 justify-center mb-5">
        <a
          href={`mailto:${email}`}
          className="px-4 py-2 rounded-lg bg-slate-100 text-blue-600 text-sm font-medium hover:bg-slate-200 transition-colors"
        >
          Email
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-slate-100 text-blue-600 text-sm font-medium hover:bg-slate-200 transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Кнопка Like на useState */}
      <button
        onClick={() => setLiked(!liked)}
        className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all cursor-pointer ${
          liked
            ? "bg-red-100 border-red-300 text-red-600"
            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
        }`}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </article>
  );
};
