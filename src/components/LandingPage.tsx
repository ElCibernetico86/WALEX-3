import { motion } from "motion/react";
import { CheckCircle2, Phone, ShieldCheck, Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col w-[110px] leading-none">
            <div className="flex justify-between w-full font-sans font-black text-2xl text-white tracking-widest">
              {"WALEX".split("").map((char, i) => (
                <span key={i} className="inline-block">{char}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:2145550123" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-urgency-orange transition-colors">
            <Phone className="w-5 h-5" /> (214) 555-0123
          </a>
          <button className="cta-button cta-pulse px-6 py-3 font-extrabold text-sm md:text-base">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center bg-[#0a1628] overflow-hidden">
      {/* Background with dark overlay for maximum contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=2000" 
          alt="Painted Home Exterior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <p className="text-sm font-bold text-white flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-accent-gold fill-[#D4AF37]" stroke="none" /> 
            Trusted by 500+ North Dallas Homeowners | 4.9★ Average Rating
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight text-balance">
          A Flawless Home That Turns Heads — <span className="text-urgency-orange">Guaranteed.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium leading-snug">
          We Move the Furniture. We Handle 100% of the Cleanup. You Just Pick the Color.
        </p>

        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg font-bold mb-10">
          <CheckCircle2 className="w-5 h-5" /> Most Projects Completed in 48 Hours
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
          <button className="w-full sm:w-auto cta-button cta-pulse px-8 py-5 text-xl">
            Get My Free Quote → <span className="block text-sm font-medium opacity-90">Takes 60 Seconds</span>
          </button>
          <a href="tel:2145550123" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            Or Call Now: (214) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="border-y border-white/10 bg-[#13243f] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
        <div className="font-bold text-white/80">🏆 500+ Homes Painted</div>
        <div className="font-bold text-white/80">⭐ 4.9★ on Google</div>
        <div className="font-bold text-white/80">🛡️ Licensed & Insured</div>
        <div className="font-bold text-white/80">🤝 5-Year Warranty</div>
      </div>
    </div>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white text-balance">
          Don't Take Our Word For It. <span className="text-brand-blue-light block mt-2">Look At The Results.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Before/After Images will be here */}
          <div className="bg-[#13243f] rounded-2xl overflow-hidden shadow-xl border border-white/5">
            <img src="exterior.png" alt="Exterior Paint Before and After" className="w-full aspect-[4/3] object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Exterior Transformation</h3>
              <p className="text-white/70 text-sm">Flaking and faded to flawless neighborhood standout.</p>
            </div>
          </div>
          <div className="bg-[#13243f] rounded-2xl overflow-hidden shadow-xl border border-white/5">
            <img src="cabinets.png" alt="Cabinet Paint Before and After" className="w-full aspect-[4/3] object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Cabinet Refinishing</h3>
              <p className="text-white/70 text-sm">From dated 90s oak to modern studio bright white.</p>
            </div>
          </div>
          <div className="bg-[#13243f] rounded-2xl overflow-hidden shadow-xl border border-white/5">
            <img src="interior.png" alt="Interior Paint Before and After" className="w-full aspect-[4/3] object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Living Space Update</h3>
              <p className="text-white/70 text-sm">Damage repaired, texture matched, seamlessly painted.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" stroke="none"/>)}
            </div>
            <p className="italic text-white/90 mb-6">"Carlos and his crew were incredible. They moved all the heavy furniture, covered the floors perfectly, and finished the entire downstairs in 2 days. The lines are razor-sharp."</p>
            <div className="font-bold">— Sarah J., Frisco TX</div>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" stroke="none"/>)}
            </div>
            <p className="italic text-white/90 mb-6">"I was worried about the mess from sanding the cabinets. There wasn't a speck of dust left behind. David promised a factory finish and he delivered exactly that."</p>
            <div className="font-bold">— Michael C., Plano TX</div>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" stroke="none"/>)}
            </div>
            <p className="italic text-white/90 mb-6">"Our exterior paint was peeling exposing the wood. They didn't just paint over it; they scraped, primed, and repaired everything. Better than new."</p>
            <div className="font-bold">— Elena R., McKinney TX</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => {
  return (
    <section className="py-24 px-6 bg-[#002366] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10">
        <ShieldCheck className="w-96 h-96" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ShieldCheck className="w-20 h-20 mx-auto text-white mb-8" />
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">The WALEX Triple-Shield Guarantee</h2>
        <p className="text-xl text-white/80 mb-12">We can offer this because 98% of our clients rate us 5 stars.</p>
        
        <div className="space-y-6 text-left">
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">1. The 5-Year No-Peel Warranty</h3>
            <p className="text-white/80 text-lg">If our paint peels, cracks, or fades within 5 years — we come back and fix it. Free. No questions asked.</p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">2. The Zero-Mess Promise</h3>
            <p className="text-white/80 text-lg">If we leave a single drop of paint where it shouldn't be, your entire cleanup is on us.</p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">3. 100% Satisfaction or Money Back</h3>
            <p className="text-white/80 text-lg">If you aren't thrilled with the final result, we'll either redo the work or refund your money. Period.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section className="py-24 px-6 bg-[#13243f]">
      <div className="max-w-4xl mx-auto text-center pb-12 border-b border-white/10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Not Ready to Commit?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get Your <span className="font-bold text-urgency-orange">FREE Professional Color Consultation</span>.
        </p>
        <p className="text-white/70 mb-10 max-w-2xl mx-auto">
          Our color experts will send you a personalized palette with 3 curated color schemes designed specifically for your home's lighting and style — completely free.
        </p>
        
        <form className="max-w-xl mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="bg-[#0a1628] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-urgency-orange w-full" required/>
          <input type="email" placeholder="Email Address" className="bg-[#0a1628] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-urgency-orange w-full" required/>
          <input type="tel" placeholder="Phone Number" className="bg-[#0a1628] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-urgency-orange w-full" required/>
          <button type="submit" className="bg-white text-[#0a1628] font-black rounded-xl px-8 py-5 text-lg hover:bg-gray-200 transition-colors mt-2">
            Send My Free Color Guide
          </button>
          <p className="text-white/40 text-sm mt-2">No spam. No obligation. Just expert advice.</p>
        </form>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 bg-[#0a1628] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-urgency-orange/10 to-transparent" />
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Your Neighbors Already Called. Your Turn.</h2>
        <p className="text-red-400 font-bold text-xl mb-10 flex flex-col md:flex-row items-center justify-center gap-2">
          <span>⚠️ Spring spots are filling fast</span> 
          <span className="hidden md:inline">—</span>
          <span>Only 4 slots left this month.</span>
        </p>
        <button className="w-full sm:w-auto cta-button cta-pulse px-12 py-6 text-2xl mb-6">
          Get My Free Quote Now
        </button>
        <p className="text-white/60 text-lg">Or speak to an expert: <a href="tel:2145550123" className="text-white font-bold underline">(214) 555-0123</a></p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-center text-white/40 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black tracking-widest text-white/50 text-xl">WALEX</div>
        <p>© 2026 WALEX. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-urgency-orange selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <SocialProof />
      <Guarantee />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </div>
  );
}
