import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { FaConciergeBell, FaBed, FaLeaf, FaCheckCircle, } from "react-icons/fa";
import { motion } from "framer-motion";
import personA from "./assets/PersonA.webp";
import personB from "./assets/Steve.jpg";
import personC from "./assets/DWK.png";
import newHomeHero from "./assets/Home.jpg";
import missionImage2 from "./assets/Trial.png";
import serviceImage1 from "./assets/service.png";
import Aftercare from "./assets/Aftercare.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const CONTENT = {
  brand: {
    siteName: "Tahoe Resonance",
    tagline: [
      "Clear Water Clear Mind",
      "Luxury Rehab"
    ],
  },
  doctor: {
    name: "Vuppalapati . D (MD)",
    credentials: "Chief Medical Officer",
    experience: "27 Years of Experience",
    // vision: "{{Doctor's vision paragraph from doc}}",
    photoUrl: personC,
  },
  about: [
    {
      heading: "Overview",
      intro: "Luxury Residential Treatment in the Sierra Nevadas",
      points: [
        "Nestled in a private luxury home with sweeping mountain views of the Sierra Nevadas, Tahoe Resonance provides comprehensive detox and residential treatment for substance use disorders and co-occurring mental health conditions.",
        "Our program delivers a high-end recovery experience designed for professionals and executives who require discretion, flexibility, and clinical excellence. Specialized executive and professional tracks allow clients to continue managing work and personal responsibilities while receiving comprehensive care.",
        "Clients may choose between 12-step and non-12-step treatment pathways, ensuring a personalized, evidence-based approach to recovery. To support ongoing connection with family and professional obligations, personal cell phones and laptops are permitted throughout treatment.",
        "Exceptional Clinical & Executive Leadership",
        "Our facility is guided by a distinguished leadership and medical team, including:",
        "A Chief Executive Officer with extensive prior experience leading treatment centers in both Reno and Las Vegas",
        "3 fellowships-trained at Yale University, with 27 years of clinical experience in Nevada, and licensed in Nevada and California",
        "An on-site Hospitalist who conducts comprehensive medical evaluations, including complete histories and physical examinations",
        "By combining luxury accommodations, individualized care, and world-class medical oversight, Tahoe Resonance offers an environment where healing, privacy, and long-term recovery can thrive.",
      ],
    },
    {
      heading: "Ages Served",
      points: ["Adults (Ages 21 and above)"],
    },
    // {
    //   heading: "Genders Accepted",
    //   points: [
    //     "Female",
    //     "Male",
    //   ],
    // },
    // {
    //   heading: "Language Served",
    //   points: [
    //     "English",
    //   ],
    // },
    {
      heading: "Treatment",
      points: [
        "Residential detoxification for mild to moderate symtoms - [COMING SOON]",
        "Both short term 30 day rehab, 60 day and 90 day rehab",
      ],
    },
    {
      heading: "Special Programs",
      points: [
        "Adult Men",
        "Adult Women",
        "Seniors",
      ],
    },
  ],
  services: [
    {
      key: "Recovery",
      title: "A country side luxury for Recovery",
      description: "Overlooking the Sierra Nevada mountains, the center offers a private, executive-style rehab that blends a serene environment with high-end amenities such as gourmet meals, Lake Tahoe, fitness programs, and mountain-view rooms. The setting ensures personal attention and privacy, making it a good fit for professionals and individuals seeking a discreet, comfortable recovery experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    },
    {
      key: "Mental_Health",
      title: "Integrated Care for Substance Use and Mental Health",
      description: "The center specializes in treating substance use disorders alongside co-occurring mental health conditions. Each client receives an adapted treatment plan that addresses both together, with the goal of long-term stability and resilience. Clients also have access to grief counseling and relapse prevention support. The center offers 12-Step, non-12-Step, SMART Recovery, and faith-based tracks so clients can choose what best resonates with them.",
      imageUrl:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    },
    {
      key: "Recreation",
      title: "Mind-Body Healing and Recreation",
      description: "To support whole-person recovery, the program incorporates holistic practices such as yoga, meditation, nutritional counseling, aromatherapy, and art and music therapy. Clients also enjoy activities such as hiking, paddle boarding near Lake Tahoe. These options provide healthy ways to manage stress, rebuild physical health, and reconnect with personal well-being.",
      imageUrl:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    },
    {
      key: "Tech-Friendly",
      title: "Flexible and Tech-Friendly",
      description: "Recognizing the realities of modern life, the center allows the use of cell phones and laptops. This makes it possible for executives, students, and parents to manage work, school, or family responsibilities while in treatment. To ensure a safe, respectful, and confidential environment for everyone, client privacy is strictly protected. While personal devices are permitted, taking photographs or videos of other clients, staff members, or any treatment-related activities is strictly prohibited. Stays are flexible, ranging from 4 weeks to 90 days, depending on each client’s needs and progress.",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      key: "Detox",
      title: "Safe, Professional Detox",
      description: "Detox is often the first step in treatment, and the center provides medically supervised detox on-site. Medications for addiction treatment (MAT) are prescribed when needed. Each process is customized to the client’s history and needs, with 24/7 monitoring to ensure safety and comfort during withdrawal. Patients who go through moderate to severe withdrawals could be recommended for brief hospitalization for medical clearance. All clients will need medical clearance before being admitted to the program.<br/><br/><strong>Medically Supervised Detox Services — Coming Soon</strong>",
      imageUrl:
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1600&q=80",
    },
    {
      key: "Support",
      title: "Aftercare and Continued Support",
      description: "Recovery planning begins on day one. Discharge plans may include step-down care through intensive outpatient programs (IOP), at your hometown programs or the closest programs near your home, access to recovery coaches, or connection to alumni networks and private online groups. These aftercare resources help clients transition back into daily life with a greater sense of stability.",
      imageUrl: Aftercare,
    },
  ],
  amenities: [
    {
      key: "Amenities",
      title: "Amenities",
      icon: <FaConciergeBell />,
      description: [
        "Fitness center - [ COMING SOON ]",
        "Hiking trails",
        "Gourmet meals",
        "Business center",
        "Airport pickup & drop-off",
        "Dietary accommodations",
        "Healthy meals",
        "In-house chef",
        "Outdoor relaxation lounge",
        "Equestrian Therapy - [ COMING SOON ]",
      ],
    },
    {
      key: "Room Amenities",
      title: "Room Amenities",
      icon: <FaBed />,
      description: [
        "Air conditioned rooms",
        "Bathroom essentials",
        "Housekeeping",
        "Internet access",
        "Laundry service",
        "Outdoor space",
        "TV/Theatre - [ COMING SOON ]",
        "Shared Room options",
      ],
    },
    {
      key: "Activities",
      title: "Activities",
      icon: <FaLeaf />,
      description: [
        "Art therapy",
        "Music therapy",
        "Yoga",
        "Walking trails",
        "Fitness activities",
        "Hiking",
        "Offsite outings",
      ],
    },
  ],
  mission: {
    heading: "Our Mission",
    blurb: "Our mission is to guide individuals on their journey to recovery by offering a safe, respectful, and supportive environment. Through individualized treatment plans, holistic therapies, and continuous encouragement, we help each person rebuild their lives and rediscover their potential.",
  },
  testimonials: [
    {
      quote: "{{Patient/Family quote #1 from doc}}",
      author: "— {{Name/Relation (if permitted)}}",
      videoUrl: "", // optional: put a public video URL if provided
    },
    {
      quote: "{{Patient/Family quote #2}}",
      author: "— {{Name/Relation}}",
      videoUrl: "",
    },
  ],
  ourteam: [
    {
      name: "Dr. Vuppalapati .D (MD)",
      role: "Chief Medical Officer & Psychiatrist",
      bio: [
        "Trained at University of Minnesota, Minneapolis, MN",
        "Fellowship trained at Yale University, New Haven, CT",
        "27 years of clinical experience"
      ],
      moreInfo: `
      Medical Director Senior Bridges at Northern West Speciality Hospital, Reno, Nevada & Carson Valley Medical Center, Gardnerville, Nevada. 

      Dr. Vuppalapati's main expertise is in the field of Psychiatry & he has practiced well over 27 years in Adult, Geriatric Psychiatry and Addiction Medicine. Dr. Vuppalapati completed Medical School at the University of Health Sciences in Andhra Pradesh, India. He did the Residency Training Program at the University of Minnesota, Minneapolis for 4 years and was also the Chief Resident in Psychiatry. After which he got accepted to the Advanced Fellowship Training at Yale University, New Haven, Connecticut. 

      While at Yale University, he completed 3 Fellowships, which include Psychosomatic Medicine, Addiction Medicine and Post-Doctoral Fellowship in Geriatric Psychiatry. He was also the Assistant Clinical Professor at Yale University and worked in the Hepatitis 'C' Clinic. 

      After moving to Nevada in 2004, he practiced at various facilities as the Medical Director, which include: Carson Tahoe Behavioral Health Services, Carson City, State of Nevada Rural Clinics, Northern Nevada Medical Center, Sparks, Nevada, Center for Hope of the Sierra's Residential Eating Disorder treatment center, Reno, Nevada, Carson Valley Medical Center, Vitality for Life & at St' Mary's Regional Medical Center, Reno, Nevada. His goal now is to work at Chief Medical Officer for TAHOE RESONANCE, Chemical Dependence Residential Rehabilitation Center. 

      Dr. Vuppalapati is married & has one son and two daughters, along with two German Shepards. His hobbies are traveling abroad, playing sports & Autoracing. 
      `,
      photoUrl: personC,
    },
    {
      name: "Steve Shell (MBA)",
      role: "Chief Executive Officer",
      bio:[
        "Hailing from Memphis, Tennessee",
        "Moved to Reno, Nevada in 2010",
        "30 years of healthcare experience"
      ],
      moreInfo: `
      Hailing from Memphis, Tennessee, Steve Shell, MBA moved to Reno, Nevada in 2010. Steve has 30 years of healthcare experience with for-profit and nonprofit organizations from both the medical and behavioral health sectors. He has dedicated his career to advocating for vulnerable populations through his passion for high-quality and patient-centered mental health and addiction treatment. He has held various facility and corporate roles around the United States, including serving as chief executive officer of several behavioral health hospitals.

      Since 2013 Steve has designed and opened Nevada’s two newest full-service behavioral health hospitals, a behavioral health hospital in California, and an addiction treatment facility in Texas. He most recently served as Vice President of Behavioral Health for Renown Health from 2020 to 2025 to oversee the operations and continued growth of the Stacie Mathewson Behavioral Health &amp; Addiction Institute and other behavioral health services across the Renown system.

      Steve was a key resource in the creation of Reno Behavioral Healthcare Hospital in 2016 and as the chief executive officer spearheaded the strategic plan, design, construction, and development of the facility. He worked with a variety of community partners to make the 124-bed hospital a reality. Reno Behavioral was the first of its kind in the region in 35 years.

      Steve also launched and served as chief executive officer of the newly constructed 83-bed Desert Parkway Behavioral Healthcare Hospital in Las Vegas in 2013 and led an expansion to 152 beds in 2017 with a separate comprehensive outpatient facility.

      In addition to being recognized as Nevada Business Magazine’s Healthcare Administrator of the Year in 2019 and National Association of Social Work-Nevada’s Public Citizen of the Year in 2023, Steve has been active throughout Nevada and the United States to promote wellness and reduce the stigma surrounding mental health and addiction. He is Past President of NAMI Nevada and currently serves as Chair of the Washoe Regional Behavioral Health Policy Board, Vice Chair of the Nevada Attorney General’s Statewide Substance Use Response Group, and the Founder/Executive Director of the Behavioral Health Association of Nevada.
    `,
      photoUrl: personB,
    },
  ],
  contact: {
    phone: "+1 (000) 000-0000",
    email: "info@tahoeresonance.com",
    address: "625 Onyo Way Sparks, Nevada, 89441",
    hours: "Mon – Fri, 9 AM – 6 PM",
    mapEmbedUrl: "https://www.google.com/maps?q=625%20Onyo%20Way%20Sparks%20NV%2089441&output=embed",
  },
  cta: {
    button: "Request Appointment",
  },
  assets: {
    hero: newHomeHero,
    heroAlt: "Calming nature scene",
    texture:
      "https://images.unsplash.com/photo-1508615070457-7baeba4003a1?auto=format&fit=crop&w=1600&q=60", // soft abstract
  },
  social: [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
  ],
};

