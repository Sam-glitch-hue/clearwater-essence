import React, { useState, useEffect } from 'react';
import heroVideo from '@/assets/hero-water-treatment.mp4';
import step100Micron from '@/assets/step-100micron.jpg';
import benefitZeroCapex from '@/assets/benefit-zero-capex.jpg';
import benefitChemicalReduction from '@/assets/benefit-chemical-reduction.jpg';
import benefitMonitoring from '@/assets/benefit-monitoring.jpg';
import benefitAssetLife from '@/assets/benefit-asset-life.jpg';
import benefitZld from '@/assets/benefit-zld.jpg';
import benefitBlowdown from '@/assets/benefit-blowdown.jpg';
import stepClinoptilolite from '@/assets/step-clinoptilolite.jpg';
import stepAluminosilicate from '@/assets/step-aluminosilicate.jpg';
import stepPhCorrection from '@/assets/step-ph-correction.jpg';
import stepAntiscalant from '@/assets/step-antiscalant.jpg';
import stepMicron1 from '@/assets/step-micron1.jpg';
import stepMicron2 from '@/assets/step-micron2.jpg';
import stepXfrMembrane from '@/assets/step-xfr-membrane.jpg';
import stepFinalPh from '@/assets/step-final-ph.jpg';
import stepDisinfection from '@/assets/step-disinfection.jpg';
import { 
  Droplet, Leaf, ShieldCheck, CheckCircle2, Menu, X, ArrowRight, Settings, 
  Star, Quote, Mail, Activity, Filter, Layers, ThermometerSun, Droplets, TestTube,
  ArrowDownRight, ChevronRight, Wind, BatteryCharging, Building, Briefcase,
  Factory, PiggyBank, Clock, MapPin, Phone, Linkedin, Twitter, Facebook,
  ArrowUpRight, CheckCircle, Send, MessageSquare, Truck, Youtube
} from 'lucide-react';

