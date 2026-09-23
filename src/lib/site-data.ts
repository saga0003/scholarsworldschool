export const SCHOOL = {
  name: "Scholars'",
  fullName: "Scholars' School, Hassan",
  tagline: "Infinite potential…",
  trust: "An Initiative of Puttu Education Trust (R)",
  affiliation: "Affiliated to CISCE, New Delhi | KA495",
  phone: "+91 81722 65608",
  phoneHref: "tel:+918172265608",
  email: "infoscholars@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/TheScholarsWorldSchool/",
    youtube: "https://youtube.com/@thescholarsworldschoolhass1743",
    instagram: "https://www.instagram.com/thescholars_hassan/",
  },
  campuses: [
    { name: "Mahalakshmi Layout Campus", address: "Mahalakshmi Layout, Saligrama Road, Hassan, Karnataka 573201" },
    { name: "Northern Extension Campus", address: "Puttu Education Trust (R), Northern Extension, Hassan, Karnataka 573201" },
  ],
};

export type NavChild = { label: string; href: string; note?: string };
export type NavLink = { label: string; href: string; children?: NavChild[] };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", note: "Our story & mission" },
      { label: "Secretary's Message", href: "/leadership/secretary", note: "Leadership message" },
      { label: "Principal's Message", href: "/leadership/principal", note: "From the Principal" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Montessori", href: "/academics/montessori", note: "Early years" },
      { label: "Primary School", href: "/academics/primary", note: "Foundational years" },
      { label: "Higher Primary", href: "/academics/higher-primary", note: "Middle school" },
      { label: "High School", href: "/academics/high-school", note: "Senior years" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery", note: "Life in frames" },
      { label: "Videos", href: "/gallery/videos", note: "Watch campus life" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  { image: "https://scholarshassan.com/img/home-welcome.jpg", eyebrow: "Welcome to Scholars'", pre: "Where", highlight: "Infinite Potential", post: "Takes Root", subtitle: "Italian-style Montessori blended with the rigour of the ICSE syllabus — across two thriving campuses in Hassan.", primaryCta: { label: "Begin Admission", href: "/apply" }, secondaryCta: { label: "Explore Our World", href: "/about" } },
  { image: "https://scholarshassan.com/img/abt%20us.jpg", eyebrow: "Learning That Celebrates", pre: "Joy, Confidence &", highlight: "Curiosity", post: "Every Single Day", subtitle: "From the first classroom step to the final board exam, our educators champion every child's unique strengths.", primaryCta: { label: "See Our Programs", href: "/academics" }, secondaryCta: { label: "Visit Our Campus", href: "/contact" } },
  { image: "https://scholarshassan.com/img/Mission.JPG", eyebrow: "A Legacy of Trust", pre: "Guided by the", highlight: "Puttu Education Trust", post: "(R)", subtitle: "Built on decades of community trust, Scholars' shapes well-rounded individuals ready for an ever-changing world.", primaryCta: { label: "Apply Online", href: "/apply" }, secondaryCta: { label: "Our Mission", href: "/about" } },
];

export const ANNOUNCEMENTS = [
  "Admissions open for the new academic year — limited seats across all programs",
  "Italian-style Montessori blended with the ICSE syllabus",
  "Smart classrooms, labs, library & safe bus transport across Hassan",
];

export const PROGRAMS = [
  { id: "montessori", label: "Montessori", kicker: "Early Years", headline: "Where curiosity meets learning", href: "/academics/montessori", intro: "An inspiring, hands-on start to education with self-directed discovery in beautifully prepared environments.", collageImage: "https://scholarshassan.com/img/montes.png", images: [{src:"https://scholarshassan.com/img/9.png",alt:"Montessori classroom learning"},{src:"https://scholarshassan.com/img/6.png",alt:"Hands-on Montessori materials"}] },
  { id: "primary", label: "Primary School", kicker: "Foundational Years", headline: "Strong foundations, joyful beginnings", href: "/academics/primary", intro: "Children build core skills in language, mathematics, science and social life — with joy and confidence.", collageImage: "https://scholarshassan.com/img/primarysch.png", images: [{src:"https://scholarshassan.com/img/home-welcome.jpg",alt:"Primary school campus"},{src:"https://scholarshassan.com/img/2.png",alt:"Primary learning activity"}] },
  { id: "higher-primary", label: "Higher Primary", kicker: "Middle School", headline: "Growing into independent thinkers", href: "/academics/higher-primary", intro: "Learners refine their skills, explore new subjects and develop a clearer sense of who they are.", collageImage: "https://scholarshassan.com/img/higherpri.png", images: [{src:"https://scholarshassan.com/img/abt%20us.jpg",alt:"Students learning together"},{src:"https://scholarshassan.com/img/14.png",alt:"Focused classroom practice"}] },
  { id: "high-school", label: "High School", kicker: "Senior Years", headline: "From learners to leaders", href: "/academics/high-school", intro: "A defining chapter where intellectual rigour meets real-world readiness and character development.", collageImage: "https://scholarshassan.com/img/highschool.png", images: [{src:"https://scholarshassan.com/img/Mission.JPG",alt:"School achievement event"},{src:"https://scholarshassan.com/img/18.png",alt:"Focused learning"}] },
];

export const WHY_US = [
  { icon: "Infinity", title: "Montessori × ICSE Blend", desc: "Independence in early years, academic rigour for life." },
  { icon: "HeartHandshake", title: "Every Child Known", desc: "Personal attention from caring educators." },
  { icon: "Sparkles", title: "Holistic Development", desc: "Arts, technology and sport alongside academics." },
  { icon: "ShieldCheck", title: "Safe & Supportive", desc: "Secure campuses and reliable transport." },
];

export const FACILITIES = [
  { icon: "MonitorSmartphone", title: "Smart Classrooms", desc: "Technology-enabled spaces that make lessons engaging." },
  { icon: "LibraryBig", title: "Library", desc: "A calm, resource-rich space for reading and discovery." },
  { icon: "FlaskConical", title: "Laboratories", desc: "Well-equipped spaces for experiments and research." },
  { icon: "Cpu", title: "Computer Labs", desc: "Digital learning, projects and practical technology skills." },
  { icon: "Trophy", title: "Playground", desc: "Open spaces where play builds fitness and teamwork." },
  { icon: "BusFront", title: "Bus Facilities", desc: "Safe, reliable transportation across Hassan." },
];

export const TESTIMONIALS = [
  { quote: "The blend of Montessori and ICSE has helped our child grow academically and personally.", authors: "Priya & Sanjay M." },
  { quote: "A wonderful balance of academics and creativity. Our daughter is more independent and confident.", authors: "Maya & Rahul T." },
  { quote: "The nurturing environment and strong academic foundation have helped our daughter flourish.", authors: "Jessica & Anil P." },
];

export const GALLERY_IMAGES = [1,2,3,4,5,6,7,8,9,10,12,13,14,16,18,19,20].map((n) => ({ src: `https://scholarshassan.com/img/${n}.png`, alt: `Life at Scholars' School — ${n}` }));
export const HOME_GALLERY_PREVIEW = [GALLERY_IMAGES[8],GALLERY_IMAGES[5],GALLERY_IMAGES[11],GALLERY_IMAGES[15],GALLERY_IMAGES[3],GALLERY_IMAGES[12],GALLERY_IMAGES[16],GALLERY_IMAGES[2]];
