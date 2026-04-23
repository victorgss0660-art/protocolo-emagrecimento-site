export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/dashboard" className="text-white font-bold text-lg">
          Protocolo Premium
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="/dashboard" className="hover:text-white transition">
            Dashboard
          </a>
          <a href="/protocolo" className="hover:text-white transition">
            Diagnóstico
          </a>
          <a href="/bonus" className="hover:text-white transition">
            Bônus
          </a>
          <a href="/como-usar" className="hover:text-white transition">
            Como usar
          </a>
          <a href="/suporte" className="hover:text-white transition">
            Suporte
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden md:inline-block text-sm text-slate-300 hover:text-white transition"
          >
            Entrar
          </a>
          <a
            href="/ativar"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
          >
            Ativar acesso
          </a>
        </div>
      </div>
    </header>
  );
}
