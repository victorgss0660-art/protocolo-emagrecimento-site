export default function AtivarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white text-black rounded-[32px] shadow-2xl p-8 md:p-10">
        <div className="mb-8 text-center">
          <p className="text-green-600 font-semibold mb-2">Primeiro acesso</p>
          <h1 className="text-3xl font-bold mb-3">Ativar acesso</h1>
          <p className="text-gray-600">
            Digite seus dados para liberar sua área exclusiva.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Código de acesso</label>
            <input
              type="text"
              placeholder="EX: ABC12345"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Criar senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-2xl transition"
          >
            Ativar acesso
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Já tem conta?{" "}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            Fazer login
          </a>
        </div>
      </div>
    </main>
  );
}