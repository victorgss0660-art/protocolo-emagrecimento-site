import Navbar from "../../components/Navbar";

export default function MeuPlanoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-green-400 font-semibold mb-2">Execução</p>
        <h1 className="text-4xl font-bold mb-4">Meu plano</h1>
        <p className="text-slate-300 max-w-3xl mb-8">
          Esta área organiza os próximos passos de forma simples para você sair do
          improviso e manter mais consistência.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Passo 1</h2>
            <p className="text-gray-700">
              Fazer o diagnóstico e entender seu perfil principal.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Passo 2</h2>
            <p className="text-gray-700">
              Ajustar sua rotina com base na estratégia indicada.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Passo 3</h2>
            <p className="text-gray-700">
              Usar os bônus para apoiar a execução no dia a dia.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-[28px] p-8">
          <h3 className="text-2xl font-bold mb-4">Checklist de foco</h3>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Manter refeições mais previsíveis
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Reduzir improvisos alimentares
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Repetir boas escolhas com constância
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
