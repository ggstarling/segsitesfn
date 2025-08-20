import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "SHM no Setor Ferroviário: Da Inspeção Visual ao Monitoramento Inteligente",
      image: "https://images.unsplash.com/photo-1729606883845-95ded8f9e3c5?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Gêmeos Digitais na Engenharia: Ponte entre o Físico e o Digital",
      image: "https://images.unsplash.com/photo-1620103658516-86f82c9ded4b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Indústria 4.0: a Evolução que Está Transformando a Engenharia",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "A Importância da Manutenção Preditiva e do Monitoramento Contínuo em Infraestruturas",
      image: "https://images.unsplash.com/photo-1485310818226-f01c4269687f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Posts</h2>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-border pb-8">
                <div className="max-w-md mx-auto text-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-sm leading-tight line-clamp-3">{post.title}</h3>
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