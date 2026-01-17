import { Blog } from "@/types/blog";

const FeaturedBlog = ({ blog }: { blog: Blog }) => {
  return (
    <section className="w-full">
        <div
  key={blog.id}
  className="animate-fadeIn"
>
  <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl">
    <img
      src={blog.coverImage}
      alt={blog.title}
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* futuristic overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />

    <div className="relative mx-auto flex h-full max-w-7xl items-end px-8 pb-10 text-white">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
          {blog.category}
        </span>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight">
          {blog.title}
        </h1>

        <p className="mt-4 text-base text-white/90">
          {blog.description}
        </p>
      </div>
    </div>
  </div>

  {/* content */}
<section className="mx-auto mt-24 max-w-3xl">
  <div className="rounded-3xl bg-white px-10 py-14 shadow-sm">
  </div>
</section>
</div>
    </section>
  );
};

export default FeaturedBlog;
