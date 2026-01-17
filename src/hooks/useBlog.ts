import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";
import { Blog } from "@/types/blog";

export const useBlog = (id: string) => {
  return useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};
