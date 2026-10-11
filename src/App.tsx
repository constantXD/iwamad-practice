import { Header } from "./components/Header";
import { ProfileCard, type Skill } from "./components/ProfileCard";
import { Footer } from "./components/Footer";
import "./App.css";

const mySkills: Skill[] = [
  { id: 1, label: "HTML5" },
  { id: 2, label: "CSS3 / Tailwind" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "TypeScript" },
  { id: 5, label: "React" },
];

export function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100 py-6 px-4">
      <Header title="My Profile" />

      <main className="flex justify-center items-center my-auto">
        <ProfileCard
          name="Orazaly Kasymbek"
          role="Aspiring Web Developer"
          bio="I am a 3rd-year university student learning modern web development. Building responsive, accessible UIs with React and TypeScript."
          avatarUrl="https://p7.hiclipart.com/preview/423/562/360/ronnie-coleman-1999-mr-olympia-bodybuilding-most-muscular-bodybuilding.jpg"
          email="k_orazaly@kbtu.kz"
          githubUrl="https://github.com/constantXD"
          skills={mySkills}
        />
      </main>

      <Footer year={2026} author="Orazaly Kasymbek" />
    </div>
  );
}

export default App;
