import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Blog</h2>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-border pb-8">
                <Link 
                  to={`/article/${post.slug}`}
                  className="block max-w-md mx-auto text-center hover:opacity-90 transition-opacity"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-sm leading-tight line-clamp-3">{post.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;