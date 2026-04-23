const receitas = [
  {
    titulo: "Omelete prática",
    descricao: "Ovos, legumes picados e uma fonte simples de proteína para uma refeição rápida.",
  },
  {
    titulo: "Iogurte com fruta",
    descricao: "Uma opção leve e rápida para café da manhã ou lanche.",
  },
  {
    titulo: "Frango com arroz e legumes",
    descricao: "Combinação simples, prática e fácil de repetir na rotina.",
  },
  {
    titulo: "Sanduíche proteico",
    descricao: "Pão, ovo ou frango desfiado e folhas para uma refeição rápida.",
  },
  {
    titulo: "Salada reforçada",
    descricao: "Folhas, legumes, proteína e uma fonte de carboidrato equilibrada.",
  },
  {
    titulo: "Jantar leve",
    descricao: "Versão mais simples do almoço com menor volume e boa saciedade.",
  },
];

export default function ReceitasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-400 font-semibold mb-2">Bônus exclusivo</p>
        <h1 className="text-4xl font-bold mb-3">Receitas rápidas</h1>
        <p className="text-slate-300 max-w-2xl mb-8">
          Ideias simples para facilitar sua rotina sem complicar seu plano.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {receitas.map((receita) => (
            <div key={receita.titulo} className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-3">{receita.titulo}</h2>
              <p className="text-gray-600 leading-relaxed">{receita.descricao}</p>
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