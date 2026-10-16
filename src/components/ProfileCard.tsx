import { Card } from "./ui/Card";
import { LikeButton } from "./LikeButton";

export type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
  skills?: unknown[];
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
    <Card className="profile-card-content">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={`Avatar of ${name}`}
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
      <h2>{name}</h2>
      <p style={{ color: "var(--color-text-muted)" }}>{role}</p>
      <p>{bio}</p>

      <div
        style={{
          display: "flex",
          gap: "var(--space-2)",
          justifyContent: "center",
        }}
      >
        <a href={`mailto:${email}`}>Email</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <div style={{ marginTop: "var(--space-4)" }}>
        <LikeButton />
      </div>
    </Card>
  );
};
