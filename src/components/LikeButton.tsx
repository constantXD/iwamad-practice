import { useLikes } from "../context/LikesContext";

export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <button
      onClick={addLike}
      className="px-5 py-2 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all cursor-pointer"
    >
      ❤️ Like ({likes})
    </button>
  );
};
