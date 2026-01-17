import { useState } from "react";
import { useBlogs } from "@/hooks/useBlogs";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogImageScroller from "@/components/blog/BlogImageScroller";
import PageContainer from "@/components/layout/PageContainer";
import SplitHero from "@/components/blog/SplitHero";
const FeaturedBlogs = () => {
  const { data: blogs, isLoading } = useBlogs();
  const [selectedId, setSelectedId] = useState<number>();

  if (isLoading || !blogs?.length) {
    return <PageContainer>Loading...</PageContainer>;
  }

  const selectedBlog =
    blogs.find((b) => b.id === selectedId) ?? blogs[0];

  return (
<PageContainer>
  {/* 1️⃣ Split hero */}
  <SplitHero blog={selectedBlog} />

  {/* 3️⃣ Horizontal showcase scroller */}
<section id="explore-more" className="mt-32">
  <h2 className="mb-8 text-3xl font-bold tracking-tight">
    Explore more insights
  </h2>

  <BlogImageScroller
    blogs={blogs}
    selectedId={selectedBlog.id}
    onSelect={setSelectedId}
  />
</section>

</PageContainer>


  );
};

export default FeaturedBlogs;
