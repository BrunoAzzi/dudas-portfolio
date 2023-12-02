export function PortfolioItem() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <img
        src="https://via.placeholder.com/300"
        alt="Portfolio"
        className="mb-3"
      />
      <h4 className="font-bold">Projeto 1</h4>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-blue-900 py-10 text-white">
      <h2 className="text-center text-2xl font-bold mb-6">Portfólio</h2>
      <div className="grid md:grid-cols-3 gap-4 px-5">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </section>
  );
}
