export const partnerLogos = [
  "Samsung",
  "Infosys",
  "Razorpay",
  "PhonePe",
  "Freshworks",
  "HCLTech",
  "Capgemini",
  "Cognizant",
];

export const proofPoints = [
  {
    kicker: "Consultative",
    title: "Programs mapped to business goals",
    description:
      "We frame each learning engagement around role maturity, target outcomes, and the pace of change the organization is navigating.",
  },
  {
    kicker: "Cohort-led",
    title: "Delivery that balances rigor and momentum",
    description:
      "Live sessions, curated projects, office hours, and leadership visibility keep the experience practical without feeling fragmented.",
  },
  {
    kicker: "Measurable",
    title: "Stakeholder-friendly reporting",
    description:
      "Participation, completion, learner signals, and follow-up recommendations are packaged in a format enterprise teams can act on quickly.",
  },
];

export const programTracks = [
  {
    kicker: "Track 01",
    title: "Leadership capability academies",
    description:
      "For senior and emerging leaders building stronger strategic judgment, change leadership, and cross-functional execution.",
    highlights: [
      "Custom leadership pathways by level",
      "Facilitated peer cohorts and case discussions",
      "Executive sponsor checkpoints",
    ],
  },
  {
    kicker: "Track 02",
    title: "AI, data, and digital transformation",
    description:
      "For teams navigating new tooling, automation, AI literacy, and function-specific digital upskilling across the business.",
    highlights: [
      "Role-aware AI adoption journeys",
      "Data storytelling and decision-making modules",
      "Real use-case based assignments",
    ],
  },
  {
    kicker: "Track 03",
    title: "High-impact role cohorts",
    description:
      "For sales, product, operations, and customer-facing functions that need sharper performance in a compressed timeline.",
    highlights: [
      "Function-specific curriculum design",
      "Applied assessments and practical coaching",
      "Flexible virtual and blended delivery",
    ],
  },
];

export const workflowSteps = [
  {
    title: "Align on business goals",
    description:
      "We start with the capability gap, the audience, and the outcomes that matter to sponsors and managers.",
  },
  {
    title: "Design the learning architecture",
    description:
      "Curriculum, format, faculty mix, and delivery schedule are shaped around enterprise constraints and adoption goals.",
  },
  {
    title: "Deliver with high-touch support",
    description:
      "Cohort management, reminders, facilitation, and checkpoints keep participation consistent without heavy internal overhead.",
  },
  {
    title: "Close the loop with reporting",
    description:
      "Post-program insights, learner feedback, and next-step recommendations help teams make informed follow-on decisions.",
  },
];

export const capabilityGroups = [
  {
    title: "Program Specific",
    description:
      "Programs can be tailored by credential depth and structure, ranging from certificates to executive and post graduate certificate formats.",
    items: ["Certificate", "Executive", "Post Graduate Certificate"],
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
  },
  {
    title: "Industry Specific",
    description:
      "Learning paths can be contextualized to industry realities across technology, healthcare, retail, finance, education, and manufacturing.",
    items: [
      "IT",
      "Healthcare",
      "Retail",
      "Finance",
      "Education",
      "Manufacturing",
    ],
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
  },
  {
    title: "Topic Specific",
    description:
      "Programs can also be organized around focused capability themes such as machine learning, design, analytics, cybersecurity, and cloud.",
    items: [
      "Machine Learning",
      "Design",
      "Analytics",
      "Cybersecurity",
      "Cloud",
    ],
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
  },
  {
    title: "Level Specific",
    description:
      "Enterprise cohorts can be designed for senior leadership, mid-career professionals, or freshers depending on the target audience.",
    items: [
      "Senior Leadership",
      "Mid-Career Professionals",
      "Freshers",
    ],
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
  },
];

export const metrics = [
  {
    label: "Enterprise partners",
    value: "120+",
    detail:
      "Mocked signal for organizations supported across capability-building programs.",
  },
  {
    label: "Learners engaged",
    value: "35k+",
    detail:
      "A scale indicator that helps position credibility on the landing page.",
  },
  {
    label: "Program satisfaction",
    value: "94%",
    detail:
      "Sample outcome metric styled for quick scanning by decision-makers.",
  },
  {
    label: "Repeat engagements",
    value: "68%",
    detail:
      "A trust marker showing how enterprise relationships can deepen over time.",
  },
];

export const testimonials = [
  {
    name: "Ritika Malhotra",
    role: "L&D Lead, Growth-stage fintech",
    quote:
      "The experience felt thoughtful from discovery through reporting. Our leaders never felt like they were dropped into a generic course catalog.",
  },
  {
    name: "Vishal Menon",
    role: "HRBP, enterprise software company",
    quote:
      "The structure made it easy to explain value internally. Stakeholders could immediately see the link between the learning plan and business priorities.",
  },
  {
    name: "Ananya Rao",
    role: "Transformation office, global services firm",
    quote:
      "The strongest part was the delivery discipline. Communications, facilitation, and post-program summaries all felt polished and reliable.",
  },
];

export const faqs = [
  {
    question: "Can this be adapted for specific business units or functions?",
    answer:
      "Yes. The page and content structure were intentionally built around reusable data objects, so different business units, capability themes, and program variants can be swapped in without changing the layout system.",
  },
  {
    question: "Is the lead form connected to a real backend?",
    answer:
      "It currently posts to a mock Next.js API route that validates the payload and returns a success response. That keeps the implementation assignment-friendly while still demonstrating a real interaction flow.",
  },
  {
    question: "How close is this to the original reference site?",
    answer:
      "It is a partial clone inspired by the section flow, enterprise tone, and conversion structure of the reference. The implementation avoids direct template copying and makes some layout and visual decisions more intentional for the assignment.",
  },
  {
    question: "What would be the next improvement with more time?",
    answer:
      "The best next steps would be adding CMS-backed content, real analytics or lead storage, richer motion polish, and tighter visual parity with audited screenshots from the source page.",
  },
];
