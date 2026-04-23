import Navbar from "../../components/Navbar";

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-green-400 font-semibold mb-2">Atendimento</p>
        <h1 className="text-4xl font-bold mb-4">Suporte</h1>
        <p className="text-slate-300 max-w-3xl mb-8">
          Use esta área para orientar o cliente em caso de dúvidas sobre acesso,
          navegação ou utilização da plataforma.
        </p>

        <div className="grid gap-6">
          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Dúvidas de acesso</h2>
            <p className="text-gray-700">
              Caso tenha problemas com login, ativação ou acesso ao conteúdo,
              entre em contato pelo canal oficial de atendimento.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Dúvidas de navegação</h2>
            <p className="text-gray-700">
              Se não souber por onde começar, use a página “Como usar” para seguir
              a ordem correta da plataforma.
            </p>
          </div>

          <div className="bg-white text-black rounded-[28px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3">Contato</h2>
            <p className="text-gray-700 mb-4">
              Você pode substituir este texto pelos seus canais reais.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>WhatsApp: (00) 00000-0000</p>
              <p>Email: suporte@seudominio.com</p>
              <p>Horário: segunda a sexta, das 9h às 18h</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
