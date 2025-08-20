const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x60/3481bd/white?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x60/3481bd/white?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x60/3481bd/white?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x60/3481bd/white?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x60/3481bd/white?text=Partner+5" },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-base font-medium text-center mb-8 text-gray-500">Parceiros que confiam em nosso trabalho</h2>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-x space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;