// ---------- UI BASICS ----------
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>{children}</section>
);

 const FadeIn = ({ children, delay = 0, inView = true }) => (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      {...(inView
        ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
        : { animate: { opacity: 1, y: 0 } })}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
   );

   const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);
  
    return null;
  };

// ---------- NAVBAR & FOOTER ----------
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <Container className="relative flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="font-semibold tracking-tight text-slate-800 z-10"
        >
          {CONTENT.brand.siteName}
        </NavLink>

        <nav className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          <NavLink className="hover:text-sky-700" to="/">Home</NavLink>
          <NavLink className="hover:text-sky-700" to="/services">Services</NavLink>
          <NavLink className="hover:text-sky-700" to="/amenities">Amenities</NavLink>
          <NavLink className="hover:text-sky-700" to="/ourteam">OurTeam</NavLink>
          <NavLink className="hover:text-sky-700" to="/about">About</NavLink>
          <NavLink className="hover:text-sky-700" to="/contact">Contact</NavLink>
        </nav>

        <button
          className="md:hidden text-2xl z-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </Container>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
          <NavLink onClick={() => setMenuOpen(false)} className="block hover:text-sky-700" to="/">Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="block hover:text-sky-700" to="/services">Services</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="block hover:text-sky-700" to="/amenities">Amenities</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="block hover:text-sky-700" to="/ourteam">OurTeam</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="block hover:text-sky-700" to="/about">About</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="block hover:text-sky-700" to="/contact">Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200">
    <Container className="py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h4 className="font-semibold text-slate-800">{CONTENT.brand.siteName}</h4>
        <p className="mt-2 text-slate-600">{CONTENT.brand.tagline}</p>
      </div>
      <div>
        <h5 className="font-semibold text-slate-800">Contact</h5>
        <ul className="mt-3 text-slate-600 space-y-1">
          <li>{CONTENT.contact.address}</li>
          <li><a className="hover:text-sky-700" href={`tel:${CONTENT.contact.phone}`}>{CONTENT.contact.phone}</a></li>
          <li><a className="hover:text-sky-700" href={`mailto:${CONTENT.contact.email}`}>{CONTENT.contact.email}</a></li>
          <li>{CONTENT.contact.hours}</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-slate-800">Quick Links</h5>
        <ul className="mt-3 text-slate-600 space-y-1">
          <li><NavLink className="hover:text-sky-700" to="/">Home</NavLink></li>
          <li><NavLink className="hover:text-sky-700" to="/about">About</NavLink></li>
          <li><NavLink className="hover:text-sky-700" to="/services">Services</NavLink></li>
          <li><NavLink className="hover:text-sky-700" to="/amenities">Amenities</NavLink></li>
          <li><NavLink className="hover:text-sky-700" to="/testimonials">Testimonials</NavLink></li>
          <li><NavLink className="hover:text-sky-700" to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-slate-800">Follow</h5>
        <div className="mt-3 flex gap-3">
          {CONTENT.social.map((s) => (
            <a key={s.name} href={s.url} className="text-slate-600 hover:text-sky-700" target="_blank" rel="noreferrer">{s.name}</a>
          ))}
        </div>
      </div>
    </Container>
    <div className="border-t border-slate-200 py-4 text-center text-slate-500 text-sm">© {new Date().getFullYear()} {CONTENT.brand.siteName}. All rights reserved.</div>
  </footer>
);

