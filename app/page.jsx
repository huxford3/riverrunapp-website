
import "./globals.css";
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock,
  Compass,
  LifeBuoy,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";

const COLORS = {
  bg: "#F2F6F6",
  dark: "#17353D",
  navy: "#073645",
  teal: "#57B3B3",
  tealDark: "#0E6F78",
  muted: "#748188",
  border: "#D5E1E1",
  white: "#FFFFFF",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const Button = ({ children, href = "#waitlist", variant = "primary" }) => (
  <a className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"}`} href={href}>
    {children}
  </a>
);

function SectionLabel({ icon: Icon = Sparkles, children, dark = false }) {
  return (
    <div className={`section-label ${dark ? "section-label-dark" : ""}`}>
      <Icon size={15} />
      {children}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <motion.div variants={fadeUp} className="feature-card hover-lift">
      <div className="icon-box"><Icon size={25} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function StepCard({ number, title, text }) {
  return (
    <motion.div variants={fadeUp} className="step-card hover-lift">
      <div className="step-number">{number}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

function BlogCard({ image, label, title, text }) {
  return (
    <motion.article variants={fadeUp} className="blog-card hover-lift">
      <div className="blog-img" style={{ backgroundImage: `url('${image}')` }} />
      <div className="blog-body">
        <div className="blog-label">{label}</div>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="#waitlist" className="blog-link">Read guide <ArrowRight size={15} /></a>
      </div>
    </motion.article>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <div>{value}</div>
      <span>{label}</span>
    </div>
  );
}

export default function RiverRunWebsite() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <img src="/images/riverrun-logo.png" alt="RiverRun logo" />
            <div>
              <strong>RiverRun</strong>
              <span>Paddle shuttle made simple</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#why">Why RiverRun</a>
            <a href="#how">How it works</a>
            <a href="#riders">Riders</a>
            <a href="#drivers">Drivers</a>
            <a href="#journal">Journal</a>
          </div>

          <Button>Get early access</Button>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-bg" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-inner">
          <motion.div initial="hidden" animate="show" variants={stagger} className="hero-copy">
            <motion.div variants={fadeUp}>
              <SectionLabel icon={Waves} dark>Launching for paddlers</SectionLabel>
            </motion.div>

            <motion.h1 variants={fadeUp}>Your river shuttle, simplified.</motion.h1>

            <motion.p variants={fadeUp} className="hero-subtitle">
              RiverRun connects paddlers with independent local drivers for scheduled kayak and canoe shuttle rides — so the logistics feel as smooth as the float.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <Button>Get early access <ArrowRight size={17} /></Button>
              <Button href="#drivers" variant="secondary">Become a driver</Button>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-trust">
              <span><CheckCircle2 size={17} /> Built for paddlers</span>
              <span><CheckCircle2 size={17} /> Scheduled pickups</span>
              <span><CheckCircle2 size={17} /> Local drivers</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="booking-card hover-lift"
          >
            <div className="booking-header">
              <div>
                <span>Upcoming shuttle</span>
                <h2>Sugar Creek</h2>
              </div>
              <div className="confirmed">Confirmed</div>
            </div>

            <div className="route-card">
              <div className="route-row">
                <MapPin />
                <div><strong>Put-in</strong><span>Deer’s Mill access</span></div>
              </div>
              <div className="route-line" />
              <div className="route-row">
                <MapPin />
                <div><strong>Take-out</strong><span>Cox Ford covered bridge</span></div>
              </div>
            </div>

            <div className="stat-grid">
              <Stat value="9:30" label="AM pickup" />
              <Stat value="2" label="paddlers" />
              <Stat value="30 min" label="pickup slots" />
              <Stat value="Local" label="driver network" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="why" className="section why-section">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="section-inner split">
          <motion.div variants={fadeUp}>
            <SectionLabel icon={Compass}>Why RiverRun exists</SectionLabel>
            <h2>Most paddlers do not need more gear. They need a better shuttle.</h2>
            <p>
              River trips often require two vehicles, extra coordination, or calling around for help. RiverRun is built to remove that friction with simple route-based shuttle scheduling.
            </p>
            <div className="mini-list">
              <span><CheckCircle2 /> No rental required</span>
              <span><CheckCircle2 /> Designed around river access points</span>
              <span><CheckCircle2 /> Built for independent local drivers</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="image-shell hover-lift">
            <img src="/images/riverrun-wide.png" alt="RiverRun scenic river illustration" />
          </motion.div>
        </motion.div>
      </section>

      <section id="how" className="section white-section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="section-header centered">
            <motion.div variants={fadeUp}><SectionLabel icon={CalendarDays}>How it works</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp}>Plan the paddle. Schedule the shuttle. Get back to your vehicle.</motion.h2>
            <motion.p variants={fadeUp}>A simple workflow built around the way paddlers actually plan their day on the water.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="steps-grid">
            <StepCard number="01" title="Choose your route" text="Select the river, put-in, and take-out for your trip." />
            <StepCard number="02" title="Pick a pickup time" text="Schedule your ride ahead of time with clear pickup details." />
            <StepCard number="03" title="Get matched" text="An approved independent driver accepts the available ride." />
            <StepCard number="04" title="Float with confidence" text="Driver updates help you know when your ride is accepted, on the way, and arrived." />
          </motion.div>
        </div>
      </section>

      <section id="riders" className="section">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="section-inner split reverse-mobile">
          <motion.div variants={fadeUp} className="image-shell tall hover-lift">
            <img src="/images/riverrun-riders.png" alt="Paddlers kayaking on a calm river" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SectionLabel icon={Users}>For riders</SectionLabel>
            <h2>Built for paddlers who bring their own kayaks, canoes, and boards.</h2>
            <p>
              RiverRun is for people who already have their own gear and simply need a reliable connection between access points.
            </p>
            <div className="feature-stack">
              <div><MapPin /><span>Route-based booking by river access points</span></div>
              <div><Clock /><span>Clear pickup windows and timing expectations</span></div>
              <div><MessageCircle /><span>Status updates and support access</span></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="drivers" className="section dark-section">
        <div className="section-inner split">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel icon={Car} dark>Driver network</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp}>Earn by helping paddlers move between river access points.</motion.h2>
            <motion.p variants={fadeUp}>
              Drivers can apply, get approved, view available rides, and accept trips that fit their schedule. RiverRun is built as a marketplace connecting paddlers with independent drivers.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <Button href="#waitlist">Apply to drive <ArrowRight size={17} /></Button>
              <Button href="#journal" variant="secondary">Learn more</Button>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="dark-card-grid">
            <FeatureCard icon={Clock} title="Flexible trips" text="Accept rides that fit your day, market, and route area." />
            <FeatureCard icon={ShieldCheck} title="Approved access" text="Drivers must register and be approved before accepting rides." />
            <FeatureCard icon={LifeBuoy} title="Support built in" text="Riders and drivers have a path to support when plans change." />
            <FeatureCard icon={Car} title="Clear earnings" text="Drivers see expected earnings before accepting a ride." />
          </motion.div>
        </div>
      </section>

      <section className="section trust-section">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="section-inner">
          <motion.div variants={fadeUp} className="trust-card">
            <div>
              <SectionLabel icon={ShieldCheck}>Built with trust in mind</SectionLabel>
              <h2>Clear expectations before anyone gets in the car.</h2>
              <p>RiverRun is designed around route clarity, pickup timing, driver approval, support access, and rider guidelines.</p>
            </div>
            <div className="trust-grid">
              <span><CheckCircle2 /> Independent drivers</span>
              <span><CheckCircle2 /> Scheduled pickup windows</span>
              <span><CheckCircle2 /> Rider guidelines</span>
              <span><CheckCircle2 /> Support links</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="journal" className="section white-section">
        <div className="section-inner">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="section-header">
            <motion.div variants={fadeUp}><SectionLabel icon={Waves}>RiverRun Journal</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp}>Paddling tips, route guides, and shuttle planning.</motion.h2>
            <motion.p variants={fadeUp}>A future SEO engine for people searching for kayak routes, shuttle help, and river-day planning.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="blog-grid">
            <BlogCard image="/images/riverrun-wide.png" label="Planning" title="How to run a kayak shuttle without two cars" text="A simple guide to pickup timing, access points, and avoiding the vehicle shuffle." />
            <BlogCard image="/images/riverrun-hero.png" label="Routes" title="What to check before choosing a river route" text="Distance, paddle time, water levels, cell service, and access point logistics." />
            <BlogCard image="/images/riverrun-riders.png" label="Safety" title="What riders should expect at pickup" text="Driver updates, wait windows, wet gear etiquette, and support options." />
          </motion.div>
        </div>
      </section>

      <section id="waitlist" className="section cta-section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="cta-card">
          <img src="/images/riverrun-logo.png" alt="RiverRun logo" />
          <h2>Be first in line when RiverRun launches.</h2>
          <p>Join the early access list for launch updates, supported rivers, driver openings, and app availability.</p>
          <form className="waitlist-form">
            <input placeholder="Enter your email" />
            <button type="button">Get early access</button>
          </form>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>RiverRun</strong>
            <p>RiverRun is a technology marketplace connecting paddlers with independent drivers. RiverRun does not provide transportation services directly.</p>
          </div>
          <div>
            <a href="#">Rider Agreement</a>
            <a href="#">Driver Agreement</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: ${COLORS.bg}; color: ${COLORS.dark}; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        a { color: inherit; text-decoration: none; }
        main { overflow-x: hidden; }

        .nav { position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(213,225,225,.9); background: rgba(242,246,246,.84); backdrop-filter: blur(18px); }
        .nav-inner { max-width: 1180px; margin: 0 auto; padding: 15px 22px; display: flex; align-items: center; justify-content: space-between; gap: 18px; }
        .brand { display: flex; align-items: center; gap: 12px; }
        .brand img { width: 46px; height: 46px; object-fit: cover; border-radius: 14px; box-shadow: 0 10px 25px rgba(23,53,61,.12); }
        .brand strong { display: block; font-size: 22px; font-weight: 950; letter-spacing: -.04em; line-height: 1; }
        .brand span { display: block; margin-top: 3px; color: ${COLORS.muted}; font-size: 12px; font-weight: 650; }
        .nav-links { display: flex; align-items: center; gap: 24px; font-size: 14px; font-weight: 850; }
        .nav-links a { opacity: .88; transition: opacity .2s ease, color .2s ease; }
        .nav-links a:hover { opacity: 1; color: ${COLORS.tealDark}; }

        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 46px; padding: 12px 19px; border-radius: 999px; font-size: 14px; font-weight: 900; transition: transform .22s ease, box-shadow .22s ease, opacity .22s ease; white-space: nowrap; }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary { color: white; background: linear-gradient(135deg, ${COLORS.teal}, ${COLORS.tealDark}); box-shadow: 0 14px 35px rgba(87,179,179,.35); }
        .btn-secondary { color: ${COLORS.dark}; background: rgba(255,255,255,.94); border: 1px solid rgba(213,225,225,.95); box-shadow: 0 12px 30px rgba(23,53,61,.08); }

        .hero { position: relative; min-height: 760px; overflow: hidden; color: white; }
        .hero-bg { position: absolute; inset: 0; background-image: linear-gradient(115deg, rgba(7,54,69,.94), rgba(7,54,69,.66) 42%, rgba(7,54,69,.18)), url('/images/riverrun-hero.png'); background-size: cover; background-position: center; transform: scale(1.04); animation: slowZoom 18s ease-in-out infinite alternate; }
        .hero-bg:after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 30% 25%, rgba(87,179,179,.18), transparent 35%), linear-gradient(to bottom, transparent 70%, ${COLORS.bg}); }
        .hero-glow { position: absolute; border-radius: 999px; filter: blur(60px); opacity: .52; }
        .hero-glow-one { width: 360px; height: 360px; left: -120px; top: 150px; background: ${COLORS.teal}; }
        .hero-glow-two { width: 420px; height: 420px; right: -140px; bottom: 80px; background: rgba(255,255,255,.28); }
        @keyframes slowZoom { from { transform: scale(1.04); } to { transform: scale(1.1); } }
        .hero-inner { position: relative; z-index: 2; max-width: 1180px; margin: 0 auto; padding: 105px 22px 105px; display: grid; grid-template-columns: 1.05fr .95fr; gap: 42px; align-items: center; }
        .hero-copy h1 { margin: 24px 0 22px; max-width: 760px; font-size: clamp(48px, 7.4vw, 86px); line-height: .92; letter-spacing: -.075em; font-weight: 950; }
        .hero-subtitle { max-width: 680px; margin: 0; color: rgba(255,255,255,.84); font-size: 20px; line-height: 1.72; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .hero-trust { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; color: rgba(255,255,255,.82); font-size: 14px; font-weight: 800; }
        .hero-trust span { display: inline-flex; align-items: center; gap: 7px; }
        .hero-trust svg { color: ${COLORS.teal}; }

        .section-label { display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; padding: 9px 14px; background: white; border: 1px solid ${COLORS.border}; color: ${COLORS.tealDark}; font-size: 12px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; box-shadow: 0 12px 30px rgba(23,53,61,.06); }
        .section-label-dark { color: white; background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.24); }

        .booking-card { padding: 24px; border-radius: 34px; border: 1px solid rgba(255,255,255,.52); background: rgba(255,255,255,.88); backdrop-filter: blur(16px); box-shadow: 0 35px 90px rgba(0,0,0,.28); color: ${COLORS.dark}; }
        .booking-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 16px; }
        .booking-header span { color: ${COLORS.muted}; font-size: 13px; font-weight: 700; }
        .booking-header h2 { margin: 3px 0 0; font-size: 28px; line-height: 1; letter-spacing: -.05em; }
        .confirmed { border-radius: 999px; padding: 8px 12px; background: ${COLORS.teal}; color: white; font-size: 12px; font-weight: 950; }
        .route-card { padding: 20px; border-radius: 26px; background: white; border: 1px solid ${COLORS.border}; box-shadow: 0 14px 35px rgba(23,53,61,.08); }
        .route-row { display: flex; gap: 12px; align-items: flex-start; }
        .route-row svg { color: ${COLORS.tealDark}; flex-shrink: 0; }
        .route-row strong { display: block; margin-bottom: 3px; font-size: 15px; }
        .route-row span { color: ${COLORS.muted}; font-size: 14px; }
        .route-line { height: 32px; margin-left: 12px; border-left: 2px dashed ${COLORS.border}; }
        .stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 14px; }
        .stat-card { padding: 18px; border-radius: 23px; background: ${COLORS.bg}; border: 1px solid rgba(213,225,225,.75); }
        .stat-card div { font-size: 23px; font-weight: 950; letter-spacing: -.04em; }
        .stat-card span { display: block; margin-top: 4px; color: ${COLORS.muted}; font-size: 13px; font-weight: 700; }

        .section { padding: 88px 22px; }
        .section-inner { max-width: 1180px; margin: 0 auto; }
        .white-section { background: white; }
        .section-header { max-width: 760px; margin-bottom: 34px; }
        .centered { text-align: center; margin-left: auto; margin-right: auto; }
        h2 { margin: 18px 0 14px; font-size: clamp(34px, 4.8vw, 54px); line-height: 1.02; letter-spacing: -.06em; font-weight: 950; color: ${COLORS.dark}; }
        p { margin: 0; color: ${COLORS.muted}; font-size: 17px; line-height: 1.76; }
        .split { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; align-items: center; }
        .mini-list, .feature-stack { display: grid; gap: 13px; margin-top: 26px; }
        .mini-list span, .feature-stack div, .trust-grid span { display: flex; align-items: center; gap: 10px; font-weight: 900; color: ${COLORS.dark}; }
        .mini-list svg, .feature-stack svg, .trust-grid svg { color: ${COLORS.tealDark}; width: 21px; height: 21px; flex-shrink: 0; }
        .image-shell { overflow: hidden; border-radius: 34px; border: 1px solid ${COLORS.border}; box-shadow: 0 28px 75px rgba(23,53,61,.16); background: white; }
        .image-shell img { display: block; width: 100%; height: 100%; min-height: 380px; object-fit: cover; transition: transform .45s ease; }
        .image-shell:hover img { transform: scale(1.035); }
        .image-shell.tall img { min-height: 520px; }

        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .step-card { min-height: 230px; padding: 24px; border-radius: 30px; background: ${COLORS.bg}; border: 1px solid ${COLORS.border}; box-shadow: 0 16px 45px rgba(23,53,61,.07); }
        .step-number { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 18px; margin-bottom: 18px; background: linear-gradient(135deg, ${COLORS.teal}, ${COLORS.tealDark}); color: white; font-size: 14px; font-weight: 950; box-shadow: 0 14px 30px rgba(87,179,179,.25); }
        .step-card h3, .feature-card h3, .blog-card h3 { margin: 0 0 10px; font-size: 21px; line-height: 1.15; letter-spacing: -.035em; color: ${COLORS.dark}; }
        .step-card p, .feature-card p, .blog-card p { font-size: 15px; line-height: 1.68; }

        .dark-section { background: radial-gradient(circle at 10% 10%, rgba(87,179,179,.22), transparent 34%), linear-gradient(135deg, ${COLORS.navy}, ${COLORS.dark}); color: white; }
        .dark-section h2 { color: white; }
        .dark-section p { color: rgba(255,255,255,.72); }
        .dark-card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .feature-card { padding: 25px; border-radius: 30px; background: white; border: 1px solid ${COLORS.border}; box-shadow: 0 18px 52px rgba(23,53,61,.09); }
        .dark-section .feature-card { background: rgba(255,255,255,.10); border-color: rgba(255,255,255,.16); backdrop-filter: blur(14px); }
        .dark-section .feature-card h3 { color: white; }
        .dark-section .feature-card p { color: rgba(255,255,255,.7); }
        .icon-box { width: 54px; height: 54px; border-radius: 19px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: ${COLORS.tealDark}; background: ${COLORS.bg}; }
        .dark-section .icon-box { background: rgba(255,255,255,.14); color: ${COLORS.teal}; }

        .trust-card { display: grid; grid-template-columns: 1.1fr .9fr; gap: 26px; align-items: center; padding: 38px; border-radius: 36px; background: white; border: 1px solid ${COLORS.border}; box-shadow: 0 25px 70px rgba(23,53,61,.09); }
        .trust-grid { display: grid; gap: 13px; padding: 22px; border-radius: 28px; background: ${COLORS.bg}; border: 1px solid ${COLORS.border}; }

        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .blog-card { overflow: hidden; border-radius: 30px; background: white; border: 1px solid ${COLORS.border}; box-shadow: 0 18px 52px rgba(23,53,61,.09); }
        .blog-img { height: 190px; background-size: cover; background-position: center; transition: transform .45s ease; }
        .blog-card:hover .blog-img { transform: scale(1.04); }
        .blog-body { padding: 23px; }
        .blog-label { margin-bottom: 10px; color: ${COLORS.tealDark}; font-size: 12px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
        .blog-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 18px; color: ${COLORS.tealDark}; font-size: 14px; font-weight: 950; }

        .cta-section { padding-top: 28px; }
        .cta-card { max-width: 970px; margin: 0 auto; text-align: center; padding: 54px 28px; border-radius: 40px; border: 1px solid ${COLORS.border}; background: radial-gradient(circle at 50% 0%, rgba(87,179,179,.20), transparent 45%), white; box-shadow: 0 30px 85px rgba(23,53,61,.12); }
        .cta-card img { width: 92px; height: 92px; object-fit: cover; border-radius: 26px; box-shadow: 0 16px 40px rgba(23,53,61,.15); }
        .cta-card h2 { max-width: 720px; margin-left: auto; margin-right: auto; }
        .cta-card p { max-width: 660px; margin: 0 auto 26px; }
        .waitlist-form { max-width: 590px; margin: 0 auto; display: flex; gap: 10px; padding: 8px; border-radius: 999px; background: ${COLORS.bg}; border: 1px solid ${COLORS.border}; }
        .waitlist-form input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; padding: 0 12px; font-size: 15px; color: ${COLORS.dark}; }
        .waitlist-form button { border: 0; border-radius: 999px; padding: 14px 20px; color: white; background: linear-gradient(135deg, ${COLORS.teal}, ${COLORS.tealDark}); font-weight: 950; cursor: pointer; box-shadow: 0 14px 35px rgba(87,179,179,.3); }

        .footer { background: white; border-top: 1px solid ${COLORS.border}; }
        .footer-inner { max-width: 1180px; margin: 0 auto; padding: 28px 22px; display: flex; justify-content: space-between; gap: 24px; align-items: flex-start; }
        .footer strong { display: block; font-size: 22px; font-weight: 950; letter-spacing: -.04em; }
        .footer p { max-width: 650px; margin-top: 8px; font-size: 14px; }
        .footer-inner > div:last-child { display: flex; gap: 16px; font-size: 14px; font-weight: 850; }

        .hover-lift { transition: transform .24s ease, box-shadow .24s ease; }
        .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 30px 80px rgba(23,53,61,.14); }

        @media (max-width: 980px) {
          .nav-links { display: none; }
          .hero-inner, .split, .trust-card { grid-template-columns: 1fr; }
          .steps-grid, .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .hero { min-height: auto; }
          .hero-copy h1 { font-size: clamp(44px, 12vw, 70px); }
        }
        @media (max-width: 680px) {
          .nav-inner { padding: 13px 16px; }
          .brand span { display: none; }
          .nav .btn { display: none; }
          .hero-inner { padding: 82px 18px 78px; }
          .section { padding: 68px 18px; }
          .steps-grid, .blog-grid, .dark-card-grid, .stat-grid { grid-template-columns: 1fr; }
          .waitlist-form { flex-direction: column; border-radius: 28px; padding: 10px; }
          .waitlist-form input { min-height: 48px; text-align: center; }
          .footer-inner { flex-direction: column; }
          .footer-inner > div:last-child { flex-wrap: wrap; }
        }
      `}</style>
    </main>
  );
}
