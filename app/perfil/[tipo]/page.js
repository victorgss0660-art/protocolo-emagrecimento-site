const perfis = {
  emocional: {
    titulo: "Perfil Emocional",
    subtitulo: "Seu desafio principal está ligado a impulso, ansiedade e alimentação emocional.",
    erro: "Tentar resolver tudo apenas com força de vontade.",
    estrategia:
      "Seu foco precisa estar em saciedade, previsibilidade e controle de gatilhos do ambiente.",
    passos: [
      "Montar refeições mais saciantes com proteína e fibra",
      "Evitar longos períodos sem comer",
      "Reduzir exposição a gatilhos alimentares frequentes",
      "Criar um plano simples para momentos de ansiedade",
    ],
  },
  estrutura: {
    titulo: "Perfil Sem Estrutura",
    subtitulo: "Seu maior bloqueio é a falta de rotina e organização alimentar.",
    erro: "Improvisar demais e decidir tudo na hora.",
    estrategia:
      "Você precisa de uma estrutura simples, repetível e fácil de seguir no dia a dia.",
    passos: [
      "Definir refeições-base para a semana",
      "Ter uma lista de compras mínima e funcional",
      "Criar horários mais previsíveis",
      "Diminuir a quantidade de decisões por dia",
    ],
  },
  inconstante: {
    titulo: "Ciclo Inconstante",
    subtitulo: "Você começa com força, mas perde constância antes de consolidar o resultado.",
    erro: "Querer mudar tudo de uma vez.",
    estrategia:
      "Seu plano precisa de metas pequenas, repetição e constância antes de intensidade.",
    passos: [
      "Escolher 2 ou 3 metas por vez",
      "Acompanhar consistência semanal",
      "Reduzir o pensamento de tudo ou nada",
      "Focar em continuidade, não perfeição",
    ],
  },
  impulsivo: {
    titulo: "Perfil Impulsivo",
    subtitulo: "Os exageros recorrentes e decisões emocionais estão travando sua evolução.",
    erro: "Alternar restrição exagerada com perda de controle.",
    estrategia:
      "Você precisa estabilizar a rotina alimentar e reduzir os gatilhos que estimulam exageros.",
    passos: [
      "Manter refeições mais regulares",
      "Ter opções rápidas de segurança",
      "Evitar compensações extremas depois de exageros",
      "Usar o plano de emergência com frequência",
    ],
  },
  estrategico: {
    titulo: "Perfil Estratégico",
    subtitulo: "Você já tem uma base melhor, mas ainda precisa ajustar estratégia e consistência.",
    erro: "Achar que precisa de algo muito complexo para evoluir.",
    estrategia:
      "Seu foco é otimizar o que já funciona, simplificar e manter regularidade.",
    passos: [
      "Ajustar quantidades com mais consciência",
      "Melhorar qualidade das escolhas com praticidade",
      "Consolidar uma rotina replicável",
      "Usar os bônus como apoio de manutenção",
    ],
  },
};

export default async function PerfilPage({ params }) {
  const tipo = (await params).tipo;
  const perfil = perfis[tipo] || perfis.estrategico;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-green-400 font-semibold mb-2">Resultado do diagnóstico</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{perfil.titulo}</h1>
          <p className="text-slate-300 max-w-3xl text-lg">{perfil.subtitulo}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Erro principal</p>
            <h2 className="text-2xl font-bold mb-3">O que mais te trava hoje</h2>
            <p className="text-gray-700 leading-relaxed">{perfil.erro}</p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <p className="text-green-600 font-semibold mb-2">Estratégia ideal</p>
            <h2 className="text-2xl font-bold mb-3">O que funciona melhor para você</h2>
            <p className="text-gray-700 leading-relaxed">{perfil.estrategia}</p>
          </div>
        </div>

        <div className="mt-6 bg-white text-black rounded-[28px] p-8 shadow-2xl">
          <p className="text-green-600 font-semibold mb-2">Próximos passos</p>
          <h2 className="text-2xl font-bold mb-6">Plano inicial recomendado</h2>

          <div className="grid gap-4">
            {perfil.passos.map((passo, index) => (
              <div
                key={passo}
                className="rounded-2xl border border-gray-200 p-4"
              >
                <p className="font-semibold mb-1">Passo {index + 1}</p>
                <p className="text-gray-700">{passo}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/bonus"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Ver bônus
            </a>

            <a
              href="/dashboard"
              className="inline-block bg-black text-white px-6 py-3 rounded-2xl font-semibold"
            >
              Voltar ao dashboard
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}