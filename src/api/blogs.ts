import { api } from "./client";
import { Blog } from "@/types/blog";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await api.get("/blogs");
  return res.data;
};
export const getBlogById = async (id: string) => {
    const res = await api.get(`/blogs/${id}`);
    return res.data;
  };
  export const createBlog = async (blog: Omit<Blog, "id">) => {
    const res = await api.post("/blogs", blog);
    return res.data;
  };
  