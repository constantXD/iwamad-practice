import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
      <h2 className="text-2xl font-bold text-red-500 mb-2">404</h2>
      <p className="text-slate-600 text-sm mb-4">Page not found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
};
