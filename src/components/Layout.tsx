import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100 py-6 px-4">
      <Header />
      <main className="flex justify-center items-center my-auto w-full">
        <Outlet />
      </main>
      <Footer year={2026} author="Orazaly Kasymbek" />
    </div>
  );
};
