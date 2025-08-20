import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "SHM (Structural Health Monitoring) no Setor Ferroviário: da Inspeção Visual ao Monitoramento Inteligente",
      image: "https://images.unsplash.com/photo-1703955516799-908293c45470?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Gêmeos Digitais na Engenharia: a Ponte entre o Físico e o Digital",
      image: "https://images.unsplash.com/photo-1620103658516-86f82c9ded4b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Indústria 4.0: a Evolução que Está Transformando a Engenharia",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Manutenção Preditiva em Pontes",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-border pb-8">
                <div className="max-w-md mx-auto text-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                </div>
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