import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Quick Guidance",
      price: "$490",
      cycle: "fixed",
      bullets: [
        "Written answer to a focused question",
        "Citations to legislation and rulings",
        "48–72h turnaround",
      ],
    },
    {
      name: "Formal Advice",
      price: "$1,800",
      cycle: "fixed",
      bullets: [
        "Detailed analysis and recommendations",
        "Case law and ATO references",
        "Signed by an AU-qualified lawyer",
      ],
      highlight: true,
    },
    {
      name: "Dispute Support",
      price: "From $2,500",
      cycle: "fixed",
      bullets: [
        "Objections, private rulings, or audit responses",
        "Document review and strategy",
        "Priority scheduling available",
      ],
    },
  ];

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
      <p className="mt-3 text-blue-200/90 max-w-2xl">Clear fixed fees for common needs. Custom quotes available for complex matters.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <div key={i} className={`rounded-2xl border bg-white/5 p-6 text-blue-100/90 ${t.highlight ? "border-blue-400/50 shadow-lg shadow-blue-500/10" : "border-white/10"}`}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="text-2xl font-bold text-white">{t.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {t.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5"/><span className="text-blue-200/80">{b}</span></li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 transition">Start with {t.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
