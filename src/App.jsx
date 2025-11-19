import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />

      <footer className="border-t border-white/10 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/70">
            <div>© {new Date().getFullYear()} Tax Compass — High‑trust LegalTech for Australian tax matters.</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-blue-200" href="#pricing">Pricing</a>
              <a className="hover:text-blue-200" href="#features">Features</a>
              <a className="hover:text-blue-200" href="#how">How it works</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
