import { Blog } from "@/types/blog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
      {/* Category */}
      <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
        {blog.category}
      </span>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-sm text-slate-600">
        {blog.description}
      </p>

      {/* Action */}
      <div className="mt-4">
        <Link to={`/blogs/${blog.id}`}>
          <Button variant="outline" size="sm">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
