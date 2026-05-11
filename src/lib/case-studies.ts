export type CaseStudy = {
  slug: string;
  product: string;
  title: string;
  tagline: string;
  focus: string[];
  problem: string;
  insight: string;
  explored: string[];
  direction: string;
  initiatives?: string[];
  outcomes: string[];
  learning: string;
  accent: string;
  proofOfWork?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zomato-retention",
    product: "Zomato",
    title: "Designing Habit-Driven Food Delivery Retention for Tier-1 Users",
    tagline: "Retention is a trust problem, not a discount problem.",
    focus: ["Retention", "Product Strategy", "Funnel Analysis", "User Behavior"],
    problem:
      "Food delivery in Tier-1 cities is highly competitive, but retention remains fragile. Users already have access to multiple apps, restaurants, and discounts, yet repeat ordering behavior remains inconsistent. The deeper issue was not lack of options — it was cognitive overload and delivery anxiety. Users faced decision fatigue during restaurant discovery, low confidence in delivery reliability, weak habit formation, and dependence on discounts for repeat usage.",
    insight:
      "Retention in food delivery is primarily a trust and decision-fatigue problem, not a discount problem.",
    explored: [
      "Intent-led personalized discovery",
      "Frictionless reordering systems",
      "Reliability-focused subscription models",
      "Predictable delivery experiences",
      "Confidence-based ETA systems",
      "Post-order trust loops",
    ],
    direction:
      "The strategy repositioned Zomato from a transactional ordering platform to a habitual utility focused on reducing mental effort and improving reliability.",
    initiatives: [
      "Intent-aware restaurant feeds",
      "One-tap reordering",
      "Reliability-first subscription benefits",
      "Faster issue resolution systems",
      "Occasion-based engagement triggers",
    ],
    outcomes: [
      "Increase 90-day retention",
      "Improve monthly order frequency",
      "Reduce delivery dissatisfaction",
      "Increase Orders per MAU",
    ],
    learning:
      "Habit formation in consumer products often depends more on predictability and trust than incentives.",
    accent: "oklch(0.65 0.22 25)",
  },
  {
    slug: "algs-learning",
    product: "Online Learning Platform",
    title: "Adaptive Learning Guidance System (ALGS)",
    tagline: "Guidance beats discovery when uncertainty is high.",
    focus: ["Recommendation Systems", "Engagement", "Learning Experience", "Product Systems"],
    problem:
      "Most online learning platforms optimize for content discovery rather than learner progression. While platforms offer abundant courses and recommendations, learners still disengage early and completion rates remain low. The challenge was not lack of content quality — it was uncertainty around what to learn next. Users struggled with choice overload, low confidence in course selection, unclear progression paths, skill mismatch between learner and course, and weak post-course momentum.",
    insight:
      "Learners disengage because they lack confidence in what to learn next, not because they lack content.",
    explored: [
      "Goal-based onboarding systems",
      "Adaptive recommendation systems",
      "Progression-led learning flows",
      "Trust-first personalization",
      "Recommendation transparency",
      "Completion-oriented guidance systems",
    ],
    direction:
      "Instead of treating recommendations as content ranking problems, the system reframed learning recommendations as progression guidance. The focus shifted from \"Which course is most relevant?\" to \"What is the best next step for this learner?\"",
    outcomes: ["+25% learner engagement", "+30% course completion", "+20% learner satisfaction"],
    learning:
      "Guidance systems outperform discovery systems when users face high uncertainty and long-term commitment decisions.",
    accent: "oklch(0.62 0.18 200)",
  },
  {
    slug: "zepto-basket",
    product: "Zepto",
    title: "Reducing Decision Friction to Improve Basket Size on Zepto",
    tagline: "Reduce cognitive effort to unlock basket growth.",
    focus: ["Consumer Behavior", "Conversion", "Growth", "AOV Strategy"],
    problem:
      "Quick-commerce users often optimize for speed and certainty rather than basket expansion. Despite high traffic and purchase intent, average order value remained constrained by fragmented buying behavior and decision fatigue. Users frequently purchased only urgent items, avoided browsing, dropped secondary purchases, and optimized for checkout speed.",
    insight: "Users optimize for certainty and convenience rather than basket completeness.",
    explored: [
      "Basket psychology",
      "Bundling systems",
      "Context-aware recommendations",
      "Frictionless add-on flows",
      "Decision simplification mechanisms",
    ],
    direction:
      "The strategy focused on increasing basket confidence rather than aggressively pushing upsells — building trust around what to add, not pressure to add more.",
    initiatives: [
      "Pre-configured need-based bundles",
      "High-intent recommendation timing",
      "Checkout-stage add-on optimization",
      "Simplified category grouping",
      "Context-aware cross-sell systems",
    ],
    outcomes: [
      "Increase AOV",
      "Improve add-to-cart behavior",
      "Increase basket completion",
      "Improve checkout conversion",
    ],
    learning:
      "Reducing cognitive effort often drives stronger monetization than increasing product visibility.",
    accent: "oklch(0.7 0.2 145)",
  },
  {
    slug: "x-participation",
    product: "X (Twitter)",
    title: "Designing Participation & Habit Loops on X",
    tagline: "An attention-to-habit conversion problem.",
    focus: ["Growth PM", "Activation", "Retention", "AARRR Funnel"],
    problem:
      "X has strong cultural distribution and high awareness, but struggles to consistently convert attention into long-term participation and habitual usage. The challenge was not acquisition — it was identity formation and sustained engagement. Many users consumed content passively, failed to build participation habits, felt unsafe contributing publicly, and experienced emotional fatigue.",
    insight: "X has an attention-to-habit conversion problem rather than an acquisition problem.",
    explored: [
      "Relevance lock-in systems",
      "Participation psychology",
      "Safe contribution loops",
      "Activation friction",
      "Habit formation mechanisms",
      "Community trust systems",
    ],
    direction:
      "The strategy focused on improving early feed relevance, confidence in participation, lightweight contribution loops, and habit-driven engagement systems.",
    initiatives: [
      "Relevance-based onboarding",
      "Low-risk interaction systems",
      "Participation reward loops",
      "Better contextual feed shaping",
    ],
    outcomes: [
      "Improve activation quality",
      "Increase repeat participation",
      "Improve user retention",
      "Increase contribution frequency",
    ],
    learning:
      "Users form habits faster when participation feels psychologically safe and immediately rewarding.",
    accent: "oklch(0.55 0.15 270)",
  },
  {
    slug: "zepto-marketplace",
    product: "Zepto Pet Grooming Marketplace",
    title: "Scaling a Hyperlocal Marketplace Expansion for Zepto",
    tagline: "Operational systems are product features.",
    focus: ["Marketplace Strategy", "Operations", "0→1 Products"],
    problem:
      "Expanding into hyperlocal services introduces operational complexity that traditional ecommerce systems do not face. The challenge was balancing supply reliability, scheduling complexity, service quality consistency, marketplace trust, and operational scalability.",
    insight:
      "Marketplace expansion success depends on operational reliability and service trust loops.",
    explored: [
      "Marketplace liquidity",
      "Supply-demand balancing",
      "Service coordination systems",
      "Operational workflows",
      "Customer trust mechanisms",
      "Expansion economics",
    ],
    direction: "The strategy prioritized operational reliability before aggressive expansion.",
    initiatives: [
      "Controlled geographic rollout",
      "Verified supply onboarding",
      "Scheduling optimization",
      "Service quality systems",
      "Trust and reliability signals",
    ],
    outcomes: [
      "Improve service reliability",
      "Increase repeat bookings",
      "Improve provider utilization",
      "Strengthen customer trust",
    ],
    learning: "Operational systems are product features in service marketplaces.",
    accent: "oklch(0.68 0.18 60)",
  },
];

