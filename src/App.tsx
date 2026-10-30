import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EventsPage } from "./pages/EventsPage";
import { EventDetailsPage } from "./pages/EventDetailsPage";
import "./App.css";
import { RegisterPage } from "./pages/RegisterPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:eventId" element={<EventDetailsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
