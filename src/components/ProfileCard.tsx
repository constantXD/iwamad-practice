import type { Skill } from "./SkillBadge";
import { LikeButton } from "./LikeButton";

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
}: ProfileCardProps) => {
  return (
    <article className="profile-card rounded-2xl shadow-lg p-6 bg-white border-2 border-slate-200 transition-all max-w-sm mx-auto text-center">
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

      <LikeButton />
    </article>
  );
};
