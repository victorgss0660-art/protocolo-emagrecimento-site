"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email && senha) {
      router.push("/dashboard");
    } else {
      alert("Preencha e-mail e senha.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1120] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white text-black rounded-[32px] shadow-2xl p-8 md:p-10">
        <div className="mb-8 text-center">
          <p className="text-green-600 font-semibold mb-2">Acesso premium</p>
          <h1 className="text-3xl font-bold mb-3">Entrar na área exclusiva</h1>
          <p className="text-gray-600">
            Acesse seu protocolo, diagnóstico e materiais complementares.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Senha</label>
            <input
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-2xl transition"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Ainda não ativou seu acesso?{" "}
          <a href="/ativar" className="text-green-600 font-semibold hover:underline">
            Ativar agora
          </a>
        </div>
      </div>
    </main>
  );
}
