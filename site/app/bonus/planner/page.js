export default function PlannerPage() {
  const dias = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-400 font-semibold mb-2">Bônus exclusivo</p>
        <h1 className="text-4xl font-bold mb-3">Planner semanal</h1>
        <p className="text-slate-300 max-w-2xl mb-8">
          Organize sua semana com mais clareza para reduzir improvisos e manter constância.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {dias.map((dia) => (
            <div key={dia} className="bg-white text-black rounded-[28px] p-6 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">{dia}</h2>
              <div className="space-y-3">
                <div className="rounded-2xl border border-gray-200 p-3">Café da manhã</div>
                <div className="rounded-2xl border border-gray-200 p-3">Almoço</div>
                <div className="rounded-2xl border border-gray-200 p-3">Jantar</div>
                <div className="rounded-2xl border border-gray-200 p-3">Lanches</div>
                <div className="rounded-2xl border border-gray-200 p-3">Meta do dia</div>
              </div>
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