// --- ErrorBoundary ---
class ErrorBoundary extends React.Component<any, { hasError: boolean; error: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      const errorMsg = this.state.error?.stack || this.state.error?.toString() || "Unknown error occurred";
      return (
        <div className="p-10 text-center bg-slate-50 min-h-screen flex flex-col items-center justify-center font-sans text-slate-900">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6"><X size={32} /></div>
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="text-slate-600 mb-6 max-w-md">The application encountered an unexpected error. Please try refreshing the page.</p>
          <div className="text-left w-full max-w-2xl bg-slate-900 text-slate-300 p-6 rounded-xl overflow-auto border border-slate-800 shadow-2xl">
            <p className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-widest">Error Details:</p>
            <pre className="text-xs font-mono whitespace-pre-wrap">{String(errorMsg)}</pre>
          </div>
          <button onClick={() => window.location.reload()} className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg">Reload Application</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Splash Screen ---
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 100);
    const t2 = setTimeout(() => setStage(2), 2200);
    const t3 = setTimeout(onComplete, 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-700 ease-in-out ${stage === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'} px-4 text-center`}>
      <div className="absolute top-1/3 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className={`relative z-10 transform transition-all duration-1000 ease-out flex flex-col items-center ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative flex items-center justify-center mb-6 md:mb-8">
          <div className="absolute w-20 md:w-24 h-20 md:h-24 bg-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-12 md:w-16 h-12 md:h-16 bg-cyan-400/30 rounded-full animate-pulse"></div>
          <Droplet className="text-cyan-400 relative z-10 animate-bounce" size={48} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 tracking-tight text-center mb-4 uppercase leading-tight">BOSON White Water</h1>
        <div className="flex items-center space-x-2 md:space-x-3">
          <span className="h-[1px] w-6 md:w-8 bg-blue-500/50"></span>
          <p className="text-cyan-200/80 font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase text-xs md:text-sm">STP Treated Water to Potable Water</p>
          <span className="h-[1px] w-6 md:w-8 bg-blue-500/50"></span>
        </div>
        <div className="mt-10 md:mt-12 w-40 md:w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all ease-in-out" style={{ width: stage >= 1 ? '100%' : '0%', transitionDuration: '2000ms' }}></div>
        </div>
      </div>
    </div>
  );
};

// --- Navbar ---
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = (page: string) => { setCurrentPage(page); setIsOpen(false); window.scrollTo(0, 0); };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center gap-2">
              <Droplets className="text-blue-600" size={24} />
              <span className="hidden sm:inline uppercase tracking-tight">BOSON White Water</span>
              <span className="sm:hidden uppercase tracking-tight">BOSON</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-8 text-sm xl:text-base font-sans">
            {[
              { key: 'home', label: 'Home' }, { key: 'about', label: 'About Us' },
              { key: 'methodology', label: 'How It Works' }, { key: 'case-studies', label: 'Testimonials' },
              { key: 'media', label: 'Media' }, { key: 'contact', label: 'Contact' }
            ].map(item => (
              <button key={item.key} onClick={() => handleNav(item.key)} className={`transition-colors font-semibold ${currentPage === item.key ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>{item.label}</button>
            ))}
            <button onClick={() => handleNav('booking')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">Book Tanker</button>
          </div>
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 -mr-2">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col shadow-inner text-sm font-sans">
          {[
            { key: 'home', label: 'Home' }, { key: 'about', label: 'About Us' },
            { key: 'methodology', label: 'How It Works' }, { key: 'case-studies', label: 'Testimonials' },
            { key: 'media', label: 'Media' }, { key: 'contact', label: 'Contact Us' },
            { key: 'booking', label: 'Book Water Tanker' }
          ].map(item => (
            <button key={item.key} onClick={() => handleNav(item.key)} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === item.key ? 'text-blue-700 bg-blue-50/50' : item.key === 'booking' ? 'text-blue-600 hover:bg-blue-50' : 'text-slate-600 hover:bg-slate-50'}`}>{item.label}</button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- Fallback image handler ---
const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://placehold.co/800x450/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
};

// --- Hero ---
const Hero = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <div className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-slate-900/60 to-blue-950/90"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white font-sans">
      <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 backdrop-blur-md border border-white/20 shadow-lg">
        <Activity className="text-cyan-400" size={14} />
        <span className="text-xs sm:text-sm font-bold text-cyan-50 tracking-wide uppercase">The 3rd Source of Water</span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
        Convert Your <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">STP Treated Water</span> <br className="hidden sm:block"/>To Potable Water
      </h1>
      <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-50 mb-8 sm:mb-10 leading-relaxed font-medium drop-shadow-md">
        Increase your water availability and achieve sustainable water management. Save on tankers, reduce operational costs, and secure your water future.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
        <button onClick={() => { setCurrentPage('methodology'); window.scrollTo(0, 0); }} className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center border border-blue-400">
          How It Works <ArrowRight className="ml-2" size={20} />
        </button>
        <button onClick={() => { setCurrentPage('booking'); window.scrollTo(0, 0); }} className="w-full sm:w-auto bg-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
          Book Water Tanker
        </button>
      </div>
    </div>
  </div>
);

// --- System Metrics ---
const SystemMetrics = () => {
  const metricsData = [
    { label: "Litres of Water Saved", value: "65+ Cr", sub: "650 Million+ Litres" },
    { label: "Lives Touched", value: "80+ L", sub: "8 Million+ People" },
    { label: "Tankers Saved", value: "55+ L", sub: "5.5 Million+ Tankers" },
    { label: "Maintenance Cost", value: "₹ 0", sub: "Zero CapEx OPEX Model" },
  ];
  return (
    <div className="bg-white/90 backdrop-blur-xl py-8 sm:py-12 border-b border-white/20 relative z-20 -mt-6 sm:-mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-100 font-sans">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 text-slate-900">
        {metricsData.map((stat, idx) => (
          <div key={idx} className="text-center relative">
            {idx !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200"></div>}
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-1">{stat.value}</div>
            <div className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider">{stat.label}</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Solutions ---
const ThirdSourceConcept = () => (
  <div className="py-16 md:py-20 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 leading-tight uppercase tracking-tight">Our Solutions</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Water is going to be scarce in the coming years and there is an immediate need to work on sustainable water management.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-slate-900">
        {[
          { Icon: Building, title: "Apartments", desc: "Recharge groundwater and reuse STP water safely for daily utilities and flushing.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", alt: "Residential Solution" },
          { Icon: Briefcase, title: "Shopping Malls & IT", desc: "Improve HVAC efficiency and reduce cooling tower blowdown by 90% using potable recycled water.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", alt: "Commercial HVAC" },
          { Icon: Factory, title: "Industry & Laundry", desc: "Achieve ultra-low TDS water for industrial processes, quality wash, and low maintenance.", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800", alt: "Industrial Recovery" }
        ].map((card, idx) => (
          <div key={idx} className="text-center bg-white/80 p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm w-full md:w-1/3 hover:-translate-y-1 transition-transform group overflow-hidden">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50/80 backdrop-blur-md text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
              <card.Icon size={28} />
            </div>
            <div className="font-bold text-slate-800 text-lg sm:text-xl mb-2 uppercase tracking-tight">{card.title}</div>
            <div className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">{card.desc}</div>
            <div className="h-48 rounded-2xl overflow-hidden relative shadow-inner">
              <img src={card.img} alt={card.alt} className="w-full h-full object-cover opacity-80 mix-blend-multiply" onError={(e) => handleImgError(e, card.title)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Home Highlights ---
const HomeHighlights = () => (
  <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl border-b border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 border border-blue-200">
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight uppercase tracking-tight">High Quality Water<br/>Features That Enable Savings</h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">We bring solutions to make life easier for our customers. Enjoy a World-Class Water Treatment experience and expertise without the capital burden.</p>
          <div className="space-y-4 sm:space-y-6">
            {[
              { Icon: Activity, iconClass: "text-cyan-600", title: "Real-time Water Monitoring", desc: "Track water quality parameters and consumption data in real-time via IoT." },
              { Icon: Settings, iconClass: "text-blue-600", title: "Turnkey Solution", desc: "Custom-engineered systems installed and maintained by our expert operations team." }
            ].map((item, idx) => (
              <div key={idx} className="flex">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 flex items-center justify-center ${item.iconClass} shrink-0 mr-3 sm:mr-4 border border-slate-200 shadow-sm`}>
                  <item.Icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-950/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800/50 group">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-[60px] sm:blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/20 rounded-full blur-[60px] sm:blur-[80px]"></div>
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 border border-cyan-500/30 relative z-10">
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">The OPEX Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6 relative z-10 leading-tight uppercase tracking-tight">Pay only for the water you use.</h2>
          <p className="text-sm sm:text-base text-blue-100/80 mb-6 sm:mb-8 leading-relaxed relative z-10 font-medium">Zero capital investment for the equipment. We install, operate, and maintain the tertiary 11-stage system.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-4 shadow-sm">
              <PiggyBank className="text-emerald-400 shrink-0" size={28}/>
              <div><div className="text-white font-bold text-sm uppercase tracking-tight">₹0 Maintenance</div><div className="text-xs text-cyan-100/80 font-medium">Fully covered by Boson</div></div>
            </div>
            <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-4 shadow-sm">
              <Truck className="text-blue-400 shrink-0" size={28}/>
              <div><div className="text-white font-bold text-sm uppercase tracking-tight">Tanker Delivery</div><div className="text-xs text-blue-100/80 font-medium">12KL minimum orders</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Benefits ---
const HomeBenefits = () => (
  <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
      <div className="inline-flex items-center space-x-2 bg-blue-100/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 border border-blue-200 shadow-sm">
        <span className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-widest">The Advantages</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight">Benefits of Using Boson</h2>
      <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">Transform your wastewater into a highly profitable, sustainable operational asset.</p>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[
        { img: benefitZeroCapex, title: "Zero CapEx", desc: "Our Pay-Per-Use model eliminates upfront investment and maintenance burdens.", bgImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" },
        { img: benefitChemicalReduction, title: "65% Chemical Reduction", desc: "Exceptionally low TDS water reduces the need for chemicals in cooling towers.", bgImg: "https://images.unsplash.com/photo-1532187863486-abf920a789cd?auto=format&fit=crop&q=80&w=600" },
        { img: benefitMonitoring, title: "Real-Time Monitoring", desc: "Our IoT systems allow constant tracking of water quality, ensuring consistency.", bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
        { img: benefitAssetLife, title: "Extended Asset Life", desc: "Cooling tower fills and condensers remain pristine, significantly extending asset life.", bgImg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" },
        { img: benefitZld, title: "ZLD Compliant", desc: "Waste water is sent back to the STP inlet, ensuring Zero Liquid Discharge compliance.", bgImg: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=600" },
        { img: benefitBlowdown, title: "Reduced Blowdown", desc: "Blowdown loss is practically eliminated, saving millions of litres monthly.", bgImg: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&q=80&w=600" }
      ].map((ben, idx) => (
        <div key={idx} className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all group shadow-sm overflow-hidden">
          <img src={ben.bgImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <img src={ben.img} alt={ben.title} className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover mb-4 sm:mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{ben.title}</h3>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">{ben.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Comparison ---
const HomeDifference = () => (
  <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl border-y border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase tracking-tight">How Are We Different?</h2>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center text-slate-900">
      {[
        { title: "STP + UF + RO", subtitle: "Conventional Setup", Icon: Filter, iconClass: "text-slate-400 mb-4", features: ["Huge Capital Investment", "13 to 18 Paise / Litre", "2 to 3 Shifts Manpower", "Large Space Requirement"], bg: "bg-slate-50/80" },
        { title: "BOSON White Water", subtitle: "The 3rd Source", Icon: Droplets, iconClass: "text-cyan-400 mb-4 animate-pulse", features: ["Zero CapEx (Pay-Per-Use)", "7 to 7.5 Paise / Litre", "Fully Automated (IoT)", "Highly Compact & Modular"], bg: "bg-slate-900/95 shadow-2xl scale-105 z-10", text: "text-white", highlight: true },
        { title: "STP + Softener", subtitle: "Basic Treatment", Icon: Layers, iconClass: "text-slate-400 mb-4", features: ["Moderate Capital Required", "1.5 to 2.5 Paise / Litre", "TDS / Organics remain high", "Manual Operation Required"], bg: "bg-slate-50/80" }
      ].map((col, idx) => (
        <div key={idx} className={`${col.bg} p-8 rounded-[2rem] border border-slate-200 transition-all ${col.highlight ? 'border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)]' : ''} shadow-sm`}>
          <div className="text-center mb-8">
            <col.Icon className={col.iconClass} size={40} />
            <h3 className={`text-2xl font-bold ${col.text || 'text-slate-900'} mb-1 uppercase tracking-tight`}>{col.title}</h3>
            <p className={`text-xs font-bold uppercase tracking-widest ${col.highlight ? 'text-cyan-400' : 'text-slate-400'}`}>{col.subtitle}</p>
          </div>
          <ul className="space-y-4 font-sans">
            {col.features.map((feat, fidx) => (
              <li key={fidx} className="flex items-center text-sm font-semibold">
                {col.highlight ? <CheckCircle size={16} className="text-cyan-400 mr-2 shrink-0" /> : <X size={16} className="text-red-400 mr-2 shrink-0" />}
                <span className={col.highlight ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// --- Cooling Tower ---
const BosonAdvantage = () => {
  const metrics = [
    { title: "Chemical Usage", val: "65% Reduction", Icon: TestTube },
    { title: "Approach Temp", val: "< 1 - 2°C", Icon: ThermometerSun },
    { title: "Blowdown Loss", val: "90% Reduction", Icon: Droplets },
    { title: "Energy Savings", val: "30-35% Less", Icon: BatteryCharging }
  ];
  return (
    <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-6 uppercase tracking-tight leading-tight">Cooling Tower Transformation</h2>
          <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">By using potable standard BOSON White Water, you achieve higher Cycles of Concentration (COC), preserving your high-value HVAC assets indefinitely.</p>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <m.Icon className="text-blue-600 mb-3" size={24} />
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">{m.title}</p>
                <p className="text-sm font-bold text-blue-700 uppercase tracking-tight">{m.val}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 aspect-video relative group">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" alt="Industrial Cooling Towers" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" onError={(e) => handleImgError(e, 'Cooling+Towers')} />
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

// --- Financial ---
const FinancialSavings = () => (
  <div className="py-8 bg-white/90 border-b border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tight leading-tight">Financial Impact</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { title: "MNC IT Park", save: "₹ 1.2 Lakh / Month", loc: "Bengaluru" },
          { title: "8 Lakh Sq. Ft. Mall", save: "₹ 1.75 Lakh / Month", loc: "Bengaluru" }
        ].map((c, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-[2rem] text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-sm border border-slate-800">
            <div className="absolute top-0 right-0 bg-blue-600 px-6 py-2 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest">{c.loc}</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{c.title}</h3>
            <div className="text-3xl font-black text-cyan-400 mb-2">{c.save}</div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wider">Direct monthly utility savings</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Clients ---
const Clients = ({ bgClass }: { bgClass: string }) => (
  <div className={`py-8 ${bgClass} text-center text-slate-900 font-sans`}>
    <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 leading-tight uppercase tracking-tight">Trusted by Global Industry Leaders</h2>
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 font-bold uppercase tracking-widest text-[10px] sm:text-xs px-4">
      {["Brigade", "RMZ Corp", "Puravankara", "SKF India", "Schneider"].map(name => (
        <span key={name} className="px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:opacity-100 hover:shadow-md">{name}</span>
      ))}
    </div>
  </div>
);

// --- Methodology ---
const MethodologyPage = () => {
  const methodologyStages = [
    { Icon: Filter, title: "100 Micron Automatic Filtration", desc: "Automatic filtration system reducing suspended solids and particles up to 100 microns.", img: step100Micron },
    { Icon: Layers, title: "Clintoptilolite Filtration", desc: "Clintoptilolite based filtration system comprises of imported media for superior clarity.", img: stepClinoptilolite },
    { Icon: Layers, title: "Alumino Silicate Filter", desc: "Efficient removal of suspended solids present in the waste water using crushed glass beads.", img: stepAluminosilicate },
    { Icon: TestTube, title: "Initial pH Correction", desc: "pH correction system designed to prevent bio-fouling and optimize chemical performance.", img: stepPhCorrection },
    { Icon: Wind, title: "Odour Reduction Filter", desc: "Loaded with High IV Activated carbon & MnO2 to eliminate odor and chlorine residuals.", img: "https://images.unsplash.com/photo-1585302558986-0b0e8c0e44d1?auto=format&fit=crop&q=80&w=800" },
    { Icon: Droplets, title: "Antiscalant Dosing System", desc: "Protects membranes from mineral scaling, extending system life and efficiency.", img: stepAntiscalant },
    { Icon: Filter, title: "Micron Filtration Stage 1", desc: "Precision micron-level particle removal for pre-filtration security of the membranes.", img: stepMicron1 },
    { Icon: Filter, title: "Micron Filtration Stage 2", desc: "Absolute ultra-fine particle elimination before high-recovery modules.", img: stepMicron2 },
    { Icon: Activity, title: "XFR Membrane Filtration", desc: "The core recovery system, reducing dissolved solids and pathogens to zero using advanced membrane technology.", img: stepXfrMembrane },
    { Icon: TestTube, title: "Final pH Correction", desc: "Balances pH strictly to meet the BIS 10500:2012 potability standards.", img: stepFinalPh },
    { Icon: ShieldCheck, title: "Disinfection System", desc: "Final multi-step UV and ORP disinfection guaranteeing absolute microbiological safety.", img: stepDisinfection }
  ];

  const waterQuality = [
    { param: "pH", cpcb: "6.5 to 9", feed: "5.5 to 9", output: "6.5 to 8.5" },
    { param: "COD", cpcb: "50 Max", feed: "< 50", output: "Nil" },
    { param: "BOD", cpcb: "10 Max", feed: "< 30", output: "Nil" },
    { param: "TSS", cpcb: "20 Max", feed: "< 20", output: "1 Max" },
    { param: "Turbidity", cpcb: "2 NTU", feed: "< 5 NTU", output: "1 NTU" },
    { param: "TDS", cpcb: "-", feed: "< 1500 ppm", output: "90% reduction (< 100 ppm)" },
    { param: "Total Hardness", cpcb: "-", feed: "< 700 ppm", output: "80-90% reduction" },
    { param: "Faecal Coliform", cpcb: "< 100", feed: "< 100 ml/ 10 Mpn", output: "Nil" },
  ];

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 text-slate-900 font-sans">
      <div className="relative py-16 sm:py-24 bg-blue-950/60 backdrop-blur-sm overflow-hidden border-b border-blue-900/30 text-white">
        <div className="absolute top-0 right-0 w-64 md:w-[600px] h-64 md:h-[600px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-cyan-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <Settings size={14} className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Process</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight uppercase">Technical Methodology</h1>
          <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">A precise 11-step journey transforming treated sewage into flawlessly pure, potable water through molecular filtration.</p>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologyStages.map((stage, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-slate-200/60 hover:border-blue-300 transition-all hover:-translate-y-1 relative overflow-hidden group">
                <div className="relative z-10 text-slate-900">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100 shadow-sm">
                    <stage.Icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight uppercase tracking-tight text-slate-900">{stage.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">{stage.desc}</p>
                  {stage.img && (
                    <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center relative shadow-inner">
                      <img src={stage.img} alt={stage.title} className="w-full h-full object-cover opacity-90 transition-transform group-hover:scale-105 duration-700" onError={(e) => handleImgError(e, 'Technical+Process')} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 text-slate-900">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">Why Boson Outperforms</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-900">
            <table className="w-full text-left border-collapse min-w-[600px] font-sans">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Parameters</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">STP + UF + RO</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">STP + Softener</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs bg-blue-700">BOSON System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700 text-sm">
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Investment</td><td className="p-6 font-semibold">Huge Capital</td><td className="p-6 font-semibold">Moderate Capital</td><td className="p-6 font-bold text-blue-700 bg-blue-50/30 uppercase tracking-tight">Zero CapEx</td></tr>
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Cost / Litre</td><td className="p-6 font-semibold">13 to 18 Paise</td><td className="p-6 font-semibold">1.5 to 2.5 Paise</td><td className="p-6 font-bold text-blue-700 bg-blue-50/30 uppercase tracking-tight">7 to 7.5 Paise</td></tr>
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Quality</td><td className="p-6 font-semibold">Low TDS</td><td className="p-6 font-semibold">High TDS</td><td className="p-6 font-bold text-blue-700 bg-blue-50/30 uppercase tracking-tight">Consistently Clean</td></tr>
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Manpower</td><td className="p-6 font-semibold">2-3 Shifts</td><td className="p-6 font-semibold">1 Shift</td><td className="p-6 font-bold text-blue-700 bg-blue-50/30 uppercase tracking-tight">Fully Automated</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50/90 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 text-slate-900">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">Water Quality Standards</h2>
          <p className="text-slate-600 mt-2 font-medium">Feed Water Limitations vs. BOSON Potable Output</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-900 text-sm">
            <table className="w-full text-left border-collapse min-w-[600px] font-sans">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs text-slate-900">Parameters</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs text-slate-900">CPCB Standard</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs text-slate-900">Feed Water Limiting</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs text-blue-800 bg-blue-50/50">BOSON Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {waterQuality.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900 uppercase tracking-tight">{item.param}</td>
                    <td className="p-6 font-semibold">{item.cpcb}</td>
                    <td className="p-6 font-semibold">{item.feed}</td>
                    <td className="p-6 font-bold text-blue-800 bg-blue-50/20 uppercase tracking-tight">{item.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- About ---
const About = () => {
  const founders = [
    { name: "Vikas Brahmavar", role: "Founder", exp: "16+ Years in Water Industry", desc: "A visionary recognized as a Mission Paani Awardee, dedicated to solving India's water crisis through innovative recycling and reuse strategies.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80", email: "vikas@transwaters.com" },
    { name: "Gowthaman Desingh", role: "Co-Founder", exp: "8+ Years in Water Industry", desc: "An IoT expert leading the technological frontier of BWW, ensuring our 11-stage systems are fully automated, efficient, and remotely monitored.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80", email: "gowtham@transwaters.com" }
  ];
  const experts = [
    { name: "Nagaraja Prakasam", role: "Board Member", org: "Acumen, IAN", desc: "Angel Investor fostering impactful sustainable ventures and social entrepreneurship.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Vishwanath (Zen Rainman)", role: "Advisor", org: "Policy Advisor to Government", desc: "Renowned water conservationist, policy expert and strategic advisor on urban water management.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-16 sm:py-24 bg-blue-950/60 backdrop-blur-sm overflow-hidden border-b border-blue-900/30 text-white">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Our Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight uppercase leading-tight">Pioneering Water Security</h1>
          <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Transwater Systems Pvt. Ltd. was founded with a singular mission: to make fresh water supply sustainable through Direct Potable Reuse (DPR).</p>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold leading-tight uppercase tracking-tight">Meet the Founders</h2></div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {founders.map((founder, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => handleImgError(e, founder.name)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-1 uppercase tracking-tight">{founder.name}</h3>
                    <p className="text-cyan-400 font-bold uppercase text-[10px] tracking-widest">{founder.role}</p>
                  </div>
                </div>
                <div className="p-8 text-slate-900">
                  <div className="inline-flex items-center text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm">{founder.exp}</div>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6">{founder.desc}</p>
                  <a href={`mailto:${founder.email}`} className="inline-flex items-center font-bold text-slate-900 hover:text-blue-700 transition-colors"><Mail size={16} className="mr-2" /> {founder.email}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center mb-12"><h3 className="text-2xl sm:text-3xl font-bold leading-tight uppercase tracking-tight">Guided by Industry Experts</h3></div>
            <div className="grid sm:grid-cols-2 max-w-4xl mx-auto gap-8 px-4 sm:px-0">
              {experts.map((expert, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center text-slate-900">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-md transition-transform group-hover:scale-105 duration-500">
                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" onError={(e) => handleImgError(e, expert.name)} />
                  </div>
                  <h4 className="text-xl font-bold mb-1 leading-tight uppercase tracking-tight">{expert.name}</h4>
                  <p className="text-blue-700 font-bold text-[10px] uppercase tracking-widest mb-4">{expert.role} • {expert.org}</p>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{expert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Video Gallery ---
const VideoGallery = ({ bgClass }: { bgClass: string }) => (
  <div className={`py-16 ${bgClass} font-sans`}>
    <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-slate-900">
      {[
        { id: "LXb3EKWsInQ", title: "BWW Process Overview", desc: "Detailed breakdown of the recovery process." },
        { id: "tgbNymZ7vqY", title: "Impact at RMZ Ecoworld", desc: "Case study of large-scale installation." },
        { id: "9P8_E-Hl0P0", title: "Visionary Water Awards", desc: "Recognition of our sustainable tech." }
      ].map((v, i) => (
        <div key={i} className="bg-white p-4 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-200 shadow-inner">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${v.id}`} frameBorder="0" allowFullScreen title={v.title}></iframe>
          </div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors uppercase tracking-tight">{v.title}</h3>
          <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed">{v.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Media Page ---
const MediaPage = () => (
  <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
    <div className="relative py-16 sm:py-24 bg-blue-950/60 backdrop-blur-sm overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Youtube size={16} className="text-red-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Multimedia</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Media Gallery</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Technical breakdowns and news features showcasing the impact of direct potable reuse.</p>
      </div>
    </div>
    <div className="bg-slate-50/90 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><VideoGallery bgClass="bg-transparent" /></div>
    </div>
  </div>
);

// --- Testimonials ---
const CaseStudiesPage = () => {
  const testimonials = [
    { quote: "Boson White Water has completely transformed our approach to water management. The Zero CapEx model and the exceptional quality of water we receive for our cooling towers have significantly reduced our operational costs and chemical usage.", name: "Facility Head", company: "Major IT Park, Bengaluru", rating: 5 },
    { quote: "Implementing the 11-stage Boson system was a game-changer for our residential complex. We now confidently reuse our STP water, easing our dependency on external water tankers.", name: "Sustainability Committee", company: "Premium Apartment Complex", rating: 5 },
    { quote: "The ultra-low TDS water provided by Boson's technology has extended the life of our industrial equipment. Their real-time IoT monitoring gives us complete peace of mind.", name: "Operations Director", company: "Leading Manufacturing Plant", rating: 5 },
    { quote: "A truly visionary solution. They handled everything from installation to maintenance without any upfront investment. The approach temperature in our HVAC systems has drastically improved.", name: "Chief Engineer", company: "Commercial Shopping Mall", rating: 5 }
  ];
  const clientTableData = [
    { org: "RMZ Ecoworld", sector: "IT Park", loc: "Bengaluru", impact: "Zero fresh water for cooling towers" },
    { org: "Brigade Group", sector: "Real Estate", loc: "Bengaluru", impact: "Sustainable potable water reuse" },
    { org: "Puravankara", sector: "Residential", loc: "Bengaluru", impact: "Flushing & landscaping independence" },
    { org: "SKF India", sector: "Industrial", loc: "Pune / Bengaluru", impact: "Ultra-low TDS water for machining" },
    { org: "Schneider Electric", sector: "Industrial", loc: "Bengaluru", impact: "HVAC efficiency & ZLD compliance" },
    { org: "Lulu Mall", sector: "Commercial", loc: "Bengaluru", impact: "Reduced tanker dependency by 80%" }
  ];

  return (
    <div className="pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-24 bg-blue-950/60 text-center text-white border-b border-blue-900/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Success Stories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Client Testimonials</h1>
          <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed">Proven performance across major tech parks, malls, and industrial complexes in Bengaluru.</p>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 relative group overflow-hidden">
                <Quote className="text-slate-100 absolute -top-4 -right-4 rotate-180 transition-transform group-hover:scale-110 duration-500" size={120} />
                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-6">{[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="mr-1" />)}</div>
                  <p className="text-slate-700 text-lg font-medium leading-relaxed mb-10">"{t.quote}"</p>
                  <div className="flex items-center border-t border-slate-100 pt-6">
                    <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">{t.name.charAt(0)}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-tight">{t.name}</h4>
                      <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest mt-1">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-white/90 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">Organizations Benefitted</h2>
            <p className="text-slate-600 mt-2 font-medium text-lg">Leading enterprises transitioning to the 3rd source of water.</p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-900 text-sm">
            <table className="w-full text-left border-collapse min-w-[800px] font-sans">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Organization</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Sector</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Location</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Key Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {clientTableData.map((client, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900 uppercase tracking-tight flex items-center gap-3"><CheckCircle2 size={16} className="text-cyan-500" />{client.org}</td>
                    <td className="p-6 font-semibold text-blue-700">{client.sector}</td>
                    <td className="p-6 font-semibold">{client.loc}</td>
                    <td className="p-6 text-slate-600 leading-relaxed">{client.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Booking ---
const BookingPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', volume: '12KL', date: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', phone: '', address: '', volume: '12KL', date: '' }); }, 4000);
  };

  const bookingFeatures = [
    { icon: <Droplet size={56} className="text-cyan-500" strokeWidth={1.5} />, highlight: "TDS < 70 ppm", title: "High Quality Low TDS Water", desc: "Low TDS water may replace DM water in many Industries" },
    { icon: <div className="relative w-14 h-14 flex items-center justify-center"><Layers size={48} className="text-blue-400" strokeWidth={1.5} /><X size={56} className="text-red-500 absolute drop-shadow-md" strokeWidth={2.5} /></div>, title: "Save Costs and No Headache", desc: "No Additional Water Treatment Required in your Industry" },
    { icon: <Truck size={56} className="text-amber-500" strokeWidth={1.5} />, title: "Supply in 12 KL Tankers", desc: "Water is supplied in 12 KL tankers to Industries" },
    { icon: <Leaf size={56} className="text-emerald-500" strokeWidth={1.5} />, title: "Sustainable Water", desc: "Sustainable water sources — #StopBorewellExploitation" }
  ];

  const applications = [
    { title: "Cooling Towers", desc: "Save on chemicals and significantly improve efficiency & life of your cooling tower infrastructure.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
    { title: "Boilers", desc: "Low TDS water drastically reduces scaling, increasing heat transfer efficiency and boiler lifespan.", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" },
    { title: "Electroplating", desc: "Ensure smooth, high-precision, and defect-free coating processes using our ultra-low TDS water.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "Plastic Extrusion", desc: "Reduces downtime, prevents production delays, and lowers overall maintenance costs.", img: "https://images.unsplash.com/photo-1605513524006-063fe6217d12?auto=format&fit=crop&q=80&w=800" },
    { title: "Coolant Mixture", desc: "Improves consistency and lowers treatment requirements, maximizing your operational savings.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
    { title: "Injection Molding", desc: "Improves surface finish quality in molded products and significantly extends your mold life.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="pt-16 sm:pt-20 font-sans text-slate-900 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 backdrop-blur-md rounded-full px-4 py-1.5 mb-4 border border-blue-200 shadow-sm">
            <Truck size={16} className="text-blue-700" />
            <span className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-widest">Express Delivery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight text-slate-900">Book a Water Tanker</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 font-medium">Fast, reliable, and highly purified potable water delivered directly to your facility. Minimum order volume: 12KL.</p>
        </div>

        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-slate-900 uppercase tracking-tight">Save Cost with Boson</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bookingFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col items-center text-center hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="h-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
                {feat.highlight && <div className="text-blue-700 font-extrabold text-sm mb-3 uppercase tracking-widest">{feat.highlight}</div>}
                <h4 className={`text-lg font-bold text-slate-900 mb-3 leading-tight ${feat.highlight ? '' : 'mt-7'} uppercase tracking-tight`}>{feat.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed flex-grow">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-slate-900 uppercase tracking-tight">Industrial Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square shadow-lg border border-slate-200/50 cursor-default">
                <img src={app.img} alt={app.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => handleImgError(e, app.title)} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight drop-shadow-md">{app.title}</h3>
                  <div className="h-1 w-12 bg-cyan-400 mb-4 rounded-full"></div>
                  <p className="text-blue-50 font-medium leading-relaxed drop-shadow-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => document.getElementById('tanker-booking-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 text-white font-bold px-10 py-4 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center mx-auto text-lg">
              Book Tanker <ArrowDownRight className="ml-2" size={20} />
            </button>
          </div>
        </div>

        <div id="tanker-booking-form" className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row scroll-mt-24">
          <div className="lg:w-5/12 relative bg-slate-950 text-white overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" alt="Boson Water Tanker" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" onError={(e) => handleImgError(e, 'Boson+Tanker+Fleet')} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-blue-900/40"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 z-10 pointer-events-none select-none transform -rotate-12 scale-125 md:scale-150">
              <span className="text-8xl sm:text-9xl font-black text-white uppercase tracking-tighter whitespace-nowrap leading-none drop-shadow-2xl">BOSON</span>
              <span className="text-4xl sm:text-6xl font-bold text-cyan-400 uppercase tracking-widest whitespace-nowrap mt-2 drop-shadow-xl">White Water</span>
            </div>
            <div className="relative z-20 p-8 sm:p-12 mt-auto">
              <h3 className="text-3xl font-extrabold mb-4 uppercase tracking-tight">Premium Fleet</h3>
              <p className="text-blue-100 font-medium leading-relaxed mb-8">Our dedicated fleet of high-grade tankers ensures the absolute purity of BOSON White Water is maintained from our plant to your reservoir.</p>
              <div className="space-y-6">
                {[
                  { Icon: Droplet, title: "Food-Grade Tanks", sub: "100% rust-free storage" },
                  { Icon: Clock, title: "On-Time Delivery", sub: "GPS tracked fleet routing" },
                  { Icon: ShieldCheck, title: "Quality Assured", sub: "Sealed & certified dispatch" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center border border-blue-500/50 backdrop-blur-md shrink-0"><item.Icon className="text-cyan-400" size={24} /></div>
                    <div><h4 className="font-bold uppercase tracking-tight">{item.title}</h4><p className="text-sm text-slate-300">{item.sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 p-8 sm:p-12 relative z-10 bg-white">
            {submitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-20 text-center px-6 transition-all duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100"><CheckCircle size={48} /></div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Booking Confirmed!</h3>
                <p className="text-slate-600 font-medium text-lg max-w-sm">Your tanker request has been received. Our logistics team will contact you shortly.</p>
              </div>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-tight text-slate-900">Delivery Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Delivery Address</label>
                <textarea required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none font-medium text-slate-900" placeholder="Complete site address for tanker access..."></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Volume Required</label>
                  <select required value={formData.volume} onChange={(e) => setFormData({...formData, volume: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 appearance-none">
                    <option value="12KL">12 KL (12,000 Litres)</option>
                    <option value="24KL">24 KL (24,000 Litres)</option>
                    <option value="Custom">Custom Volume (Specify in Address)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Preferred Delivery Date</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" />
                </div>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-cyan-500 text-slate-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-cyan-400 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center uppercase tracking-widest">
                  Confirm Booking <ArrowRight className="ml-3" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact ---
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', message: '' }); }, 4000);
  };

  return (
    <div className="pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-24 bg-blue-950/60 text-center text-white border-b border-blue-900/20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <Send size={16} className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Contact Us</h1>
          <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed">Ready to transform your water infrastructure and reduce operational costs? Our team is here to help.</p>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight text-slate-900">Reach Out To Us</h2>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg">Whether you have a question about our 11-stage process, pricing, or want to schedule a site visit, our team is ready to answer all your questions.</p>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mr-5 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300"><MapPin size={28} /></div>
                  <div><h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-1">Our Headquarters</h4><p className="text-slate-600 font-medium leading-relaxed">Transwater Systems Pvt. Ltd.<br/>No. 64, Garden Layout, H.S.R Layout<br/>2nd Sector, Bangalore, India - 560102</p></div>
                </div>
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-cyan-600 shrink-0 mr-5 group-hover:scale-110 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-all duration-300"><Phone size={28} /></div>
                  <div><h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-1">Call Us</h4><p className="text-slate-600 font-medium leading-relaxed">+91-8073182542</p><p className="text-sm text-slate-500 font-medium mt-1">Mon-Fri from 9am to 6pm</p></div>
                </div>
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mr-5 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300"><Mail size={28} /></div>
                  <div><h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-1">Email Us</h4><a href="mailto:inquiry@transwaters.com" className="text-slate-600 font-medium leading-relaxed hover:text-blue-600 transition-colors">inquiry@transwaters.com</a></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60 relative overflow-hidden">
              {submitted && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-10 text-center px-6 transition-all duration-500">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100"><CheckCircle size={48} /></div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Message Sent!</h3>
                  <p className="text-slate-600 font-medium text-lg max-w-sm">Thank you for reaching out. Our technical team will review your requirements and get back to you shortly.</p>
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-tight text-slate-900">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="John Doe" /></div>
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label><input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="john@company.com" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="+91 98765 43210" /></div>
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label><input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="Tech Park Inc." /></div>
                </div>
                <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label><textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none font-medium text-slate-900" placeholder="Tell us about your water infrastructure requirements..."></textarea></div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all flex items-center justify-center uppercase tracking-widest mt-2">Submit Inquiry <Send className="ml-3" size={20} /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Footer ---
const Footer = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <footer className="relative bg-slate-950 text-slate-300 pt-32 pb-8 border-t border-slate-800 font-sans mt-24">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden relative border border-white/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight uppercase tracking-tight">Ready to transform?</h3>
          <p className="text-blue-50 font-medium leading-relaxed">Switch to the 3rd source of water with our Zero CapEx model.</p>
        </div>
        <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }} className="relative z-10 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center group whitespace-nowrap">
          Contact Us <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
        </button>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-slate-300">
        <div className="lg:col-span-1">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 block uppercase tracking-tight leading-tight">BOSON White Water</span>
          <p className="text-slate-400 leading-relaxed mb-6 text-sm font-medium">Transwater Systems Pvt. Ltd.<br/><br/>Converting treated sewage into potable water, drastically reducing stress on finite natural resources.</p>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 inline-block shadow-inner">
            <span className="flex items-center text-xs font-bold text-cyan-400 tracking-widest uppercase"><CheckCircle2 className="text-cyan-500 mr-2" size={18} /> Mission Paani Awardee</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            {[{ key: 'home', label: 'Home' }, { key: 'about', label: 'About Us' }, { key: 'methodology', label: 'How It Works' }, { key: 'media', label: 'Media' }].map(item => (
              <li key={item.key}><button onClick={() => { setCurrentPage(item.key); window.scrollTo(0,0); }} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-cyan-500" /> {item.label}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li className="flex items-start"><Mail className="text-cyan-400 mr-3 mt-1 shrink-0" size={18} /><a href="mailto:inquiry@transwaters.com" className="hover:text-cyan-300 transition-colors break-all leading-relaxed">inquiry@transwaters.com</a></li>
            <li className="flex items-start"><Phone className="text-cyan-400 mr-3 mt-1 shrink-0" size={18} /><span className="leading-relaxed">+91-8073182542</span></li>
            <li className="flex items-start"><MapPin className="text-cyan-400 mr-3 mt-1 shrink-0" size={18} /><span className="leading-relaxed">No. 64, Garden Layout,<br/>H.S.R Layout, 2nd Sector,<br/>Bangalore, India - 560102</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Social Presence</h4>
          <div className="flex space-x-4 mb-8 text-slate-300">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all hover:scale-110 shadow-lg"><Linkedin size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all hover:scale-110 shadow-lg"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all hover:scale-110 shadow-lg"><Facebook size={20} /></a>
          </div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Design Patent #523072</p>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Boson Whitewater. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="font-bold text-slate-400 tracking-widest uppercase leading-tight flex items-center"><ShieldCheck size={14} className="mr-1.5 text-cyan-500" /> SECURE WATER FUTURE</span>
          <a href="https://www.bosonwhitewater.com" className="hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest leading-tight">bosonwhitewater.com</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- WhatsApp ---
const WhatsAppButton = () => (
  <a href="https://wa.me/918073182542" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-50 hover:scale-110 transition-transform flex items-center justify-center border-2 border-white/20">
    <MessageSquare size={32} strokeWidth={2} />
  </a>
);

// --- Main App ---
const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ErrorBoundary>
      <div className={`min-h-screen text-slate-900 font-sans selection:bg-blue-500 selection:text-white ${showSplash ? 'h-screen overflow-hidden' : ''}`}>
        <div className="fixed inset-0 z-[-1] bg-slate-950">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.25]">
            <source src="https://videos.pexels.com/video-files/3173312/3173312-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply pointer-events-none"></div>
        </div>

        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <div className="relative z-0">
          {currentPage === 'home' && (
            <main>
              <Hero setCurrentPage={setCurrentPage} />
              <SystemMetrics />
              <ThirdSourceConcept />
              <HomeHighlights />
              <HomeBenefits />
              <HomeDifference />
              <BosonAdvantage />
              <FinancialSavings />
              <Clients bgClass="bg-white/90 border-t border-slate-100" />
            </main>
          )}
          {currentPage === 'about' && <About />}
          {currentPage === 'methodology' && <MethodologyPage />}
          {currentPage === 'case-studies' && <CaseStudiesPage />}
          {currentPage === 'media' && <MediaPage />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'booking' && <BookingPage />}
          <Footer setCurrentPage={setCurrentPage} />
          <WhatsAppButton />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
