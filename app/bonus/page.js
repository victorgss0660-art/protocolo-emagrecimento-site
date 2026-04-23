export default function BonusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-green-400 font-semibold mb-2">Conteúdo extra</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Bônus Exclusivos
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Materiais complementares para facilitar sua rotina, aumentar sua
            constância e tornar o processo mais simples no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Planner semanal</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Organize refeições, metas e compromissos da semana para reduzir
              improvisos e manter consistência.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Planejamento de segunda a domingo</li>
              <li>• Espaço para metas da semana</li>
              <li>• Checklist de execução</li>
            </ul>
            <a
              href="/bonus/planner"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              Acessar planner
            </a>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Receitas rápidas</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Ideias práticas para café da manhã, almoço, jantar e lanches sem
              complicar sua rotina.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Opções simples e rápidas</li>
              <li>• Receitas para rotina corrida</li>
              <li>• Alternativas leves e práticas</li>
            </ul>
            <a
              href="/bonus/receitas"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              Ver receitas
            </a>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Lista de compras</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Uma base organizada para ajudar você a comprar melhor e evitar
              decisões ruins no improviso.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Proteínas</li>
              <li>• Carboidratos inteligentes</li>
              <li>• Legumes, frutas e lanches</li>
            </ul>
            <a
              href="/bonus/lista"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              Ver lista
            </a>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Plano de emergência</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Um guia rápido para quando sair da rotina, exagerar ou sentir que
              perdeu o controle.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• O que fazer após exageros</li>
              <li>• Como retomar sem culpa</li>
              <li>• Passos práticos para o dia seguinte</li>
            </ul>
            <a
              href="/bonus/emergencia"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
            >
              Acessar plano
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/dashboard"
            className="inline-block bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Voltar ao dashboard
          </a>

          <a
            href="/protocolo"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Refazer diagnóstico
          </a>
        </div>
      </div>
    </main>
  );
}