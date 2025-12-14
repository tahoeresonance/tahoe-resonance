import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import personA from "./assets/PersonA.webp";
import personB from "./assets/Steve.jpg";
import newHomeHero from "./assets/Home.jpg";
import missionImage2 from "./assets/Trial.png";
import serviceImage1 from "./assets/service.png";

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
    credentials: "Cheif Medical Officer",
    experience: "26 Years of Experience",
    // vision: "{{Doctor's vision paragraph from doc}}",
    photoUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
  },
  about: [
    {
      heading: "Overview",
      intro: "Located in Verdi, Nevada.",
      points: [
        "Set in a LUXURY HOME WITH MOUNTAIN VIEWS OF THE SIERRAS, NEVADA offers detox, residential care for substance use and co-occurring mental health conditions.",
        "The center provides a luxury recovery experience with executive and professional tracks available. Clients can choose between 12-step or non-12-step pathways.",
        "Personal cell phones and laptops are allowed so clients can stay connected to work and family life during treatment.",
        "The facility will be staffed with a highly experienced CEO, who was the CEO of Reno and Las Vegas facilities, MD Psychiatrist, who is fellowship trained at Yale University and practiced in Nevada for 26 years and licensed in Nevada and California. Also, Hospitalist will be available to do a complete history and physicals.",
      ],
    },
    {
      heading: "Ages Served",
      points: ["Adults (Ages 21 – 90)"],
    },
    {
      heading: "Genders Accepted",
      points: [
        "Female",
        "Male",
      ],
    },
    {
      heading: "Language Served",
      points: [
        "English",
      ],
    },
    {
      heading: "Treatment",
      points: [
        "Residential detoxification for mild to moderate symtoms",
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
      description: "Overlooking the Sierra Nevada mountains, the center offers a private, executive-style rehab that blends a serene environment with high-end amenities such as gourmet meals, services, fitness programs, and mountain-view rooms. The setting ensures personal attention and privacy, making it a good fit for professionals and individuals seeking a discreet, comfortable recovery experience.",
      icon: "💪",
    },
    {
      key: "Mental_Health",
      title: "Integrated Care for Substance Use and Mental Health",
      description: "The center specializes in treating substance use disorders alongside co-occurring mental health conditions. Each client receives an adapted treatment plan that addresses both together, with the goal of long-term stability and resilience. Evidence-based therapy is interwoven. Clients also have access to grief counseling and relapse prevention support.",
      icon: "🧭",
    },
    {
      key: "Recreation",
      title: "Mind-Body Healing and Recreation",
      description: "To support whole-person recovery, the program incorporates holistic practices such as yoga, meditation, nutritional counseling, aromatherapy, and art and music therapy. Clients also enjoy activities such as hiking, paddle boarding near Lake Tahoe. These options provide healthy ways to manage stress, rebuild physical health, and reconnect with personal well-being.",
      icon: "🧰",
    },
    {
      key: "Tech-Friendly",
      title: "Flexible and Tech-Friendly",
      description: "Recognizing the realities of modern life, the center allows the use of cell phones and laptops. This makes it possible for executives, students, and parents to manage work, school, or family responsibilities while in treatment. Stays are flexible, ranging from 4 weeks to 90 days, depending on each client’s needs and progress.",
      icon: "🫶",
    },
    {
      key: "Detox",
      title: "Safe, Professional Detox",
      description: "Detox is often the first step in treatment, and the center provides medically supervised detox on-site. Medications for addiction treatment (MAT) are prescribed when needed. Each process is customized to the client’s history and needs, with 24/7 monitoring to ensure safety and comfort during withdrawal. Patients who go through moderate to severe withdrawals could be recommended for brief hospitalization for medical clearance. All clients will need medical clearance before being admitted to the program.",
      icon: "🧰",
    },
    {
      key: "Support",
      title: "Aftercare and Continued Support",
      description: "Recovery planning begins on day one. Discharge plans may include step-down care through intensive outpatient programs (IOP), at your hometown programs or the closest programs near your home, access to recovery coaches, or connection to alumni networks and private online groups. These aftercare resources help clients transition back into daily life with a greater sense of stability.",
      icon: "💪",
    },
  ],
  amenities: [
    {
      key: "Amenities",
      title: "Amenities",
      description: [
        "•	Fitness center",
        "•	Hiking trails",
        "•	Gourmet meals",
        "•	Business center",
        "•	Access to nature",
        "•	Airport pickup & drop-off",
        "•	Dietary accommodations",
        "•	Healthy meals",
        "•	In-house chef",
        "•	Outdoor relaxation lounge",
        "•	Walking paths, Mountain Bike Trails",
        "•	Equestrian Therapy",
      ],
      // icon: "💪",
    },
    {
      key: "Room Amenities",
      title: "Room Amenities",
      description: [
        "•	Air conditioned rooms",
        "•	Bathroom essentials",
        "•	Housekeeping",
        "•	Internet access",
        "•	Laundry service",
        "•	Outdoor space",
        "•	TV/Theatre",
        "•	Shared Room options",
      ],
      // icon: "🧭",
    },
    {
      key: "Activities",
      title: "Activities",
      description: [
        "	•	Art therapy",
        "•	Music therapy",
        "•	Yoga",
        "•	Walking trails",
        "•	Fitness activities",
        "•	Hiking",
        "•	Offsite outings",
      ],
      // icon: "🧰",
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
        "26 years of clinical experience"
      ],
      moreInfo: `
      Medical Director Senior Bridges at Northern West Speciality Hospital, Reno, Nevada & Carson Valley Medical Center, Gardnerville, Nevada. 

      Dr. Vuppalapati's main expertise is in the field of Psychiatry & he has practiced well over 27 years in Adult, Geriatric Psychiatry and Addiction Medicine. Dr. Vuppalapati completed Medical School at the University of Health Sciences in Andhra Pradesh, India. He did the Residency Training Program at the University of Minnesota, Minneapolis for 4 years and was also the Chief Resident in Psychiatry. After which he got accepted to the Advanced Fellowship Training at Yale University, New Haven, Connecticut. 

      While at Yale University, he completed 3 Fellowships, which include Psychosomatic Medicine, Addiction Medicine and Post-Doctoral Fellowship in Geriatric Psychiatry. He was also the Assistant Clinical Professor at Yale University and worked in the Hepatitis 'C' Clinic. 

      After moving to Nevada in 2004, he practiced at various facilities as the Medical Director, which include: Carson Tahoe Behavioral Health Services, Carson City, State of Nevada Rural Clinics, Northern Nevada Medical Center, Sparks, Nevada, Center for Hope of the Sierra's Residential Eating Disorder treatment center, Reno, Nevada, Carson Valley Medical Center, Vitality for Life & at St' Mary's Regional Medical Center, Reno, Nevada. His goal now is to work at Chief Medical Officer for TAHOE RESONANCE, Chemical Dependence Residential Rehabilitation Center. 

      Dr. Vuppalapati is married & has one son and two daughters, along with two German Shepards. His hobbies are traveling abroad, playing sports & Autoracing. 
      `,
      photoUrl: personA,
    },
    {
      name: "Steve Shell (MBA)",
      role: "Program Director",
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
    phone: "{{Phone number}}",
    email: "{{Email address}}",
    address: "605 Deer Mountain Road/2255 Warrior Lane Verdi, Nevada",
    hours: "{{Working hours}}",
    mapEmbedUrl: "https://maps.app.goo.gl/kzSRwGLNy3wHcRkg6",
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

// ---------- NAVBAR & FOOTER ----------
const NavBar = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
    <Container className="flex h-16 items-center justify-between">
      <NavLink to="/" className="font-semibold tracking-tight text-slate-800">
        {CONTENT.brand.siteName}
      </NavLink>
      <nav className="hidden gap-6 md:flex">
        <NavLink className="hover:text-sky-700" to="/">Home</NavLink>
        <NavLink className="hover:text-sky-700" to="/services">Services</NavLink>
        <NavLink className="hover:text-sky-700" to="/amenities">Amenities</NavLink>
        {/* <NavLink className="hover:text-sky-700" to="/testimonials">Testimonials</NavLink> */}
        <NavLink className="hover:text-sky-700" to="/ourteam">OurTeam</NavLink>
        <NavLink className="hover:text-sky-700" to="/about">About</NavLink>
        <NavLink className="hover:text-sky-700" to="/contact">Contact</NavLink>
      </nav>
      <NavLink>

      </NavLink>
      {/* <NavLink
        to="/contact"
        className="inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700 transition"
      >
        {CONTENT.cta.button}
      </NavLink> */}
    </Container>
  </header>
);

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

const Services = () => (
  <main>
    <Section>
      <Container>
        <FadeIn inView={false}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-8">Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.services.map((s) => (
              <article key={s.key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl" aria-hidden>{s.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-800">{s.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{s.description}</p>
              </article>
            ))}
          </div>
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

const Amenities = () => (
  <main>
    <Section>
      <Container>
        <FadeIn inView={false}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-8">Amenities</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.amenities.map((s) => (
              <article
                key={s.key}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="mt-3 text-lg font-semibold text-slate-800">
                  {s.title}
                </h3>

                <div className="mt-2 text-slate-600 leading-relaxed space-y-2">
                  {Array.isArray(s.description) ? (
                    s.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))
                  ) : (
                    <p>{s.description}</p>
                  )}
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

