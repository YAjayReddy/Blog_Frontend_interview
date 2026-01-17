import { useParams, Link } from "react-router-dom";
import { useBlog } from "@/hooks/useBlog";
import PageContainer from "@/components/layout/PageContainer";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: blog, isLoading } = useBlog(id!);
  const [progress, setProgress] = useState(0);

  // ✅ hooks ALWAYS first
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading || !blog) {
    return <PageContainer>Loading article...</PageContainer>;
  }

  const paragraphs = blog.content
    .split("\n")
    .filter(p => p.trim().length > 0);

  return (
    <PageContainer>

      {/* Progress bar */}
      <div
        className="fixed left-0 top-0 z-50 h-[3px] bg-indigo-600"
        style={{ width: `${progress}%` }}
      />

      {/* Top navigation */}
<div className="mb-12 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 backdrop-blur-md">
  
  {/* Back navigation */}
  <Link
    to="/"
    className="flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-indigo-600"
  >
    <span className="text-base">←</span>
    <span>Back to blogs</span>
  </Link>

  {/* Actions */}
  <div className="flex items-center gap-4">
    <button
      onClick={() =>
        navigator.share?.({
          title: blog.title,
          url: location.href,
        })
      }
      className="rounded-lg px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
    >
      Share
    </button>

    <button className="rounded-lg px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
      Bookmark
    </button>
  </div>
</div>

      {/* Hero */}
      <section className="relative mb-24 overflow-hidden rounded-[32px]">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-12 text-white">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
            {blog.category}
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold">
            {blog.title}
          </h1>
        </div>
      </section>
{/* MAIN GRID */}
<section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-[1fr_320px]">

  {/* ARTICLE CONTENT (LEFT) */}
  <div>
    {/* Lead paragraph */}
    <div className="mb-12 rounded-2xl bg-slate-50 px-8 py-6">
      <p className="text-xl leading-relaxed text-slate-800">
        {paragraphs[0]}
      </p>
    </div>

    {/* Main content */}
    <article className="space-y-8">
      {paragraphs.slice(1).map((p, i) => (
        <p
          key={i}
          className="text-lg leading-relaxed text-slate-700"
        >
          {p}
        </p>
      ))}
    </article>
  </div>

  {/* RIGHT SIDEBAR */}
  <aside className="sticky top-32 h-fit space-y-8">

    {/* Meta */}
    <div className="rounded-2xl border bg-white p-6">
      <p className="mb-3 text-sm font-semibold text-slate-900">
        Article info
      </p>

      <div className="space-y-2 text-sm text-slate-600">
        <p><strong>Category:</strong> {blog.category}</p>
        <p><strong>Read time:</strong> ~5 minutes</p>
        <p><strong>Published:</strong> {new Date(blog.date).toLocaleDateString()}</p>
      </div>
    </div>

    {/* About */}
    <div className="rounded-2xl border bg-white p-6">
      <p className="mb-2 text-sm font-semibold text-slate-900">
        About this article
      </p>
      <p className="text-sm text-slate-600">
        Curated insights to help CA aspirants and professionals
        make smarter academic and career decisions.
      </p>
    </div>

    {/* More blogs (TEXT CARDS) */}
<div className="rounded-2xl border bg-white p-6">
  <p className="mb-4 text-sm font-semibold tracking-tight text-slate-900">
    More blogs
  </p>

  <div className="space-y-4">
    {/* Card 1 */}
    <div className="cursor-pointer rounded-xl border bg-slate-50 p-4 transition hover:bg-slate-100">
      <p className="text-sm font-semibold text-slate-900">
        Ace Your CA Finals
      </p>
      <p className="mt-1 text-xs leading-relaxed text-slate-600">
        Smart preparation strategies to clear CA exams in your first attempt.
      </p>
    </div>

    {/* Card 2 */}
    <div className="cursor-pointer rounded-xl border bg-slate-50 p-4 transition hover:bg-slate-100">
      <p className="text-sm font-semibold text-slate-900">
        Understanding Tax Reforms
      </p>
      <p className="mt-1 text-xs leading-relaxed text-slate-600">
        A simplified breakdown of recent tax changes and their implications.
      </p>
    </div>

    {/* Card 3 */}
    <div className="cursor-pointer rounded-xl border bg-slate-50 p-4 transition hover:bg-slate-100">
      <p className="text-sm font-semibold text-slate-900">
        Building a Career in Accounting
      </p>
      <p className="mt-1 text-xs leading-relaxed text-slate-600">
        Key skills and mindset required to succeed in modern accounting roles.
      </p>
    </div>
  </div>
</div>


  </aside>

</section>

    </PageContainer>
  );
};

export default BlogDetail;
