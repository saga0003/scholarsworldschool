// Central content source for the Scholars' School website.
// All facts (names, contacts, affiliation, addresses) are taken from the
// original site; copy is marketing-polished, typo-free and deliberately SHORT —
// the site is image-led, so text stays minimal.

export const SCHOOL = {
  name: "Scholars'",
  fullName: "Scholars' School, Hassan",
  tagline: "Infinite potential…",
  trust: "An Initiative of Puttu Education Trust (R)",
  affiliation: "Affiliated to CISCE, New Delhi | KA495",
  phone: "+91 81722 65608",
  phoneHref: "tel:+918172265608",
  email: "infoscholars@gmail.com",
  emailTop: "infoscholars@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/TheScholarsWorldSchool/",
    youtube:
      "https://youtube.com/@thescholarsworldschoolhass1743?si=NadAMSxDzH4Hqmbg",
    instagram: "https://www.instagram.com/thescholars_hassan/",
  },
  campuses: [
    {
      id: "mahalakshmi",
      name: "Mahalakshmi Layout Campus",
      address:
        "Mahalakshmi Layout, Saligrama Road, Hassan, Karnataka 573201",
      phone: "+91 81722 65608",
      phoneHref: "tel:+918172265608",
      email: "infoscholars@gmail.com",
      hours: "Mon – Sat · 8:30 AM – 4:00 PM",
    },
    {
      id: "northern",
      name: "Northern Extension Campus",
      address:
        "Puttu Education Trust (R), Northern Extension, Hassan, Karnataka 573201",
      phone: "+91 81722 65608",
      phoneHref: "tel:+918172265608",
      email: "feedbackscholars@gmail.com",
      hours: "Mon – Sat · 8:30 AM – 4:00 PM",
    },
  ],
};

