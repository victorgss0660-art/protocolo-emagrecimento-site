const categorias = [
  {
    titulo: "Proteínas",
    itens: ["Frango", "Ovos", "Carne magra", "Iogurte", "Queijo branco"],
  },
  {
    titulo: "Carboidratos inteligentes",
    itens: ["Arroz", "Batata", "Mandioca", "Aveia", "Pão integral"],
  },
  {
    titulo: "Legumes e verduras",
    itens: ["Alface", "Tomate", "Cenoura", "Brócolis", "Abobrinha"],
  },
  {
    titulo: "Frutas e lanches",
    itens: ["Banana", "Maçã", "Mamão", "Castanhas", "Chocolate 70%"],
  },
];

export default function ListaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-400 font-semibold mb-2">Bônus exclusivo</p>
        <h1 className="text-4xl font-bold mb-3">Lista de compras</h1>
        <p className="text-slate-300 max-w-2xl mb-8">
          Uma base simples para comprar melhor e evitar decisões ruins no improviso.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categorias.map((categoria) => (
            <div key={categoria.titulo} className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">{categoria.titulo}</h2>
              <ul className="space-y-2 text-gray-700">
                {categoria.itens.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/bonus"
            className="inline-block bg-white text-black px-5 py-3 rounded-2xl font-semibold"
          >
            Voltar para bônus
          </a>
        </div>
      </div>
    </main>
  );
}