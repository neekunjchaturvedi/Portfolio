import React, { useEffect } from "react";
import { BLOG_POSTS } from "./blogs";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MinimalBlogListSectionProps {
  onReadBlog: (id: string) => void;
}

const MinimalBlogListSection: React.FC<MinimalBlogListSectionProps> = ({
  onReadBlog,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const nav = useNavigate();

  return (
    <section id="blogs" className="py-12 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl pt-12">
        <button
          onClick={() => {
            nav("/");
          }}
          className="group flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-mono text-sm">Return to Base</span>
        </button>
        <h2 className="text-lg font-mono text-emerald-400 mb-12 tracking-wider uppercase opacity-80">
          // Engineering Journal
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onReadBlog(post.id)}
              className="group cursor-pointer border-l-2 border-gray-800 pl-6 hover:border-emerald-400 transition-colors duration-300 py-4"
            >
              <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalBlogListSection;
