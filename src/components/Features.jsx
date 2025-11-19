import { ShieldCheck, FileText, Search, MessageSquare, Scale, Lock } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Qualified advice",
      desc: "Get answers from Australian tax lawyers, not generic chatbots.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Fixed-fee quotes",
      desc: "Transparent pricing before you commit. No billable-hour surprises.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "AI-assisted research",
      desc: "Accelerated analysis grounded in ATO rulings, cases and legislation.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Asynchronous workflow",
      desc: "Share documents and context, then get clear, defensible answers fast.",
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Audit-ready output",
      desc: "Citations and reasoning suitable for internal files and ATO queries.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Privacy-first",
      desc: "Client data stored in Australia with strict access controls.",
    },
  ];

  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Built for certainty and speed</h2>
      <p className="mt-3 text-blue-200/90 max-w-2xl">Everything you need to move from uncertainty to confident action on complex tax questions.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-blue-100/90">
            <div className="flex items-center gap-2 text-blue-200 mb-2">{f.icon}<span className="font-medium">{f.title}</span></div>
            <p className="text-sm text-blue-200/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
