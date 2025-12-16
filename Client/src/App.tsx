import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

import { LoadingScreen } from "./lib/loadingScreen";
import BlogPostView from "./components/sections/blogPostView";
import Footer from "./components/sections/Footer";
import { BLOG_POSTS } from "./components/sections/blogs";
import MinimalBlogListSection from "./components/sections/blogsSection";
import Portfolio from "./components/Portfolio";

/* ---------------- Blog Post Wrapper ---------------- */
function BlogPostRoute() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="bg-black min-h-screen text-white flex items-center justify-center">
        <p>Post not found</p>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen font-sans selection:bg-gray-800 selection:text-white">
      <BlogPostView post={post} onBack={() => navigate("/blogs")} />
      <Footer />
    </main>
  );
}

/* ---------------- Blogs List Wrapper ---------------- */
function BlogsRoute() {
  const navigate = useNavigate();

  return (
    <main className="bg-black min-h-screen font-sans selection:bg-gray-800 selection:text-white">
      <MinimalBlogListSection onReadBlog={(id) => navigate(`/blogs/${id}`)} />
      <Footer />
    </main>
  );
}

/* ---------------- Home Wrapper ---------------- */
function HomeRoute() {
  const navigate = useNavigate();

  return (
    <main className="bg-black min-h-screen font-sans selection:bg-gray-800 selection:text-white">
      <Portfolio />
    </main>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/blogs" element={<BlogsRoute />} />
      <Route path="/blogs/:id" element={<BlogPostRoute />} />
    </Routes>
  );
}
