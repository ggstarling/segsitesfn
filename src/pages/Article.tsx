import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <article>
            <header className="mb-8 text-center">
              <h1 className="text-3xl font-normal mb-6 leading-tight">
                {post.title}
              </h1>
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg"
              />
            </header>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground text-center py-8">
                {post.content}
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;