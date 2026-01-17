import { Blog } from "@/types/blog";

interface Props {
  blogs: Blog[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

const BlogImageScroller = ({ blogs, selectedId, onSelect }: Props) => {
  return (
   <div className="mt-20">
  <h3 className="mb-6 text-lg font-semibold text-slate-800">
    Explore more articles
  </h3>

<div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
    {blogs.map((blog) => {
      const active = blog.id === selectedId;

      return (
        <button
          key={blog.id}
          onClick={() => onSelect(blog.id)}
          className={`relative h-[460px] w-[300px] shrink-0 overflow-hidden rounded-2xl transition-all duration-300
            ${active ? "ring-4 ring-indigo-500 scale-[1.03]" : "hover:scale-[1.02]"}`}
        >
          <img
            src={blog.coverImage}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="relative flex h-full flex-col justify-end p-5 text-left text-white">
            <h4 className="text-xl font-bold leading-snug">
              {blog.title}
            </h4>
            <p className="mt-1 text-sm opacity-80">
              {blog.category}
            </p>
          </div>
        </button>
      );
    })}
  </div>
</div>

  );
};

export default BlogImageScroller;
