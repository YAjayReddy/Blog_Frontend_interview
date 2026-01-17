import { useNavigate } from "react-router-dom";
import { Blog } from "@/types/blog";

const SplitHero = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* glow */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative grid gap-12 px-10 py-20 md:grid-cols-2 md:items-center">
        
        {/* LEFT */}
        <div className="text-white">
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-white/80 backdrop-blur">
            {blog.category}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            {blog.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
    {blog.content.slice(0, 400)}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition"
            >
              Read Article
            </button><br />

            <span className="text-sm text-white/50">
              Updated {new Date(blog.date).toLocaleDateString()}
            </span>
          </div><br />
             <button
  onClick={() => {
    document
      .getElementById("explore-more")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="rounded-xl border border-white/70 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
>
  Explore More Articles
</button>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
