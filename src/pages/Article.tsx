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

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <article>
            <header className="mb-8 text-center">
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg mb-12"
              />
              <h1 className="text-2xl font-semibold leading-tight">
                {post.title}
              </h1>
            </header>
            
            <div className="prose prose-lg mx-auto">
              {post.content?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-left py-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Article;