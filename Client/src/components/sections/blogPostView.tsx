import React, { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter } from "lucide-react";
import type { BlogPost } from "./blogs";

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-mono text-sm">Return to Journal</span>
        </button>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-mono text-emerald-400 mb-6">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none border-t border-gray-900 pt-12 text-gray-300">
          {post.content}
        </article>

        <div className="mt-20 pt-12 border-t border-gray-900 flex justify-between items-center">
          <span className="text-gray-500 text-sm">Thanks for reading!</span>
          <div className="flex gap-4">
            <button
              className="text-gray-500 hover:text-blue-400 transition-colors"
              onClick={() => {
                window.open("https://x.com/neekunj_ch");
              }}
            >
              <Twitter size={20} />
            </button>
            <button
              className="text-gray-500 hover:text-blue-600 transition-colors"
              onClick={() => {
                window.open("https://linkedin.com/in/neekunj-chaturvedi");
              }}
            >
              <Linkedin size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
