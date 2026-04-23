export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-green-400 font-semibold mb-2">Área exclusiva</p>
          <h1 className="text-4xl font-bold mb-3">Área do Cliente</h1>
          <p className="text-slate-300 max-w-2xl">
            Aqui você acessa seu diagnóstico, seus materiais complementares e a
            estrutura principal do protocolo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Diagnóstico</p>
            <h2 className="text-2xl font-bold mb-3">Iniciar Diagnóstico</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Descubra seu perfil com base em perguntas estratégicas e entenda
              qual abordagem combina mais com sua realidade.
            </p>

            <div className="space-y-3 mb-8">
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Perguntas rápidas e objetivas
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Resultado com mais personalização
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Melhor percepção de valor do produto
              </div>
            </div>

            <a
              href="/protocolo"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Começar
            </a>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Materiais extras</p>
            <h2 className="text-2xl font-bold mb-3">Acessar Bônus</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Planner, receitas, lista de compras e plano de emergência para
              facilitar sua rotina e aumentar sua consistência.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Planner
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Receitas
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Lista
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-sm text-gray-700">
                Emergência
              </div>
            </div>

            <a
              href="/bonus"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Ver bônus
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}