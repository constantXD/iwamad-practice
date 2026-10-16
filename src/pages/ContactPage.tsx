export const ContactPage = () => {
  return (
    <div style={{ padding: "var(--space-6)", textAlign: "center" }}>
      <h2 style={{ marginBottom: "var(--space-4)" }}>Contact Me</h2>
      <p
        style={{
          color: "var(--color-text-muted)",
          marginBottom: "var(--space-4)",
        }}
      >
        Feel free to reach out via email or GitHub.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-3, 12px)",
        }}
      >
        <a
          href="mailto:k_orazaly@kbtu.kz"
          style={{
            color: "var(--color-primary)",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          k_orazaly@kbtu.kz
        </a>

        <a
          href="https://github.com/constantXD"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "var(--color-primary)",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          github.com/constantXD
        </a>
      </div>
    </div>
  );
};
