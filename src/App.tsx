import { Routes, Route } from "react-router-dom";
import SideNav from "@/components/layout/SideNav";
import FeaturedBlogs from "@/pages/FeaturedBlog";
import BlogDetail from "@/pages/BlogDetail";
import CreateBlog from "@/pages/CreateBlog";

function App() {
  return (
    <div className="flex">
      {/* Left vertical nav */}
      <SideNav />

      {/* Main content */}
      <main className="ml-64 w-full">
        <Routes>
          <Route path="/" element={<FeaturedBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
