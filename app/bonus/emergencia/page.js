const passos = [
  "Não tente compensar exagerando na restrição no dia seguinte.",
  "Volte ao plano na próxima refeição, sem esperar a próxima segunda-feira.",
  "Beba água e retome refeições simples e organizadas.",
  "Evite culpa. O foco é retorno rápido à constância.",
  "Use o planner para reorganizar o próximo dia.",
];

export default function EmergenciaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <p className="text-green-400 font-semibold mb-2">Bônus exclusivo</p>
        <h1 className="text-4xl font-bold mb-3">Plano de emergência</h1>
        <p className="text-slate-300 max-w-2xl mb-8">
          Um guia rápido para retomar o controle quando a rotina sair do eixo.
        </p>

        <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">O que fazer agora</h2>
          <div className="space-y-4">
            {passos.map((passo, index) => (
              <div key={passo} className="rounded-2xl border border-gray-200 p-4">
                <p className="font-semibold mb-1">Passo {index + 1}</p>
                <p className="text-gray-700">{passo}</p>
              </div>
            ))}
          </div>
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