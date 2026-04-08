import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Como funciona a compra de passagens?",
      answer:
        "Você escolhe origem, destino, data da viagem e a plataforma mostra as melhores opções disponíveis. Após o pagamento, sua passagem fica disponível digitalmente.",
    },
    {
      question: "Posso cancelar ou alterar minha passagem?",
      answer:
        "Sim. Você pode cancelar ou remarcar sua passagem dentro das regras da empresa parceira e do prazo informado no momento da compra.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos Pix, cartão de crédito, débito e boleto bancário, dependendo da empresa de transporte.",
    },
    {
      question: "Como funciona o embarque digital?",
      answer:
        "Após a compra, você recebe um QR Code que pode ser apresentado diretamente no embarque, sem necessidade de impressão.",
    },
  ];

  function toggleFAQ(index: number): void {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="bg-zinc-100">
      <div className="container px-4 mx-auto">
        <SectionHeader badge="Dúvidas" title="Perguntas Frequentes" />

        <div className="max-w-4xl mx-auto mt-2 space-y-4">
          {faqData.map(({ question, answer }, index) => (
            <div
              key={question}
              className="overflow-hidden bg-white border shadow-sm rounded-2xl border-zinc-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-zinc-900">{question}</span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-zinc-600">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
