import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";

const Posts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const nextMobileSlide = () => {
    setMobileIndex((prev) => (prev + 1) % posts.length);
  };

  const prevMobileSlide = () => {
    setMobileIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + 4).concat(
    posts.slice(0, Math.max(0, currentIndex + 4 - posts.length))
  );

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-8 md:mb-12">Últimas Postagens</h2>

        {/* Mobile Single-Item Carousel */}
        <div className="relative md:hidden">
          <div className="flex justify-center">
            <Link 
              to={`/article/${posts[mobileIndex].slug}`}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full max-w-sm"
            >
              <img
                src={posts[mobileIndex].image}
                alt={posts[mobileIndex].title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base leading-tight line-clamp-3 font-medium">
                  {posts[mobileIndex].title}
                </h3>
              </div>
            </Link>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevMobileSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextMobileSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-2"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Desktop Multi-Item Carousel */}
        <div className="relative hidden md:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {visiblePosts.map((post, index) => (
              <Link 
                key={`${post.id}-${index}`} 
                to={`/article/${post.slug}`}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm leading-tight line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </Link>
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