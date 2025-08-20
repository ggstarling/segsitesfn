import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Posts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3).concat(
    posts.slice(0, Math.max(0, currentIndex + 3 - posts.length))
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Posts</h2>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visiblePosts.map((post, index) => (
              <div key={`${post.id}-${index}`} className="bg-card rounded-lg overflow-hidden shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm leading-tight line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Posts;