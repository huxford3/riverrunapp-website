import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Car, MapPin, ShieldCheck, MessageCircle, Clock, Waves, Users, CheckCircle2, Smartphone } from "lucide-react";

const COLORS = {
  bg: "#F2F6F6",
  dark: "#17353D",
  teal: "#57B3B3",
  muted: "#748188",
  border: "#D5E1E1",
  white: "#FFFFFF",
};

const Button = ({ children, variant = "primary" }) => (
  <button
    className={`rounded-2xl px-6 py-3 text-sm font-semibold transition shadow-sm ${
      variant === "primary"
        ? "bg-[#57B3B3] text-white hover:opacity-90"
        : "bg-white text-[#17353D] border border-[#D5E1E1] hover:bg-[#F2F6F6]"
    }`}
  >
    {children}
  </button>
);

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center rounded-full border border-[#D5E1E1] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#57B3B3]">
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, text }) => (
  <div className="rounded-3xl border border-[#D5E1E1] bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F6F6] text-[#57B3B3]">
      <Icon size={24} />
    </div>
    <h3 className="mb-2 text-lg font-bold text-[#17353D]">{title}</h3>
    <p className="text-sm leading-6 text-[#748188]">{text}</p>
  </div>
);

const Step = ({ number, title, text }) => (
  <div className="flex gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#57B3B3] text-sm font-bold text-white">
      {number}
    </div>
    <div>
      <h3 className="font-bold text-[#17353D]">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-[#748188]">{text}</p>
    </div>
  </div>
);

export default function RiverRunWebsite() {
  return (
    <main className="min-h-screen bg-[#F2F6F6] text-[#17353D]">
      <nav className="sticky top-0 z-50 border-b border-[#D5E1E1] bg-[#F2F6F6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#57B3B3] text-white">
              <Waves size={22} />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">RiverRun</div>
              <div className="text-xs text-[#748188]">Paddle shuttle made simple</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#17353D] md:flex">
            <a href="#how-it-works" className="hover:text-[#57B3B3]">How it works</a>
            <a href="#riders" className="hover:text-[#57B3B3]">For riders</a>
            <a href="#drivers" className="hover:text-[#57B3B3]">For drivers</a>
            <a href="#safety" className="hover:text-[#57B3B3]">Safety</a>
          </div>

          <Button>Join waitlist</Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#57B3B3]/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <SectionLabel>Launching for paddlers</SectionLabel>
            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-tight tracking-tight text-[#17353D] md:text-6xl">
              A better way to get back to your vehicle after a river trip.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#748188]">
              RiverRun connects paddlers with independent local drivers for simple, scheduled kayak and canoe shuttle rides.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>
                Get early access <ArrowRight className="ml-2 inline" size={16} />
              </Button>
              <Button variant="secondary">Become a driver</Button>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-2xl font-black text-[#17353D]">30 min</div>
                <div className="text-xs text-[#748188]">pickup slots</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-2xl font-black text-[#17353D]">2 hr</div>
                <div className="text-xs text-[#748188]">booking lead</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-2xl font-black text-[#17353D]">Local</div>
                <div className="text-xs text-[#748188]">driver network</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-[#D5E1E1] bg-white p-5 shadow-xl">
              <div className="rounded-[1.5rem] bg-[#F2F6F6] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#748188]">Upcoming shuttle</div>
                    <div className="text-xl font-black">Sugar Creek</div>
                  </div>
                  <div className="rounded-full bg-[#57B3B3] px-4 py-2 text-xs font-bold text-white">Confirmed</div>
                </div>

                <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-[#57B3B3]" size={20} />
                    <div>
                      <div className="font-bold">Put-in</div>
                      <div className="text-sm text-[#748188]">Deer’s Mill access</div>
                    </div>
                  </div>
                  <div className="ml-2 h-8 border-l-2 border-dashed border-[#D5E1E1]" />
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-[#57B3B3]" size={20} />
                    <div>
                      <div className="font-bold">Take-out</div>
                      <div className="text-sm text-[#748188]">Cox Ford covered bridge</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white p-4 shadow-sm">
                    <Clock className="mb-3 text-[#57B3B3]" />
                    <div className="text-sm text-[#748188]">Pickup</div>
                    <div className="font-black">9:30 AM</div>
                  </div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">
                    <Users className="mb-3 text-[#57B3B3]" />
                    <div className="text-sm text-[#748188]">Riders</div>
                    <div className="font-black">2 paddlers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Schedule your shuttle before you hit the water.</h2>
            <p className="mt-4 max-w-xl leading-8 text-[#748188]">
              Pick your river, put-in, take-out, pickup time, and number of riders. RiverRun helps match the ride with an approved local driver.
            </p>
          </div>
          <div className="space-y-7 rounded-3xl border border-[#D5E1E1] bg-white p-8 shadow-sm">
            <Step number="1" title="Choose your route" text="Select the river, put-in, and take-out for your trip." />
            <Step number="2" title="Schedule pickup" text="Choose your pickup date, time, riders, and shuttle type." />
            <Step number="3" title="Get matched" text="An approved independent driver accepts your shuttle request." />
            <Step number="4" title="Ride back with confidence" text="Driver status updates help you know when they are on the way and arrived." />
          </div>
        </div>
      </section>

      <section id="riders" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>For riders</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Built for paddlers who bring their own gear.</h2>
            <p className="mt-4 leading-8 text-[#748188]">
              RiverRun is designed for people who already have kayaks, canoes, or paddleboards and just need a reliable shuttle connection.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard icon={MapPin} title="Route-based booking" text="Choose from supported rivers, access points, and take-outs without calling around." />
            <FeatureCard icon={MessageCircle} title="In-app updates" text="Know when your ride is accepted, when your driver is on the way, and when they arrive." />
            <FeatureCard icon={ShieldCheck} title="Clear expectations" text="Rider guidelines help set expectations around timing, wet gear, animals, and cancellations." />
          </div>
        </div>
      </section>

      <section id="drivers" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D5E1E1] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2F6F6] text-[#57B3B3]">
              <Car size={28} />
            </div>
            <h2 className="text-3xl font-black tracking-tight">Earn by helping paddlers move between river access points.</h2>
            <p className="mt-4 leading-8 text-[#748188]">
              Drivers can apply, get approved, view available rides, and accept trips that fit their schedule.
            </p>
            <div className="mt-6 space-y-3">
              {["See pickup date, time, and route", "Accept rides that fit your availability", "Driver earnings shown before accepting", "Support link available when help is needed"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#17353D]">
                  <CheckCircle2 size={18} className="text-[#57B3B3]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Driver network</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Flexible trips. Local routes. Simple flow.</h2>
            <p className="mt-4 leading-8 text-[#748188]">
              RiverRun is not a traditional outfitter or rental company. It is a marketplace for scheduled shuttle support from independent drivers.
            </p>
            <div className="mt-8 flex gap-3">
              <Button>Apply to drive</Button>
              <Button variant="secondary">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#17353D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#57B3B3]">Safety & clarity</div>
              <h2 className="mt-5 text-4xl font-black tracking-tight">Designed to reduce confusion before, during, and after pickup.</h2>
              <p className="mt-4 leading-8 text-white/70">
                RiverRun is being built around clear status updates, driver approval, arrival proof, rider guidelines, and support access.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <ShieldCheck className="mb-4 text-[#57B3B3]" />
                <h3 className="font-bold">Approved drivers</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">Drivers must register and be approved before accepting rides.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <Clock className="mb-4 text-[#57B3B3]" />
                <h3 className="font-bold">Pickup windows</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">Scheduled pickup times and wait windows help set expectations.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <MapPin className="mb-4 text-[#57B3B3]" />
                <h3 className="font-bold">Arrival proof</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">Timestamp and location checks support arrival confirmation.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <Smartphone className="mb-4 text-[#57B3B3]" />
                <h3 className="font-bold">Support access</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">Riders and drivers can access support when something goes wrong.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-14">
          <SectionLabel>Coming soon</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight">Be first in line when RiverRun launches in your area.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#748188]">
            Join the early access list for launch updates, supported rivers, driver openings, and app availability.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-3xl border border-[#D5E1E1] bg-[#F2F6F6] p-3 sm:flex-row">
            <input
              placeholder="Enter your email"
              className="min-h-12 flex-1 rounded-2xl border border-[#D5E1E1] bg-white px-4 text-sm outline-none"
            />
            <Button>Join waitlist</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D5E1E1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#748188] md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-bold text-[#17353D]">RiverRun</div>
            <div>RiverRun is a technology marketplace connecting paddlers with independent drivers.</div>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#57B3B3]">Rider Agreement</a>
            <a href="#" className="hover:text-[#57B3B3]">Driver Agreement</a>
            <a href="#" className="hover:text-[#57B3B3]">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
