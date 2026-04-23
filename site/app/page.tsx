export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white">
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 font-semibold tracking-wide uppercase mb-4">
              Protocolo premium
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Protocolo de Emagrecimento Personalizado
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Descubra o método ideal para você com base no seu perfil,
              comportamento e rotina. Um sistema digital criado para ajudar você
              a sair do improviso e seguir um caminho mais claro.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/login"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition shadow-lg"
              >
                Começar agora
              </a>

              <a
                href="/ativar"
                className="border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded-2xl transition"
              >
                Ativar acesso
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-2xl font-bold">5</p>
                <p className="text-slate-300 text-sm">Perguntas estratégicas</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-2xl font-bold">+4</p>
                <p className="text-slate-300 text-sm">Bônus exclusivos</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-slate-300 text-sm">Acesso digital</p>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-[32px] shadow-2xl p-8 md:p-10">
            <p className="text-green-600 font-semibold mb-3">
              Seu resultado começa aqui
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Você não falhou.
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Na maioria dos casos, o problema não é falta de vontade. É seguir
              um método incompatível com seu perfil. Este protocolo ajuda você a
              identificar isso e encontrar uma estratégia mais adequada.
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="font-semibold">Diagnóstico inteligente</p>
                <p className="text-gray-600 text-sm">
                  Descubra seu perfil com base em perguntas estratégicas.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="font-semibold">Área exclusiva</p>
                <p className="text-gray-600 text-sm">
                  Acesse conteúdo organizado em uma estrutura profissional.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="font-semibold">Bônus práticos</p>
                <p className="text-gray-600 text-sm">
                  Planner, receitas, lista de compras e plano de emergência.
                </p>
              </div>
            </div>

            <a
              href="/login"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-2xl transition"
            >
              Entrar na plataforma
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}