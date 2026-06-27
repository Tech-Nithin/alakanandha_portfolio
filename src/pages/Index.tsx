import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

// Components
import SplashCursor from "@/components/SplashCursor";
import SelectedWorks from "./SelectedWorks";
import VectorBridge from "./VectorBridge";
import Footer from "./Footer";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Navigation from "@/components/Navigation";
import Prism from "@/components/Prism";
import Preloader from "@/components/Preloader";
import Lanyard from "@/components/Lanyard/Lanyard";
import VariableProximity from "@/components/VariableProximity/VariableProximity";

// --- Cursor Follower ---
const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-gray-400/50 rounded-full pointer-events-none z-[9999] hidden lg:block backdrop-blur-[1px]"
      style={{ x, y }}
    />
  );
};

const BrandLogo = () => (
  <div className="fixed top-6 left-6 md:top-8 md:left-10 z-50 mix-blend-difference">
    <h1 className="font-sans font-black text-2xl md:text-4xl tracking-tighter text-white flex items-start">
      Alakanandha
      <span className="text-xs md:text-lg font-medium ml-1 -mt-1 md:-mt-2">®</span>
    </h1>
  </div>
);

const AvailabilityBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="absolute z-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 pointer-events-none"
    style={{ top: "2.25rem" }}
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
    </span>
    <span className="font-sans font-black text-[9px] tracking-[0.25em] uppercase text-white">
      Available for work
    </span>
  </motion.div>
);

const SocialStrip = () => {
  const socials = [
    { label: "Portfolio", href: "#work" },
    { label: "Email", href: "mailto:alakanandha@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/alakanandha" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute z-20 hidden md:flex flex-col items-center"
      style={{ right: "64px", top: "112px", bottom: "194px", justifyContent: "center", gap: "1rem" }}
    >
      <span className="w-[1px] h-8 bg-white/30 flex-shrink-0" />
      {socials.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          title={label}
          className="group flex-shrink-0"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="font-sans font-black text-[10px] tracking-[0.22em] uppercase text-white group-hover:opacity-100 transition-opacity duration-300">
            {label}
          </span>
        </a>
      ))}
      <span className="w-[1px] h-8 bg-white/30 flex-shrink-0" />
    </motion.div>
  );
};

const SpinningCTA = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="absolute md:z-30 lg:z-10 hidden md:flex items-center justify-center"
    style={{ bottom: "4rem", right: "4rem" }}
  >
    <style>{`
      @keyframes ctaSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .cta-ring { animation: ctaSpin var(--cta-spin-duration, 10s) linear infinite; transform-origin: center; }
      .cta-wrap:hover .cta-ring { --cta-spin-duration: 3s; }
      .cta-wrap { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      .cta-wrap:hover { transform: scale(1.08); }
    `}</style>
    <a href="#contact" className="cta-wrap group relative flex items-center justify-center w-[130px] h-[130px]" aria-label="Get in touch">
      <svg viewBox="0 0 130 130" className="absolute inset-0 w-full h-full pointer-events-none">
        <circle cx="65" cy="65" r="62" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
      </svg>
      <svg viewBox="0 0 130 130" className="cta-ring absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <path id="cta-circle-path" d="M65,65 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
        </defs>
        <text fill="rgba(255,255,255,1)" fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="900" letterSpacing="4">
          <textPath href="#cta-circle-path">GET IN TOUCH · GET IN TOUCH · GET IN TOUCH ·&nbsp;</textPath>
        </text>
      </svg>
      <span className="absolute inset-4 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out" style={{ transformOrigin: "center" }} />
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 w-6 h-6 text-white group-hover:text-black" style={{ transition: "color 0.3s ease" }}>
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </a>
  </motion.div>
);

