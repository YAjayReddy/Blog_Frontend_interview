import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { useCreateBlog } from "@/hooks/useCreateBlog";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useCreateBlog();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    date: new Date().toISOString(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <PageContainer>

      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Create a new blog
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Write and publish insights for CA aspirants and professionals.
          Keep it clear, practical, and impactful.
        </p>
      </div>

      {/* Editor card */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl space-y-8 rounded-3xl border bg-white p-10 shadow-sm"
      >
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Blog title
          </label>
          <input
            name="title"
            placeholder="Eg: How to crack CA Finals in first attempt"
            className="w-full rounded-xl border px-4 py-3 text-lg focus:border-indigo-500 focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>
          <input
            name="category"
            placeholder="Eg: Exams, Career, Taxation"
            className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Short description
          </label>
          <textarea
            name="description"
            placeholder="A short summary that appears in blog listings..."
            rows={3}
            className="w-full resize-none rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Blog content
          </label>
          <textarea
            name="content"
            placeholder="Start writing your article here..."
            rows={10}
            className="w-full rounded-2xl border px-4 py-4 text-base leading-relaxed focus:border-indigo-500 focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t pt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Cancel
          </button>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Publishing…" : "Publish blog"}
          </Button>
        </div>
      </form>
    </PageContainer>
  );
};

export default CreateBlog;
