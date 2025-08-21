const Partners = () => {
  const partners = [
    { name: "Minerva", logo: "/lovable-uploads/20cbae7f-f7b7-4900-842d-0d8f5edfcf51.png" },
    { name: "UFSC", logo: "/lovable-uploads/eb140fb0-3369-4134-8b44-792334355803.png" },
    { name: "CORE", logo: "/lovable-uploads/4378e337-2ed5-4d5f-bbb2-9e943c44ba34.png" },
    { name: "New Partner", logo: "/lovable-uploads/c11fb548-4954-4a0f-a0bc-c3eb4e54166d.png" },
  ];

  return (
    <section className="pt-4 pb-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-base font-medium text-center mb-10 text-gray-500">Parceiros que confiam em nosso trabalho</h2>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-infinite space-x-24 items-center">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-48 w-auto max-w-[400px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
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