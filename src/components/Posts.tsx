import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";

const Posts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextMobileSlide();
    }
    if (isRightSwipe) {
      prevMobileSlide();
    }
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + 4).concat(
    posts.slice(0, Math.max(0, currentIndex + 4 - posts.length))
  );

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-8 md:mb-12">Últimas Postagens</h2>

        {/* Mobile Single-Item Carousel */}
        <div 
          ref={mobileCarouselRef}
          className="relative md:hidden flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={prevMobileSlide}
            className="flex-shrink-0 mr-4 transition-colors duration-200"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-600 hover:text-gray-800"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          {/* News Item */}
          <Link 
            to={`/article/${posts[mobileIndex].slug}`}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full max-w-xs"
          >
            <img
              src={posts[mobileIndex].image}
              alt={posts[mobileIndex].title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm leading-tight line-clamp-2 font-normal">
                {posts[mobileIndex].id === 4 
                  ? "A importância da Manutenção Preditiva e do Monitoramento Contínuo em..." 
                  : posts[mobileIndex].title}
              </h3>
            </div>
          </Link>

          {/* Right Arrow */}
          <button
            onClick={nextMobileSlide}
            className="flex-shrink-0 ml-4 transition-colors duration-200"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-600 hover:text-gray-800"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        {/* Desktop Multi-Item Carousel */}
        <div className="relative hidden md:flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 mr-6 p-3 transition-colors duration-200 hover:text-[#3481bd]"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          {/* News Grid */}
          <div className="grid grid-cols-4 gap-12 flex-1 max-w-5xl">
            {visiblePosts.map((post, index) => (
              <Link 
                key={`${post.id}-${index}`} 
                to={`/article/${post.slug}`}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-28 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-xs leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 ml-6 p-3 transition-colors duration-200 hover:text-[#3481bd]"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Posts;