export const experience = [
  {
    company: "HiRide",
    role: "Mobility Marketplace",
    summary:
      "Improved successful ride booking completion by ~28% through rider-driver matching optimization and trip lifecycle improvements. Increased onboarding conversion by ~35% through authentication and activation redesign. Implemented subscription-based monetization and engagement systems.",
  },
  {
    company: "Damroo",
    role: "Music Streaming Platform",
    summary:
      "Led migration from Ionic to React Native and backend transition from PHP to Node.js to improve scalability and streaming reliability. Optimized onboarding, engagement, and creator workflows to improve retention and listening behavior.",
  },
  {
    company: "TheBabyBo",
    role: "Multi-Vendor Ecommerce Marketplace",
    summary:
      "Improved seller activation through onboarding optimization and operational workflows. Redesigned browse-to-checkout flows to improve purchase conversion and marketplace efficiency.",
  },
  {
    company: "Fixpapa",
    role: "IT Workflow Platform",
    summary:
      "Built centralized workflow systems covering ticketing, assignment, tracking, inventory coordination, and lifecycle management. Reduced service resolution time and improved operational efficiency through workflow automation.",
  },
  {
    company: "Map My Startup",
    role: "AI Startup Roadmap Platform",
    summary:
      "Built AI-assisted roadmap systems helping startup founders simplify MVP planning, prioritization, and execution workflows. Designed conversational product-planning experiences for non-technical founders.",
  },
];

export const principles = [
  "Reduce decision friction before adding features.",
  "Build trust before monetization.",
  "Design for behavior, not feature quantity.",
  "Products should reduce uncertainty, not increase complexity.",
  "Retention is often a trust problem, not an acquisition problem.",
  "Simplicity is a product strategy.",
];

export const skills = {
  Product: [
    "Product Strategy",
    "Product Discovery",
    "Product Roadmapping",
    "PRDs",
    "User Research",
    "Funnel Analysis",
    "Product Analytics",
    "Agile & Scrum",
    "Sprint Planning",
    "Growth Strategy",
    "Retention Systems",
    "Marketplace Products",
    "SaaS Products",
  ],
  Tools: ["Jira", "Confluence", "Figma", "SQL", "Google Analytics"],
};
