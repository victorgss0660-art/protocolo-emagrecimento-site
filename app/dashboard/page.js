import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <p className="text-green-400 font-semibold mb-2">Área exclusiva</p>
          <h1 className="text-4xl font-bold mb-3">Seu painel principal</h1>
          <p className="text-slate-300 max-w-2xl">
            Acesse seu diagnóstico, seus bônus, seu plano e os materiais de apoio
            em uma estrutura mais organizada e profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Diagnóstico</p>
            <h2 className="text-2xl font-bold mb-3">Descobrir meu perfil</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Responda às perguntas estratégicas e identifique o perfil mais
              compatível com sua rotina e comportamento.
            </p>
            <a
              href="/protocolo"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Iniciar diagnóstico
            </a>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Plano</p>
            <h2 className="text-2xl font-bold mb-3">Meu plano</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Acesse sua estratégia principal, organize suas ações e acompanhe o
              que precisa ser feito com mais clareza.
            </p>
            <a
              href="/meu-plano"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Ver plano
            </a>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Bônus</p>
            <h2 className="text-2xl font-bold mb-3">Materiais extras</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Planner, receitas, lista de compras e plano de emergência para
              facilitar sua constância.
            </p>
            <a
              href="/bonus"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Acessar bônus
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">
            <p className="text-green-400 font-semibold mb-2">Organização</p>
            <h3 className="text-2xl font-bold mb-3">Navegação rápida</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <a
                href="/como-usar"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
              >
                Como usar a plataforma
              </a>
              <a
                href="/suporte"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
              >
                Suporte
              </a>
              <a
                href="/bonus/planner"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
              >
                Planner semanal
              </a>
              <a
                href="/bonus/emergencia"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
              >
                Plano de emergência
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">
            <p className="text-green-400 font-semibold mb-2">Resumo</p>
            <h3 className="text-2xl font-bold mb-3">Sua jornada começa aqui</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              O objetivo desta plataforma é ajudar você a sair do improviso,
              entender seu perfil e seguir uma estrutura mais prática e
              consistente.
            </p>

            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                1. Faça o diagnóstico
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                2. Entenda seu perfil
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                3. Aplique o plano e os bônus
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