const Contact = () => (
  <main>
    <Section>
      <Container>
        <FadeIn inView={false}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Contact Us</h2>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li><span className="font-semibold text-slate-800">Phone:</span> <a className="hover:text-sky-700" href={`tel:${CONTENT.contact.phone}`}>{CONTENT.contact.phone}</a></li>
                <li><span className="font-semibold text-slate-800">Email:</span> <a className="hover:text-sky-700" href={`mailto:${CONTENT.contact.email}`}>{CONTENT.contact.email}</a></li>
                <li><span className="font-semibold text-slate-800">Address:</span> {CONTENT.contact.address}</li>
                <li><span className="font-semibold text-slate-800">Hours:</span> {CONTENT.contact.hours}</li>
              </ul>

              {/* Appointment form */}
              <form className="mt-8 grid gap-4" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200" placeholder="Full name" required />
                  <input className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200" type="email" placeholder="Email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200" type="tel" placeholder="Phone" />
                  <input className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200" placeholder="Preferred date" />
                </div>
                <textarea className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring focus:ring-sky-200" rows="5" placeholder="Briefly describe your concern"></textarea>
                <button className="rounded-xl bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700 transition w-full sm:w-auto">Submit Request</button>
              </form>
            </div>

            <div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow">
                {CONTENT.contact.mapEmbedUrl ? (
                  <iframe
                    className="h-full w-full"
                    src={CONTENT.contact.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic location"
                  ></iframe>
                ) : (
                  <div className="h-full w-full grid place-items-center text-slate-500 p-6">
                    <p>Put your Google Maps embed URL in CONTENT.contact.mapEmbedUrl to show your location map here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  </main>
);

export default function App() {
    return (
      <div className="min-h-screen flex flex-col bg-white text-slate-800">
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