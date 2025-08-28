const Partners = () => {
  const partners = [
    { name: "Minerva", logo: "/lovable-uploads/b8a93f3f-2525-4563-96e1-766cdc8561ea.png" },
    { name: "UFSC", logo: "/lovable-uploads/f10d599c-dcf1-4a4e-9803-727d736b4127.png" },
    { name: "Kartado", logo: "/lovable-uploads/b00b9117-68a3-4507-9d1d-163b8339fc01.png" },
    { name: "CORE", logo: "/lovable-uploads/21b38f69-e678-4ff8-8af6-2b991e37ecbd.png" },
    { name: "Fundo Catarina", logo: "/lovable-uploads/532a84b5-b3e0-4188-b585-cb1b277e4e64.png" },
  ];

  return (
    <section className="pt-6 md:pt-8 pb-0 bg-gray-200">
      <div className="w-full">
        <h2 className="text-sm md:text-base font-normal text-center -mb-4 -mt-2 relative z-10 text-gray-500">Parceiros que confiam em nosso trabalho</h2>

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