import Navbar from "../../components/Navbar";

export default function ComoUsarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-green-400 font-semibold mb-2">Guia rápido</p>
        <h1 className="text-4xl font-bold mb-4">Como usar a plataforma</h1>
        <p className="text-slate-300 max-w-3xl mb-8">
          Siga esta ordem para aproveitar melhor o protocolo e não se perder na navegação.
        </p>

        <div className="grid gap-6">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">1. Faça o diagnóstico</h2>
            <p className="text-gray-700 leading-relaxed">
              Comece respondendo às perguntas na área de diagnóstico para identificar
              o perfil mais compatível com sua realidade.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">2. Leia seu perfil com atenção</h2>
            <p className="text-gray-700 leading-relaxed">
              Depois do resultado, entenda qual é seu principal erro, sua estratégia
              ideal e os próximos passos iniciais.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">3. Use os bônus como apoio</h2>
            <p className="text-gray-700 leading-relaxed">
              Planner, receitas, lista de compras e plano de emergência existem para
              facilitar sua execução no dia a dia.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">4. Priorize constância</h2>
            <p className="text-gray-700 leading-relaxed">
              O foco não é perfeição. O foco é repetir boas decisões com mais frequência
              e menos improviso.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
