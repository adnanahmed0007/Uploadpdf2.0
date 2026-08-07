 import React from 'react';
import { Link } from 'react-router-dom';
import { Search, UploadCloud, Smartphone, Zap, ArrowRight, BookMarked } from 'lucide-react';

 

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#1C2333]">
      {/* ---------- Hero ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-8 text-xs font-mono tracking-widest uppercase text-[#5B6472]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E6350] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E6350]"></span>
              </span>
              Catalogue updated daily
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight mb-6">
              The department's<br />
              <span className="text-[#A9822E]">resource shelf,</span><br />
              organized for you.
            </h1>

            <p className="text-lg text-[#5B6472] leading-relaxed max-w-lg mb-10">
              Notes, past papers, and reference material — filed by department,
              branch, and year, so you spend your time studying, not searching.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link to="/login">
                <button className="group px-7 py-3.5 bg-[#1C2333] text-white font-medium rounded-md transition-colors duration-200 hover:bg-[#A9822E] flex items-center gap-2">
                  Get started
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-7 py-3.5 text-[#1C2333] font-medium rounded-md border border-[#1C2333]/20 hover:border-[#1C2333] transition-colors duration-200">
                  Create account
                </button>
              </Link>
            </div>

            <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[#E3DED2] pt-8">
              <Stat value="2,000+" label="Documents" />
              <Stat value="1,000+" label="Active students" />
              <Stat value="100+" label="Subjects" />
            </dl>
          </div>

          {/* Right: catalogue index */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E3DED2] rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#1C2333] text-[#F7F5EF]">
                <BookMarked className="w-4 h-4 text-[#A9822E]" />
                <span className="font-mono text-xs tracking-widest uppercase">Browse the catalogue</span>
              </div>
              <ul className="divide-y divide-[#E3DED2]">
                <IndexRow code="CSE · III" title="Data Structures — Unit Notes" tag="Notes" />
                <IndexRow code="ECE · II" title="Signals & Systems — Mid-Sem 2024" tag="Paper" />
                <IndexRow code="ME · IV" title="Thermodynamics — Formula Sheet" tag="Notes" />
                <IndexRow code="CIV · I" title="Engineering Mechanics — End-Sem 2023" tag="Paper" />
              </ul>
              <div className="px-5 py-3.5 bg-[#F7F5EF] border-t border-[#E3DED2]">
                <Link to="/branchdeaprtemntyear" className="text-sm font-medium text-[#A9822E] hover:underline">
                  View full catalogue →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-[#E3DED2]">
        <div className="max-w-xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl mb-3">Built for how students actually work</h2>
          <p className="text-[#5B6472]">A small set of things, done properly.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E3DED2] border border-[#E3DED2] rounded-lg overflow-hidden">
          <Feature icon={Search} title="Smart search" description="Filter by department, branch, year, or subject in seconds." />
          <Feature icon={UploadCloud} title="Easy upload" description="Share your own notes and help the next batch out." />
          <Feature icon={Smartphone} title="Mobile ready" description="Works cleanly on a phone between lectures." />
          <Feature icon={Zap} title="No waiting" description="Every file downloads instantly, no sign-in walls." />
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-[#E3DED2]">
        <h2 className="font-serif text-3xl sm:text-4xl mb-14">Three steps, start to finish</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Step number="01" title="Sign up" description="Create a free account with your college email." />
          <Step number="02" title="Browse or search" description="Filter by department, year, or subject to narrow in." />
          <Step number="03" title="Download or contribute" description="Save what you need, or upload your own notes for others." />
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-24">
        <div className="bg-[#1C2333] rounded-xl px-10 py-16 sm:px-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Your next exam starts in the catalogue.
          </h2>
          <p className="text-[#B8BFC9] max-w-xl mx-auto mb-9">
            Join students already using it to find the right material, faster.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/signup">
              <button className="px-8 py-3.5 bg-white text-[#1C2333] font-medium rounded-md hover:bg-[#A9822E] hover:text-white transition-colors duration-200">
                Get started now
              </button>
            </Link>
            <Link to="/branchdeaprtemntyear">
              <button className="px-8 py-3.5 text-white font-medium rounded-md border border-white/30 hover:border-white transition-colors duration-200">
                Browse materials
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <div className="font-serif text-3xl">{value}</div>
    <div className="text-sm text-[#5B6472] mt-0.5">{label}</div>
  </div>
);

const IndexRow = ({ code, title, tag }) => (
  <li className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#F7F5EF] transition-colors duration-150">
    <div className="min-w-0">
      <div className="font-mono text-xs text-[#A9822E] tracking-wide mb-1">{code}</div>
      <div className="text-sm text-[#1C2333] truncate">{title}</div>
    </div>
    <span className="shrink-0 text-xs font-medium text-[#5B6472] border border-[#E3DED2] rounded px-2 py-1">
      {tag}
    </span>
  </li>
);

const Feature = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-7">
    <Icon className="w-5 h-5 text-[#A9822E] mb-4" strokeWidth={1.75} />
    <h3 className="font-medium text-[#1C2333] mb-1.5">{title}</h3>
    <p className="text-sm text-[#5B6472] leading-relaxed">{description}</p>
  </div>
);

const Step = ({ number, title, description }) => (
  <div>
    <div className="font-mono text-sm text-[#A9822E] mb-3">{number}</div>
    <h3 className="font-serif text-xl mb-2">{title}</h3>
    <p className="text-[#5B6472] leading-relaxed">{description}</p>
  </div>
);

export default Home;
