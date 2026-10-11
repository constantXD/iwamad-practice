export const ContactPage = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-3">Contact Me</h2>
      <p className="text-slate-600 text-sm mb-4">
        Feel free to reach out via email or GitHub.
      </p>
      <div className="flex flex-col gap-2 text-sm font-medium text-blue-600">
        <a href="mailto:k_orazaly@kbtu.kz">k_orazaly@kbtu.kz</a>
        <a
          href="https://github.com/constantXD"
          target="_blank"
          rel="noreferrer"
        >
          github.com/constantXD
        </a>
      </div>
    </div>
  );
};
