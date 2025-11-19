import { ClipboardList, MessageSquare, FileCheck, Wallet } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />, title: "Submit your brief", desc: "Describe your situation and upload any relevant documents."
    },
    {
      icon: <MessageSquare className="w-5 h-5" />, title: "Match & scope", desc: "We connect you with a qualified tax lawyer and confirm a fixed fee."
    },
    {
      icon: <FileCheck className="w-5 h-5" />, title: "Research & advice", desc: "Your lawyer uses AI tools to accelerate research with full citations."
    },
    {
      icon: <Wallet className="w-5 h-5" />, title: "Follow-up support", desc: "Quick clarifications included. Additional support available if needed."
    },
  ];

  return (
    <section id="how" className="bg-slate-900/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How it works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-blue-100/90">
              <div className="flex items-center gap-2 text-blue-200 mb-2">{s.icon}<span className="font-medium">{s.title}</span></div>
              <p className="text-sm text-blue-200/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
