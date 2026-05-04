"use client";

import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock,
  Compass,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";

const COLORS = {
  bg: "#F2F6F6",
  dark: "#17353D",
  teal: "#57B3B3",
  tealDark: "#0E6F78",
  muted: "#748188",
  border: "#D5E1E1",
  white: "#FFFFFF",
  navy: "#073645",
};

const styles = {
  page: {
    margin: 0,
    background: COLORS.bg,
    color: COLORS.dark,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(242,246,246,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${COLORS.border}`,
  },
  navInner: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "16px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  logoWrap: { display: "flex", alignItems: "center", gap: 12 },
  logo: { width: 44, height: 44, borderRadius: 12, objectFit: "cover" },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    fontSize: 14,
    fontWeight: 700,
  },
  link: { color: COLORS.dark, textDecoration: "none" },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: 0,
    borderRadius: 999,
    padding: "12px 18px",
    background: COLORS.teal,
    color: "white",
    fontWeight: 800,
    fontSize: 14,
    textDecoration: "none",
    boxShadow: "0 12px 25px rgba(87,179,179,.26)",
    cursor: "pointer",
  },
  ghostButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 999,
    padding: "12px 18px",
    background: "white",
    color: COLORS.dark,
    fontWeight: 800,
    fontSize: 14,
    textDecoration: "none",
    border: `1px solid ${COLORS.border}`,
    cursor: "pointer",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: 720,
    backgroundImage:
      "linear-gradient(90deg, rgba(7,54,69,.88), rgba(7,54,69,.58), rgba(7,54,69,.18)), url('/images/riverrun-hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroInner: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "96px 22px 90px",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 40,
    alignItems: "center",
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,.16)",
    color: "white",
    border: "1px solid rgba(255,255,255,.28)",
    borderRadius: 999,
    padding: "9px 14px",
    fontSize: 13,
    fontWeight: 800,
    backdropFilter: "blur(8px)",
  },
  h1: {
    color: "white",
    fontSize: "clamp(44px, 7vw, 76px)",
    lineHeight: 0.96,
    letterSpacing: "-0.055em",
    margin: "24px 0 22px",
    maxWidth: 760,
  },
  heroText: {
    color: "rgba(255,255,255,.84)",
    fontSize: 20,
    lineHeight: 1.65,
    maxWidth: 650,
    margin: 0,
  },
  heroActions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 34 },
  glassCard: {
    background: "rgba(255,255,255,.88)",
    border: "1px solid rgba(255,255,255,.55)",
    borderRadius: 32,
    padding: 22,
    boxShadow: "0 30px 80px rgba(0,0,0,.28)",
    backdropFilter: "blur(12px)",
  },
  phoneTop: {
    borderRadius: 24,
    padding: 20,
    background: COLORS.bg,
  },
  section: { maxWidth: 1180, margin: "0 auto", padding: "78px 22px" },
  sectionHeader: { maxWidth: 760, marginBottom: 30 },
  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: COLORS.tealDark,
    background: "white",
    border: `1px solid ${COLORS.border}`,
    borderRadius: 999,
    padding: "9px 14px",
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: ".08em",
  },
  h2: {
    margin: "18px 0 14px",
    fontSize: "clamp(32px, 4vw, 48px)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    color: COLORS.dark,
  },
  p: { color: COLORS.muted, fontSize: 17, lineHeight: 1.75, margin: 0 },
  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 },
  card: {
    background: "white",
    border: `1px solid ${COLORS.border}`,
    borderRadius: 28,
    padding: 26,
    boxShadow: "0 16px 45px rgba(23,53,61,.07)",
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.tealDark,
    background: COLORS.bg,
    marginBottom: 18,
  },
  split: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, alignItems: "center" },
  imagePanel: {
    minHeight: 440,
    borderRadius: 34,
    backgroundImage: "url('/images/riverrun-riders.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: `1px solid ${COLORS.border}`,
    boxShadow: "0 25px 70px rgba(23,53,61,.14)",
  },
  darkBand: { background: COLORS.navy, color: "white" },
  blogGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 },
  blogCard: {
    background: "white",
    borderRadius: 28,
    overflow: "hidden",
    border: `1px solid ${COLORS.border}`,
    boxShadow: "0 16px 45px rgba(23,53,61,.08)",
  },
  blogImage: { height: 170, backgroundSize: "cover", backgroundPosition: "center" },
  footer: { background: "white", borderTop: `1px solid ${COLORS.border}` },
};

function Stat({ value, label }) {
  return (
    <div style={{ background: "white", borderRadius: 22, padding: 18 }}>
      <div style={{ fontSize: 26, fontWeight: 950, color: COLORS.dark }}>{value}</div>
      <div style={{ fontSize: 13, color: COLORS.muted, marginTop: 4 }}>{label}</div>
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div style={styles.card}>
      <div style={styles.iconBox}><Icon size={25} /></div>
      <h3 style={{ fontSize: 21, margin: "0 0 10px", letterSpacing: "-.02em" }}>{title}</h3>
      <p style={{ ...styles.p, fontSize: 15 }}>{text}</p>
    </div>
  );
}

function BlogCard({ image, label, title, text }) {
  return (
    <article style={styles.blogCard}>
      <div style={{ ...styles.blogImage, backgroundImage: `url('${image}')` }} />
      <div style={{ padding: 22 }}>
        <div style={{ color: COLORS.tealDark, fontWeight: 900, fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em" }}>{label}</div>
        <h3 style={{ margin: "10px 0", fontSize: 21, letterSpacing: "-.03em" }}>{title}</h3>
        <p style={{ ...styles.p, fontSize: 15 }}>{text}</p>
      </div>
    </article>
  );
}

export default function RiverRunWebsite() {
  return (
    <main style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <a href="#top" style={{ ...styles.logoWrap, textDecoration: "none", color: COLORS.dark }}>
            <img src="/images/riverrun-logo.png" alt="RiverRun logo" style={styles.logo} />
            <div>
              <div style={{ fontSize: 21, fontWeight: 950, lineHeight: 1 }}>RiverRun</div>
              <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 3 }}>Paddle shuttle made simple</div>
            </div>
          </a>
          <div style={styles.navLinks} className="desktop-nav">
            <a style={styles.link} href="#how">How it works</a>
            <a style={styles.link} href="#riders">Riders</a>
            <a style={styles.link} href="#drivers">Drivers</a>
            <a style={styles.link} href="#blog">Blog</a>
          </div>
          <a href="#waitlist" style={styles.button}>Join waitlist</a>
        </div>
      </nav>

      <section id="top" style={styles.hero}>
        <div style={styles.heroInner} className="hero-grid">
          <div>
            <div style={styles.pill}><Waves size={16} /> Launching for paddlers</div>
            <h1 style={styles.h1}>Your river shuttle, simplified.</h1>
            <p style={styles.heroText}>
              RiverRun connects paddlers with independent local drivers for scheduled kayak and canoe shuttle rides — so your trip logistics feel as smooth as the float.
            </p>
            <div style={styles.heroActions}>
              <a style={styles.button} href="#waitlist">Get early access <ArrowRight size={17} /></a>
              <a style={styles.ghostButton} href="#drivers">Become a driver</a>
            </div>
          </div>

          <div style={styles.glassCard}>
            <div style={styles.phoneTop}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
                <div>
                  <div style={{ color: COLORS.muted, fontSize: 13 }}>Upcoming shuttle</div>
                  <div style={{ fontSize: 25, fontWeight: 950, marginTop: 2 }}>Sugar Creek</div>
                </div>
                <div style={{ alignSelf: "start", borderRadius: 999, background: COLORS.teal, color: "white", padding: "8px 12px", fontSize: 12, fontWeight: 900 }}>Confirmed</div>
              </div>
              <div style={{ background: "white", borderRadius: 24, padding: 20, border: `1px solid ${COLORS.border}` }}>
                <div style={{ display: "flex", gap: 12 }}><MapPin color={COLORS.tealDark} /><div><b>Put-in</b><br /><span style={{ color: COLORS.muted }}>Deer’s Mill access</span></div></div>
                <div style={{ marginLeft: 12, height: 32, borderLeft: `2px dashed ${COLORS.border}` }} />
                <div style={{ display: "flex", gap: 12 }}><MapPin color={COLORS.tealDark} /><div><b>Take-out</b><br /><span style={{ color: COLORS.muted }}>Cox Ford covered bridge</span></div></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
                <Stat value="9:30" label="AM pickup" />
                <Stat value="2" label="paddlers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} id="how">
        <div style={styles.sectionHeader}>
          <div style={styles.label}><Compass size={15} /> How it works</div>
          <h2 style={styles.h2}>Plan the paddle. Schedule the shuttle. Get back to your vehicle.</h2>
          <p style={styles.p}>Choose your river route, pickup date and time, rider count, and shuttle type. RiverRun helps match the trip with an approved independent driver.</p>
        </div>
        <div style={styles.grid3} className="grid3">
          <Feature icon={MapPin} title="Pick your route" text="Select supported rivers, put-ins, and take-outs without calling around or coordinating multiple vehicles." />
          <Feature icon={CalendarDays} title="Schedule ahead" text="Book your ride with clear pickup timing, rider count, and trip details before you hit the water." />
          <Feature icon={Car} title="Meet your driver" text="Approved independent drivers accept available rides that fit their schedule and route area." />
        </div>
      </section>

      <section style={{ ...styles.section, paddingTop: 20 }} id="riders">
        <div style={styles.split} className="split">
          <div style={styles.imagePanel} />
          <div>
            <div style={styles.label}><Users size={15} /> For riders</div>
            <h2 style={styles.h2}>Built for paddlers who bring their own gear.</h2>
            <p style={styles.p}>RiverRun is designed for kayakers, canoeists, and paddleboarders who already have their own equipment and need a simple shuttle connection between access points.</p>
            <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
              {["Route-based booking", "Driver status updates", "Clear timing and pickup expectations", "Support access when plans change"].map((x) => (
                <div key={x} style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 850 }}><CheckCircle2 color={COLORS.tealDark} size={20} />{x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.darkBand} id="drivers">
        <div style={{ ...styles.section, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} className="split">
          <div>
            <div style={{ ...styles.label, background: "rgba(255,255,255,.10)", color: "white", borderColor: "rgba(255,255,255,.18)" }}><Car size={15} /> Driver network</div>
            <h2 style={{ ...styles.h2, color: "white" }}>Earn by helping paddlers move between river access points.</h2>
            <p style={{ ...styles.p, color: "rgba(255,255,255,.72)" }}>Drivers can apply, get approved, view available rides, and accept trips that fit their schedule. RiverRun shows trip details and driver earnings before acceptance.</p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            <Feature icon={Clock} title="Flexible rides" text="Accept trips that fit your route area and availability." />
            <Feature icon={ShieldCheck} title="Approved access" text="Drivers register and must be approved before accepting rides." />
          </div>
        </div>
      </section>

      <section style={styles.section} id="blog">
        <div style={styles.sectionHeader}>
          <div style={styles.label}><Waves size={15} /> RiverRun Journal</div>
          <h2 style={styles.h2}>Paddling tips, route guides, and shuttle planning.</h2>
          <p style={styles.p}>Use this section for SEO-friendly articles that help paddlers find RiverRun before they ever download the app.</p>
        </div>
        <div style={styles.blogGrid} className="grid3">
          <BlogCard image="/images/riverrun-wide.png" label="Planning" title="How to plan a simple kayak shuttle" text="A quick guide to timing, access points, pickup windows, and avoiding vehicle juggling." />
          <BlogCard image="/images/riverrun-hero.png" label="Routes" title="What to check before choosing a river route" text="Distance, paddle time, water levels, access points, and cell service all matter." />
          <BlogCard image="/images/riverrun-riders.png" label="Safety" title="What riders should expect at pickup" text="Driver updates, pickup timing, wet gear etiquette, and support options." />
        </div>
      </section>

      <section id="waitlist" style={{ ...styles.section, paddingTop: 10 }}>
        <div style={{ ...styles.card, textAlign: "center", padding: "46px 24px" }}>
          <img src="/images/riverrun-logo.png" alt="RiverRun logo" style={{ width: 86, height: 86, borderRadius: 24, objectFit: "cover", marginBottom: 12 }} />
          <h2 style={{ ...styles.h2, marginBottom: 12 }}>Be first in line when RiverRun launches.</h2>
          <p style={{ ...styles.p, maxWidth: 650, margin: "0 auto 24px" }}>Join the early list for launch updates, supported rivers, driver openings, and app availability.</p>
          <form style={{ maxWidth: 560, margin: "0 auto", display: "flex", gap: 10 }} className="waitlist-form">
            <input placeholder="Enter your email" style={{ flex: 1, borderRadius: 999, border: `1px solid ${COLORS.border}`, padding: "14px 18px", fontSize: 15 }} />
            <button type="button" style={styles.button}>Join waitlist</button>
          </form>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={{ ...styles.navInner, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 950 }}>RiverRun</div>
            <p style={{ ...styles.p, fontSize: 14, maxWidth: 620, marginTop: 8 }}>RiverRun is a technology marketplace connecting paddlers with independent drivers. RiverRun does not provide transportation services directly.</p>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 14, fontWeight: 800 }}>
            <a href="#" style={styles.link}>Rider Agreement</a>
            <a href="#" style={styles.link}>Driver Agreement</a>
            <a href="#" style={styles.link}>Privacy</a>
          </div>
        </div>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        a:hover { opacity: .82; }
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hero-grid, .split { grid-template-columns: 1fr !important; }
          .grid3 { grid-template-columns: 1fr !important; }
          .waitlist-form { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
