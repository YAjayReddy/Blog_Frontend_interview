import PageContainer from "@/components/layout/PageContainer";
import BlogCard from "@/components/blog/BlogCard";
import { useBlogs } from "@/hooks/useBlogs";

const Home = () => {
  const { data, isLoading, isError } = useBlogs();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold tracking-tight">
        Latest Blogs
      </h1>
      <p className="mt-2 text-slate-600">
        Stay updated with the latest insights.
      </p>

      {/* States */}
      {isLoading && (
        <p className="mt-8 text-slate-500">Loading blogs...</p>
      )}

      {isError && (
        <p className="mt-8 text-red-500">
          Failed to load blogs.
        </p>
      )}

      {data && data.length === 0 && (
        <p className="mt-8 text-slate-500">
          No blogs available.
        </p>
      )}

      {/* Blog Grid */}
      {data && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default Home;