const MobileSocialStrip = () => {
  const socials = [
    { label: "Email", icon: Mail, href: "mailto:alakanandha@gmail.com" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/alakanandha" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-6"
    >
      {socials.map(({ label, icon: Icon, href }) => (
        <a key={label} href={href} target={(href.startsWith("mailto") || href.startsWith("#")) ? "_self" : "_blank"} rel="noopener noreferrer"
          className="text-white hover:opacity-75 transition-opacity duration-300 block">
          <Icon size={18} strokeWidth={2.5} />
        </a>
      ))}
    </motion.div>
  );
};

// --- Shimmer Heading ---
const ShimmerHeading = ({ title }: { title: string }) => (
  <>
    <style>{`
      @keyframes shimmer-sweep {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      .shimmer-text {
        background: linear-gradient(
          105deg,
          rgba(255,255,255,0.18) 0%,
          rgba(255,255,255,0.18) 40%,
          rgba(255,255,255,0.95) 50%,
          rgba(255,255,255,0.18) 60%,
          rgba(255,255,255,0.18) 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer-sweep 3.5s linear infinite;
      }
    `}</style>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 md:mb-14 overflow-hidden"
    >
      <h2
        className="shimmer-text font-sans font-black uppercase leading-none tracking-tighter"
        style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
      >
        {title}
      </h2>
    </motion.div>
  </>
);

// --- About Section (appears after hero fixed-reveal, part of scrollable content stack) ---
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative z-20 bg-black text-white font-sans px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={3.0}
          baseWidth={5.0}
          scale={2.5}
          glow={0.8}
          noise={0.3}
          transparent={true}
          suspendWhenOffscreen={true}
        />
      </div>
      <div className="max-w-[1600px] mx-auto relative z-10">

        <ShimmerHeading title="About" />

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-white/40">About</span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 items-start">

          {/* Left: 3D ID Badge Animation */}
          <div className="lg:col-span-5 w-full h-[650px] flex justify-center relative z-10">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage="/alakanandha.png"
              backImage="/alakanandha.png"
              imageFit="cover"
            />
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Profile Summary</span>
                <span className="flex-1 h-px bg-white/10" />
              </div>
              <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight text-white/95">
                <VariableProximity
                  label="Software Engineer with 1+ year of hands-on experience in designing and developing scalable, high-performance web applications using modern technologies including React, Node.js, JavaScript, and Java."
                  className="font-light"
                  fromFontVariationSettings="'wght' 300, 'opsz' 12"
                  toFontVariationSettings="'wght' 800, 'opsz' 30"
                  containerRef={sectionRef}
                  radius={180}
                  falloff="linear"
                />
              </p>
              <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed tracking-wide mt-4">
                <VariableProximity
                  label="Proficient in building full-stack solutions with cloud-based backends such as Supabase and Neon, and experienced in deploying production-ready applications using GitHub and Vercel with seamless API integrations."
                  className="text-white/60"
                  fromFontVariationSettings="'wght' 300, 'opsz' 9"
                  toFontVariationSettings="'wght' 700, 'opsz' 20"
                  containerRef={sectionRef}
                  radius={140}
                  falloff="linear"
                />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Experience Section ---
const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Infosys (Hyderabad, India)",
      period: "Jun 2025 - Present",
      type: "Full-Time",
      points: [
        "Developed scalable full-stack web applications using React, Node.js, JavaScript, and Java technologies.",
        "Built a Company Expense Tracker with AI image recognition automating receipt data extraction.",
        "Designed and developed “CRM” platform enabling seamless influencer and brand collaboration.",
        "Delivered 50+ responsive portfolio websites focusing with optimised UI/UX and performance.",
        "Integrated RESTful APIs and third-party services ensuring secure, efficient, scalable data handling systems.",
        "Utilized Supabase and Neon PostgreSQL for backend services with optimized database structures efficiently.",
        "Managed version control and deployments using GitHub and Vercel establishing smooth CI/CD workflows.",
        "Collaborated across development lifecycle, delivering production-ready solutions."
      ],
    },
  ];

  return (
    <section id="experience" className="relative z-20 bg-black text-white font-sans px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">

        <ShimmerHeading title="Experience" />

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-white/40">Experience</span>
        </motion.div>

        {/* Experience list */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-10 md:py-14 border-t border-white/10 first:border-t-0"
            >
              {/* Left: meta */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                  {String(i + 1).padStart(2, '0')} — {exp.type}
                </span>
                <p className="font-sans text-xl md:text-2xl font-black tracking-tight text-white leading-tight mt-2">
                  {exp.company}
                </p>
                <p className="font-sans text-sm font-medium text-white/40 uppercase tracking-wider mt-1">
                  {exp.period}
                </p>
              </div>

              {/* Right: role + bullets */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  {exp.role}
                </p>
                <ul className="flex flex-col gap-3">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-white/30 shrink-0" />
                      <span className="font-sans text-sm md:text-base text-white/55 font-medium leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Education Section ---
const EducationSection = () => {
  return (
    <section id="education" className="relative z-20 bg-black text-white font-sans px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">

        <ShimmerHeading title="Education" />

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-white/40">Education</span>
        </motion.div>

        {/* Degree row - MCA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-10 md:py-14 border-t border-white/10"
        >
          {/* Left: meta - MCA */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              01 — Graduate
            </span>
            <p className="font-sans text-xl md:text-2xl font-black tracking-tight text-white leading-tight mt-2">
              Osmania University, SF
            </p>
            <p className="font-sans text-sm font-medium text-white/40 uppercase tracking-wider mt-1">
              Siddipet, India
            </p>
          </div>

          {/* Right: details - MCA */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Master of Computer Applications
            </p>
            <p className="font-sans text-sm md:text-base text-white/55 font-medium leading-relaxed max-w-2xl">
              Osmania University, SF, Siddipet (2023 - 2025) — CGPA: 7.89. Languages known: English, Telugu & Hindi.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {['Computer Applications', 'Software Engineering', 'Full-Stack Development', 'Java'].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Degree row - Bachelor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-10 md:py-14 border-t border-white/10"
        >
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              02 — Undergraduate
            </span>
            <p className="font-sans text-xl md:text-2xl font-black tracking-tight text-white leading-tight mt-2">
              Prathibha Degree College
            </p>
            <p className="font-sans text-sm font-medium text-white/40 uppercase tracking-wider mt-1">
              Siddipet, India
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Bachelor of Computer Science
            </p>
            <p className="font-sans text-sm md:text-base text-white/55 font-medium leading-relaxed max-w-2xl">
              Prathibha Degree College, Siddipet (2020 - 2023) — CGPA: 8.85.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {['Computer Science', 'Web Technologies', 'Programming'].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- Certifications Section ---
const CertificationsSection = () => {
  const certs = [
    {
      title: 'Certified ScrumMaster (CSM)',
      issuer: 'Scrum Alliance',
      year: 'Scrum Alliance',
      tags: ['Agile', 'Scrum', 'CSM'],
      color: '#0A85EA',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    },
    {
      title: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      year: 'Scrum.org',
      tags: ['Agile', 'Scrum', 'PSM I'],
      color: '#0A85EA',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    },
    {
      title: 'IBM AI Product Manager Professional Certificate',
      issuer: 'IBM',
      year: 'IBM / Coursera',
      tags: ['AI Product Manager', 'Generative AI', 'Coursera'],
      color: '#EF0F24',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    },
    {
      title: 'Generative AI Engineering Professional Certificate',
      issuer: 'Coursera',
      year: 'Coursera',
      tags: ['Generative AI', 'Prompt Engineering', 'AI Analytics'],
      color: '#EF0F24',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    },
    {
      title: 'Project Management Professional (PMP)',
      issuer: 'PMI',
      year: 'PMI',
      tags: ['Project Management', 'PMP', 'PMBOK'],
      color: '#A100FF',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    },
  ];

  return (
    <section id="certifications" className="relative z-20 bg-black text-white font-sans px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">

        <ShimmerHeading title="Certifications" />

        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-white/40">Certifications</span>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-black p-8 md:p-10 flex flex-col gap-8 hover:bg-white/[0.03] transition-colors duration-500"
            >
              {/* Accent top line on hover */}
              <span
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: cert.color }}
              />

              {/* Logo */}
              <div className="h-10 w-auto max-w-[180px]">
                <img
                  src={cert.logoUrl}
                  alt={cert.issuer}
                  className="h-full w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              {/* Title + Issuer */}
              <div className="flex flex-col gap-2 flex-1">
                <p className="font-sans text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                  {cert.title}
                </p>
                <p className="font-sans text-sm font-medium text-white/40 tracking-wide">
                  {cert.issuer}
                </p>
              </div>

              {/* Tags + Year */}
              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[9px] font-black uppercase tracking-[0.2em] text-white/35 border border-white/10 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="font-sans text-xs font-black tracking-widest shrink-0 tabular-nums"
                  style={{ color: cert.color }}
                >
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


const Index = () => {
  const [preloaderStarted, setPreloaderStarted] = useState(false);
  const footerContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerContainerRef,
    offset: ["start end", "end end"]
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isIntersecting = false;

    const playVideo = () => {
      if (isIntersecting && preloaderStarted) {
        video.play().catch((err) => console.log("Autoplay blocked/waiting for interaction:", err));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);

    if (preloaderStarted) {
      playVideo();
    } else {
      video.pause();
    }

    // Bypass browser unmuted autoplay restrictions on user interaction
    const handleInteraction = () => {
      if (isIntersecting && video.paused && preloaderStarted) {
        video.play().catch((err) => console.log("Interaction play failed:", err));
      }
      // Clean up listeners after first interaction
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      observer.unobserve(video);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [preloaderStarted]);

  // Create parallax effect: Footer starts higher up and moves to normal position as we scroll into it
  const footerY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div className="min-h-screen relative bg-black selection:bg-white selection:text-black">
      <Preloader onStart={() => setPreloaderStarted(true)} />
      <BrandLogo />
      <CursorFollower />
      <Navigation />

      {/* Hero */}
      <section id="home" className="relative h-screen bg-black flex flex-col px-6 py-12 md:px-16 md:py-16 z-20 overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
        >
          <source src="/alakanadha22.mp4" type="video/mp4" />
        </video>
        <AvailabilityBadge />
        <SocialStrip />
        <SpinningCTA />
        <div className="hidden lg:block"><SplashCursor /></div>

        {/* Mobile Midpoint Buffer: 80px total height from top to clear hamburger (Hamburger at 24px + 56px height) */}
        <div className="h-[32px] w-full md:hidden" /> {/* py-12 (48px) + 32px = 80px */}

        {/* Dynamic Centering Container for Mobile Socials */}
        <div className="flex-1 flex flex-col items-end justify-center md:hidden pr-0 z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <MobileSocialStrip />
          </div>
        </div>

        <div className="z-10 mt-auto mb-6 md:mb-8 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tighter text-white uppercase text-left mb-6">
              Hi, I'm<br />Alakanandha
            </h1>

            <p className="font-sans text-sm md:text-base lg:text-lg font-medium text-white/80 leading-relaxed tracking-wide text-left max-w-2xl mb-8">
              Software Engineer with 1+ year of hands-on experience in designing and developing scalable, high-performance web applications using modern technologies including React, Node.js, JavaScript, and Java.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-white text-black font-sans font-black text-[10px] tracking-[0.25em] uppercase px-8 py-4 rounded-full hover:bg-white/95 transition-all duration-300 hover:scale-105 block"
              >
                View My Work
              </a>
              <a
                href="/resume_alakanandha.pdf"
                className="border border-white/40 text-white font-sans font-black text-[10px] tracking-[0.25em] uppercase px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                Download Resume
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content stack */}
      <div className="relative z-20 w-full bg-transparent">
        <div id="about" />

        {/* About Section — appears after the hero fixed-reveal spacer */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        <div id="projects" className="bg-black text-white relative z-20">
          <div id="work" />
          <SelectedWorks />
        </div>

        <div id="skills" className="bg-white text-black relative z-20">
          <VectorBridge />
        </div>

        <div className="bg-black text-white relative z-20">
          <Testimonial />
        </div>

        {/* Certifications Section — commented out */}
        {/* <CertificationsSection /> */}

        {/* Change contact layer to z-20 and relative so it scrolls normally OVER the footer */}
        <div id="contact" className="relative z-20 bg-white text-black">
          <Contact />
        </div>
      </div>

      {/* Parallax Footer Reveal Stack */}
      <div ref={footerContainerRef} className="relative z-0 h-screen w-full overflow-hidden bg-black text-white">
        <motion.div style={{ y: footerY }} className="h-full w-full">
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;