import { Compass, ShieldCheck, Clock, Scale } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-300">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">Tax Compass</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-blue-200/80">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> AU-qualified lawyers</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> Responses under 24h</div>
            <div className="flex items-center gap-2"><Scale className="w-4 h-4"/> Fixed, transparent fees</div>
          </div>
        </header>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600/10 px-3 py-1 text-xs text-blue-200">
              High‑trust LegalTech for Australian tax matters
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Fast, fixed‑fee access to expert tax lawyers — augmented by AI
            </h1>

            <p className="mt-5 text-blue-100/90 text-lg">
              Get clear, defensible tax advice and research without the billable‑hour anxiety. We match you with an Australian tax lawyer and accelerate research with compliant AI tooling.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-400 transition">
                See fixed fees
              </a>
              <a href="#how" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition">
                How it works
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-blue-200/90">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">ATO rulings & disputes</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Structuring & CGT</div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">GST & international</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-blue-400/20 bg-slate-900/60 backdrop-blur p-6 shadow-xl">
              <div className="text-sm text-blue-200/90 mb-2">Instant intake</div>
              <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
                <div className="grid gap-3 text-sm">
                  <label className="block">
                    <span className="text-blue-200/80">Briefly describe your issue</span>
                    <textarea className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-blue-50 placeholder-blue-300/40" rows={4} placeholder="e.g., CGT implications on selling shares acquired under ESS" />
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="text-blue-200/80">Entity type</span>
                      <select className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-blue-50">
                        <option>Individual</option>
                        <option>Company</option>
                        <option>Trust</option>
                        <option>Partnership</option>
                        <option>SMSF</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-blue-200/80">Urgency</span>
                      <select className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-blue-50">
                        <option>Standard (2–3 days)</option>
                        <option>Priority (24h)</option>
                      </select>
                    </label>
                  </div>
                  <button className="mt-2 inline-flex justify-center items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition">
                    Get matched with a lawyer
                  </button>
                </div>
              </div>
              <p className="mt-3 text-xs text-blue-300/70">By proceeding, you agree that no solicitor‑client relationship is formed until we confirm engagement and fees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
