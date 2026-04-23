"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtocoloPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    rotina: "",
    comportamento: "",
    bloqueio: "",
    exagero: "",
    disciplina: "",
  });

  const handleAnswer = (field, value) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (step < 5) {
      setStep(step + 1);
      return;
    }

    const perfil = getProfile(updated);
    router.push(`/perfil/${perfil}`);
  };

  const getProfile = (data) => {
    if (data.comportamento === "ansiedade") return "emocional";
    if (data.comportamento === "desorganizacao") return "estrutura";
    if (data.disciplina === "baixa") return "inconstante";
    if (data.exagero === "frequente") return "impulsivo";
    return "estrategico";
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Diagnóstico Inteligente</h1>
        <p className="text-gray-300 mb-8">
          Responda as perguntas para descobrir seu perfil ideal.
        </p>

        {step === 1 && (
          <Box
            title="Como é sua rotina?"
            options={[
              ["corrida", "Muito corrida"],
              ["moderada", "Moderada"],
              ["tranquila", "Tranquila"],
            ]}
            onClick={(v) => handleAnswer("rotina", v)}
          />
        )}

        {step === 2 && (
          <Box
            title="Qual situação mais acontece com você?"
            options={[
              ["recomeco", "Começo e paro"],
              ["ansiedade", "Como por emoção"],
              ["desorganizacao", "Sem rotina alimentar"],
            ]}
            onClick={(v) => handleAnswer("comportamento", v)}
          />
        )}

        {step === 3 && (
          <Box
            title="O que mais te trava?"
            options={[
              ["constancia", "Falta de constância"],
              ["controle", "Falta de controle"],
              ["estrategia", "Falta de estratégia"],
            ]}
            onClick={(v) => handleAnswer("bloqueio", v)}
          />
        )}

        {step === 4 && (
          <Box
            title="Com que frequência você exagera?"
            options={[
              ["frequente", "Quase todos os dias"],
              ["medio", "Algumas vezes na semana"],
              ["raro", "Raramente"],
            ]}
            onClick={(v) => handleAnswer("exagero", v)}
          />
        )}

        {step === 5 && (
          <Box
            title="Como você avalia sua disciplina?"
            options={[
              ["baixa", "Muito baixa"],
              ["media", "Média"],
              ["alta", "Alta"],
            ]}
            onClick={(v) => handleAnswer("disciplina", v)}
          />
        )}
      </div>
    </main>
  );
}

function Box({ title, options, onClick }) {
  return (
    <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid gap-4">
        {options.map(([value, label]) => (
          <button
            key={value}
            onClick={() => onClick(value)}
            className="w-full rounded-2xl border border-gray-200 p-4 text-left hover:bg-gray-50"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}