// ---------- Navigation (route-based, mirrors the original site structure) ----------
export type NavChild = { label: string; href: string; note?: string };
export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", note: "Our story & mission" },
      {
        label: "Secretary's Message",
        href: "/leadership/secretary",
        note: "Dr. Chandrashekar",
      },
      { label: "Principal's Message", href: "/leadership/principal" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Montessori", href: "/academics/montessori", note: "Early years" },
      { label: "Primary School", href: "/academics/primary", note: "Foundations" },
      { label: "Higher Primary", href: "/academics/higher-primary", note: "Middle years" },
      { label: "High School", href: "/academics/high-school", note: "Senior years" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery", note: "Life in frames" },
      { label: "Videos", href: "/gallery/videos", note: "Watch us move" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// ---------- Home hero ----------
export const HERO_SLIDES = [
  {
    image: "/images/hero-campus.jpg",
    eyebrow: "Welcome to Scholars'",
    pre: "Where",
    highlight: "Infinite Potential",
    post: "Takes Root",
    subtitle:
      "Italian-style Montessori blended with the rigour of the ICSE syllabus — across two thriving campuses in Hassan.",
    primaryCta: { label: "Begin Admission", href: "/apply" },
    secondaryCta: { label: "Explore Our World", href: "/about" },
  },
  {
    image: "/images/about-students.jpg",
    eyebrow: "Learning That Celebrates",
    pre: "Joy, Confidence &",
    highlight: "Curiosity",
    post: "Every Single Day",
    subtitle:
      "From the first classroom step to the final board exam, our educators champion every child's unique strengths.",
    primaryCta: { label: "See Our Programs", href: "/academics" },
    secondaryCta: { label: "Visit Our Campus", href: "/contact" },
  },
  {
    image: "/images/trust-event.jpg",
    eyebrow: "A Legacy of Trust",
    pre: "Guided by the",
    highlight: "Puttu Education Trust",
    post: "(R)",
    subtitle:
      "Built on decades of community trust, Scholars' shapes well-rounded individuals ready for an ever-changing world.",
    primaryCta: { label: "Apply Online", href: "/apply" },
    secondaryCta: { label: "Our Mission", href: "/about" },
  },
];

export const TRUST_CHIPS = [
  { value: "2", label: "Campuses in Hassan" },
  { value: "4", label: "Learning Stages" },
  { value: "6+", label: "Flagship Facilities" },
  { value: "∞", label: "Infinite Potential" },
];

export const ANNOUNCEMENTS = [
  "Admissions open for the new academic year — limited seats across all programs",
  "Italian-style Montessori blended with the ICSE syllabus",
  "Smart classrooms, labs, library & safe bus transport across Hassan",
  "Visit our Mahalakshmi Layout or Northern Extension campus",
];

// ---------- Programs (one dedicated page each) ----------
export type Program = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  headline: string;
  href: string;
  heroImage: string;
  collageImage: string;
  intro: string;
  chips: string[];
  images: { src: string; alt: string }[];
};

export const PROGRAMS: Program[] = [
  {
    id: "montessori",
    label: "Montessori",
    kicker: "Early Years",
    title: "Italian-Style Montessori",
    headline: "Where curiosity meets learning",
    href: "/academics/montessori",
    heroImage: "/images/gallery-9.jpg",
    collageImage: "/images/program-montessori.jpg",
    intro:
      "An inspiring, hands-on start to education — children learn through self-directed discovery in beautifully prepared environments.",
    chips: [
      "Self-directed learning",
      "Curated Montessori materials",
      "Personalised pace",
      "Independence & respect",
    ],
    images: [
      { src: "/images/gallery-9.jpg", alt: "Practising with knobbed cylinders" },
      { src: "/images/gallery-6.jpg", alt: "Building the pink tower, layer by layer" },
      { src: "/images/gallery-13.jpg", alt: "Matching sandpaper letters" },
      { src: "/images/gallery-19.jpg", alt: "Mastering the dressing frame" },
      { src: "/images/gallery-5.jpg", alt: "Working with a tree puzzle" },
      { src: "/images/gallery-3.jpg", alt: "Hands-on learning with picture cards" },
    ],
  },
  {
    id: "primary",
    label: "Primary School",
    kicker: "Foundational Years",
    title: "Primary School",
    headline: "Strong foundations, joyful beginnings",
    href: "/academics/primary",
    heroImage: "/images/hero-campus.jpg",
    collageImage: "/images/program-primary.jpg",
    intro:
      "The foundational stage where children build core skills in language, mathematics, science and social life — with joy.",
    chips: [
      "Strong core foundations",
      "Thinking & collaboration",
      "Interactive lessons",
      "Confidence that grows",
    ],
    images: [
      { src: "/images/gallery-2.jpg", alt: "Learning through sequencing materials" },
      { src: "/images/gallery-16.jpg", alt: "Exploring letters and words" },
      { src: "/images/hero-campus.jpg", alt: "Our welcoming campus" },
      { src: "/images/gallery-4.jpg", alt: "Discovery with visual learning materials" },
    ],
  },
  {
    id: "higher-primary",
    label: "Higher Primary",
    kicker: "Middle School",
    title: "Higher Primary",
    headline: "Growing into independent thinkers",
    href: "/academics/higher-primary",
    heroImage: "/images/about-students.jpg",
    collageImage: "/images/program-higherprimary.jpg",
    intro:
      "A pivotal stage where learners refine their skills, explore new subjects and develop a clearer sense of who they are.",
    chips: [
      "Challenging curriculum",
      "Independent thinking",
      "Self-expression & teamwork",
      "High-school ready",
    ],
    images: [
      { src: "/images/about-students.jpg", alt: "Students growing together" },
      { src: "/images/gallery-14.jpg", alt: "Focused, hands-on practice" },
      { src: "/images/gallery-10.jpg", alt: "Precision and concentration" },
      { src: "/images/trust-event.jpg", alt: "Celebrating milestones as one school" },
    ],
  },
  {
    id: "high-school",
    label: "High School",
    kicker: "Senior Years",
    title: "High School",
    headline: "From learners to leaders",
    href: "/academics/high-school",
    heroImage: "/images/trust-event.jpg",
    collageImage: "/images/program-highschool.jpg",
    intro:
      "A defining chapter where intellectual rigour meets real-world readiness — every class a step toward the future.",
    chips: [
      "Advanced academics",
      "Strengths discovery",
      "Character & leadership",
      "Life-ready skills",
    ],
    images: [
      { src: "/images/trust-event.jpg", alt: "Proud moments on stage" },
      { src: "/images/gallery-18.jpg", alt: "Care, focus and craftsmanship" },
      { src: "/images/hero-campus.jpg", alt: "Campus life at Scholars'" },
      { src: "/images/about-students.jpg", alt: "Learning side by side" },
    ],
  },
];

// ---------- Facilities ----------
export const FACILITIES = [
  {
    icon: "MonitorSmartphone",
    title: "Smart Classrooms",
    desc: "Bright, technology-enabled spaces with interactive tools that bring every lesson to life.",
  },
  {
    icon: "LibraryBig",
    title: "Library",
    desc: "A treasure of books and resources in a serene environment for learning and exploration.",
  },
  {
    icon: "FlaskConical",
    title: "Laboratories",
    desc: "Safe, well-equipped spaces for experiments, research and hands-on discovery.",
  },
  {
    icon: "Cpu",
    title: "Computer Labs",
    desc: "Modern systems for educational software, projects and digital skills.",
  },
  {
    icon: "Trophy",
    title: "Playground",
    desc: "Open, energetic spaces where play builds fitness, skill and teamwork.",
  },
  {
    icon: "BusFront",
    title: "Bus Facilities",
    desc: "Safe, reliable transportation across Hassan for an easy everyday commute.",
  },
];

export const FACILITY_STRIP = [
  { src: "/images/hero-campus.jpg", alt: "Our campus buildings and grounds" },
  { src: "/images/gallery-12.jpg", alt: "Focused classroom practice" },
  { src: "/images/gallery-8.jpg", alt: "Hands-on learning materials" },
  { src: "/images/gallery-20.jpg", alt: "Joyful everyday moments" },
];

export const WHY_US = [
  {
    icon: "Infinity",
    title: "Montessori × ICSE Blend",
    desc: "Independence in early years, academic rigour for life.",
  },
  {
    icon: "HeartHandshake",
    title: "Every Child Known",
    desc: "Personal attention from caring educators.",
  },
  {
    icon: "Sparkles",
    title: "Holistic Development",
    desc: "Arts, music, technology and sport alongside academics.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe & Supportive",
    desc: "Secure campuses and reliable transport.",
  },
  {
    icon: "Lightbulb",
    title: "Life-Ready Skills",
    desc: "Resilience, empathy, curiosity, leadership.",
  },
  {
    icon: "Users",
    title: "School–Family Partnership",
    desc: "Parents are partners in every step.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The blend of Montessori and ICSE has helped our child grow academically and personally. The teachers are caring, and our child is thriving.",
    authors: "Priya & Sanjay M.",
  },
  {
    quote:
      "A wonderful balance of academics and creativity. Our daughter is more independent and confident — we couldn't be happier.",
    authors: "Maya & Rahul T.",
  },
  {
    quote:
      "The nurturing environment and strong academic foundation have helped our daughter flourish. She looks forward to school every day!",
    authors: "Jessica & Anil P.",
  },
  {
    quote:
      "The personalised attention has made all the difference. Our son loves learning, and we've seen huge growth in his confidence.",
    authors: "Samantha & Rajesh K.",
  },
];

// ---------- Gallery (real photos from school life) ----------
export const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Matching picture cards with focus" },
  { src: "/images/gallery-2.jpg", alt: "Learning through sequencing materials" },
  { src: "/images/gallery-3.jpg", alt: "Hands-on learning with picture cards" },
  { src: "/images/gallery-4.jpg", alt: "Discovery with visual materials" },
  { src: "/images/gallery-5.jpg", alt: "Working with a tree puzzle" },
  { src: "/images/gallery-6.jpg", alt: "Building the pink tower" },
  { src: "/images/gallery-7.jpg", alt: "Matching leaf puzzle pieces" },
  { src: "/images/gallery-8.jpg", alt: "Reaching for the next pink tower cube" },
  { src: "/images/gallery-9.jpg", alt: "Practising knobbed cylinders" },
  { src: "/images/gallery-10.jpg", alt: "Placing each cylinder with care" },
  { src: "/images/gallery-12.jpg", alt: "Focused classroom practice" },
  { src: "/images/gallery-13.jpg", alt: "Matching sandpaper letters" },
  { src: "/images/gallery-14.jpg", alt: "Tracing letters by touch" },
  { src: "/images/gallery-16.jpg", alt: "Exploring letters and words" },
  { src: "/images/gallery-18.jpg", alt: "Working with the dressing frame" },
  { src: "/images/gallery-19.jpg", alt: "Fastening the dressing frame" },
  { src: "/images/gallery-20.jpg", alt: "Joyful everyday moments" },
];

export const GALLERY_COVER = "/images/gallery-12.jpg";

export const HOME_GALLERY_PREVIEW = [
  GALLERY_IMAGES[8],
  GALLERY_IMAGES[5],
  GALLERY_IMAGES[11],
  GALLERY_IMAGES[15],
  GALLERY_IMAGES[3],
  GALLERY_IMAGES[12],
  GALLERY_IMAGES[16],
  GALLERY_IMAGES[2],
];

// ---------- Footer ----------
export const FOOTER_QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Montessori", href: "/academics/montessori" },
  { label: "Primary School", href: "/academics/primary" },
  { label: "Higher Primary", href: "/academics/higher-primary" },
  { label: "High School", href: "/academics/high-school" },
  { label: "Facilities", href: "/facilities" },
  { label: "Apply Online", href: "/apply" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];