// ---------- PAGES ----------
const Home = () => (
  <main>
    {/* HERO */}
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <img src={CONTENT.assets.hero} alt={CONTENT.assets.heroAlt} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90" />
      <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <FadeIn inView={false}>
          <div className="backdrop-blur-md bg-white/20 rounded-3xl px-6 py-6 sm:px-10 sm:py-8 shadow-xl border border-white/80 max-w-xl mx-auto">

            {/* Title */}
            <h1
              className="text-4xl font-bold sm:text-6xl tracking-tight text-slate-800" style={{ fontFamily: "Astellan" }}
            >
              {CONTENT.brand.siteName}
            </h1>

            {/* Taglines */}
            <div className="mt-3 space-y-1">
              {CONTENT.brand.tagline.map((line, i) => (
                <p
                  key={i}
                  className="mt-5 space-y-1 font-bold text-slate-700 text-black text-2xl" style={{fontFamily: "Times New Roman" }}
                >
                  {line}
                </p>
              ))}
            </div>

          </div>
        </FadeIn>
        <FadeIn delay={0.2} inView={false}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <NavLink to="/services" className="rounded-xl bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700 transition">Explore Services</NavLink>
            {/* <NavLink to="/contact" className="rounded-xl border border-sky-600 px-6 py-3 text-sky-700 hover:bg-sky-50 transition">Book an Appointment</NavLink> */}
          </div>
        </FadeIn>
      </Container>
    </div>

    {/* MISSION */}
    <Section>
      <Container>
        <FadeIn inView={false}>
          <div className="grid gap-10 lg:grid-cols-2 items-center" >
            {/* <div> */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">{CONTENT.mission.heading}</h2>
              <div style={{ fontFamily: "Times New Roman" }}>
              <p className="sm:text-xl mt-4 text-slate-600 leading-relaxed text-justify whitespace-pre-line"> {CONTENT.mission.blurb}</p>
              </div>
          </div>
        </FadeIn>
      </Container>
    </Section>

    {/* FULL-WIDTH IMAGE AFTER MISSION */}
    <Section className="w-full relative">
      <img
        src={missionImage2}
        alt="Mission Visual"
        className="w-full h-[60vh] sm:h-[70vh] object-cover"
      />
    </Section>

    {/* DOCTOR INTRO */}
    <Section className="bg-slate-50">
      <Container>
        <FadeIn inView={false}>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <img className="w-full rounded-2xl shadow" src={CONTENT.doctor.photoUrl} alt={CONTENT.doctor.name} />
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800"> {CONTENT.doctor.name}</h3>
              <p className="mt-3 text-slate-600">{CONTENT.doctor.credentials}</p>
              <p className="mt-3 text-slate-600">{CONTENT.doctor.experience}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{CONTENT.doctor.vision}</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  </main>
);

const About = () => (
  <main className="bg-gradient-to-b from-sky-50/60 to-white">
    <Section>
      <Container>
        <FadeIn inView={false}>
          <div className="rounded-3xl bg-white/80 shadow-sm border border-slate-200 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-6">
              About Us
            </h2>
            <div className="h-1 w-16 rounded-full bg-sky-500 mb-4" />
            {CONTENT.about.map((section, idx) => (
              <div key={idx} className="mt-8">
                {section.heading && (
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {section.heading}
                  </h3>
                )}
                {section.intro && (
                  <p className="text-slate-600 mb-3">{section.intro}</p>
                )}
                <ul className="list-disc pl-8 marker:text-sky-600 text-slate-700 space-y-2">
                  {section.points.map((p, i) => (
                    <li key={i} className="leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>

    <Section className="bg-slate-50">
      <Container>
        <FadeIn inView={false}>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <img className="w-full rounded-2xl shadow" src={CONTENT.doctor.photoUrl} alt={CONTENT.doctor.name} />
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800">{CONTENT.doctor.name}</h3>
              <p className="mt-3 text-slate-600">{CONTENT.doctor.credentials}</p>
              <p className="mt-3 text-slate-600">{CONTENT.doctor.experience}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{CONTENT.doctor.vision}</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  </main>
);

const Services = () => {
  const scrollRef = React.useRef(null);

  const scrollByCard = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector("[data-service-card='true']");
    const cardW = firstCard ? firstCard.getBoundingClientRect().width : 900;

    el.scrollBy({ left: dir * (cardW + 28), behavior: "smooth" });
  };

  return (
    <main>
      <Section>
        <Container>
          <FadeIn inView={false}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                Services
              </h2>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  className="h-11 w-11 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow transition text-2xl leading-none"
                  aria-label="Scroll left"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  className="h-11 w-11 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow transition text-2xl leading-none"
                  aria-label="Scroll right"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Slider track */}
            <div
              ref={scrollRef}
              className="
                flex gap-7 overflow-x-auto pb-5
                scroll-smooth
                [scrollbar-width:none]
                [-webkit-overflow-scrolling:touch]
                snap-x snap-mandatory
              "
              style={{ msOverflowStyle: "none" }}
            >
              <style>{`
                .hideScroll::-webkit-scrollbar { display: none; }
              `}</style>

              {CONTENT.services.map((s) => (
                <article
                  key={s.key}
                  data-service-card="true"
                  className="
                    snap-start flex-none
                    w-[92vw] sm:w-[720px] lg:w-[980px]
                    rounded-3xl border border-slate-200 bg-white
                    shadow-sm hover:shadow-md transition
                    overflow-hidden
                  "
                >
                  {/* Image */}
                  <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
                    <img
                      src={s.imageUrl}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* subtle overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-white text-xl sm:text-2xl font-semibold">
                      {s.title}
                    </h3>
                  </div>

                  {/* Text */}
                  <div className="p-6 sm:p-8">
                  <p
                    className="text-slate-700 leading-relaxed text-base sm:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: s.description,
                    }}
                  />
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-3 text-sm text-slate-500">Swipe to explore →</p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="w-full relative">
        <img
          src={serviceImage1}
          alt="Service Visual"
          className="w-full h-[20vh] sm:h-[80vh] object-cover"
        />
      </Section>
    </main>
  );
};

const Amenities = () => (
  <main>
    <Section>
      <Container>
        <FadeIn inView={false}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-8">
            Amenities
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.amenities.map((s) => (
              <article
                key={s.key}
                className="
                  rounded-2xl border border-slate-200 bg-white p-8
                  shadow-sm hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl text-slate-900">
                    {s.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {s.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-slate-900 mt-2" />
                  </div>
                </div>

                <div className="space-y-3">
                  {s.description.map((line, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <FaCheckCircle
                        className="mt-1 text-slate-800 shrink-0"
                        size={14}
                      />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  </main>
);

const Testimonials = () => (
  <main>
    <Section>
      <Container>
        <FadeIn inView={false}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-8">Testimonials</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {CONTENT.testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-slate-700 italic leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-slate-500">{t.author}</figcaption>
                {t.videoUrl ? (
                  <div className="mt-4 aspect-video">
                    <iframe className="h-full w-full rounded-xl" src={t.videoUrl} title={`Testimonial ${i+1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                ) : null}
              </figure>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  </main>
);

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedMember]);
  return (
    <main className="bg-gradient-to-b from-sky-50/60 to-white">
      <Section>
        <Container>
          <FadeIn inView={false}>
            <div className="rounded-3xl bg-white/80 shadow-sm border border-slate-200 p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-6">
                Our Team
              </h2>

              <div className="h-1 w-16 rounded-full bg-sky-500 mb-4" />

              <p className="text-slate-600 max-w-3xl">
                A dedicated, highly trained team guiding every step of your
                recovery journey at Tahoe Resonance.
              </p>

              <div className="mt-10 space-y-10">
                {CONTENT.ourteam.map((member, index) => (
                  <div
                    key={member.name}
                    className={`flex flex-col items-center gap-6 md:gap-10 md:flex-row ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* PHOTO */}
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg border border-slate-200 transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />

                    {/* TEXT */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold text-slate-800">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sky-700 font-medium">
                        {member.role}
                      </p>

                      {/* BIO (bullet points or single line) */}
                      <div className="mt-3 text-slate-600 leading-relaxed">
                        {Array.isArray(member.bio) ? (
                          <ul className="list-disc pl-6 marker:text-sky-600 space-y-1">
                            {member.bio.map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{member.bio}</p>
                        )}

                        {/* MORE INFO BUTTON */}
                        {member.moreInfo && (
                          <button
                            onClick={() => setSelectedMember(member)}
                            className="mt-4 text-sky-600 underline text-sm hover:text-sky-800"
                          >
                            More Info
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800">
                {selectedMember.name}
              </h3>
              <p className="text-sky-700 font-medium mt-1">
                {selectedMember.role}
              </p>
            </div>

            {/* Scrollable content */}
            <div className="px-6 py-4 overflow-y-auto">
              <p className="text-slate-600 leading-relaxed whitespace-pre-line text-justify">
                {selectedMember.moreInfo}
              </p>
            </div>

            {/* Footer – Close button */}
            <div className="p-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    concern: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z\s.'-]{2,}$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Enter a valid full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        newErrors.phone = "Enter a valid phone number.";
      }
    }

    if (formData.preferredDate) {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.preferredDate = "Preferred date cannot be in the past.";
      }
    }

    if (!formData.concern.trim()) {
      newErrors.concern = "Please describe your concern.";
    } else if (formData.concern.trim().length < 10) {
      newErrors.concern = "Please enter at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    const payload = {
      access_key: "829b2d19-e6d0-4dfc-b88d-fcf07852f6ea",
      subject: "New Contact Request - Tahoe Resonance",
      from_name: "Tahoe Resonance Website",
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone || "Not provided",
      preferred_date: formData.preferredDate || "Not provided",
      concern: formData.concern,
      to_email: "info@tahoeresonance.com",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          preferredDate: "",
          concern: "",
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <Section>
        <Container>
          <FadeIn inView={false}>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                  Contact Us
                </h2>

                <div className="mt-6 space-y-4 text-left">
                  <a href={`tel:${CONTENT.contact.phone}`} className="flex items-center gap-4 text-slate-800 hover:text-sky-700">
                    <FaPhoneAlt className="text-xl shrink-0" />
                    <span className="text-xl">{CONTENT.contact.phone}</span>
                  </a>

                  <a href={`mailto:${CONTENT.contact.email}`} className="flex items-center gap-4 text-slate-800 hover:text-sky-700">
                    <FaEnvelope className="text-xl shrink-0" />
                    <span className="text-xl">{CONTENT.contact.email}</span>
                  </a>

                  <div className="flex items-center gap-4 text-slate-800">
                    <FaMapMarkerAlt className="text-xl shrink-0" />
                    <span className="text-xl">{CONTENT.contact.address}</span>
                  </div>

                  <div className="flex items-center gap-4 text-slate-800">
                    <FaClock className="text-xl shrink-0" />
                    <span className="text-xl">{CONTENT.contact.hours}</span>
                  </div>
                </div>

                <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200"
                        placeholder="Full name"
                        required
                      />
                      {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200"
                        type="email"
                        placeholder="Email"
                        required
                      />
                      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200"
                        type="tel"
                        placeholder="Phone"
                      />
                      {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <input
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200"
                        type="date"
                        placeholder="Preferred date"
                      />
                      {errors.preferredDate && <p className="text-red-600 text-sm mt-1">{errors.preferredDate}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200"
                      rows="5"
                      placeholder="Briefly describe your concern"
                      required
                    ></textarea>
                    {errors.concern && <p className="text-red-600 text-sm mt-1">{errors.concern}</p>}
                  </div>

                  <button className="rounded-xl bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700 transition w-full sm:w-auto">
                    Submit Request
                  </button>

                  {status === "success" && (
                    <p className="text-green-700 font-medium">
                      Thank you. Your request has been submitted successfully.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-red-700 font-medium">
                      Something went wrong. Please try again or email us directly at info@tahoeresonance.com.
                    </p>
                  )}
                </form>
              </div>

              <div>
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow">
                  <iframe
                    className="h-full w-full"
                    src={CONTENT.contact.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic location"
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}