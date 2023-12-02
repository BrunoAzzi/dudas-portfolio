export function ServiceCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="text-xl font-bold mb-3">Telemedicina</h3>
      <p className="mb-3">
        Descrição curta do serviço oferecido. Esse texto é um resumo que deve
        instigar o visitante a clicar no botão abaixo para saber mais sobre o
        serviço.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Saiba mais
      </button>
    </div>
  );
}

export function ServiceSection() {
  return (
    <section id="services" className="py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Serviços</h2>
      <div className="grid md:grid-cols-2 gap-4 px-5">
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
