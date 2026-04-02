import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const faqData = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-zinc-100">
      <div className="container mx-auto px-4">
        <SectionHeader badge="Dúvidas" title="Perguntas Frequentes" />

        <div className="mt-2 space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-zinc-900">
                  {item.question}
                </span>

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
                  <p className="px-6 pb-5 text-zinc-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
