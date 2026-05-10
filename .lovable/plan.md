## What's happening

Each case study URL already routes correctly (slug → unique entry in `caseStudies`), but the existing copy in `src/lib/case-studies.ts` is short and structurally near-identical across studies, which is why every page reads the same. The fix is a content update: replace each study's text with the detailed copy you provided.

## Plan

Update `src/lib/case-studies.ts` only — no UI/route changes needed. For each of the 5 studies, replace `title`, `tagline`, `focus`, `problem`, `insight`, `explored`, `direction`, `initiatives`, `outcomes`, `learning` with your supplied copy:

1. **zomato-retention** — "Designing Habit-Driven Food Delivery Retention for Tier-1 Users". Expanded problem (decision fatigue, delivery anxiety, weak habits, discount dependence), full explored list (6 items), strategic repositioning paragraph, 5 initiatives, 4 outcomes, learning.
2. **algs-learning** — "Adaptive Learning Guidance System (ALGS)". Full problem (5 user struggles), insight, 6 explored items, direction reframing "Which course?" → "What's the next step?", 3 outcomes, learning.
3. **zepto-basket** — "Reducing Decision Friction to Improve Basket Size on Zepto". Updated problem (4 user behaviors), insight, 5 explored items, expanded direction, 5 initiatives, 4 outcomes, learning.
4. **x-participation** — "Designing Participation & Habit Loops on X". Problem with 4 user pain points, insight, 6 explored items, expanded direction, 4 initiatives, 4 outcomes, learning.
5. **zepto-marketplace** — "Scaling a Hyperlocal Marketplace Expansion for Zepto". Problem with 5 balancing constraints, insight, 6 explored items, direction, 5 focus areas as initiatives, 4 outcomes, learning.

Existing `slug`, `product`, and `accent` color values are preserved so URLs and per-study color theming stay intact.

## Verification

After the edit, each `/work/<slug>` will render distinct hero title, tagline, focus tags, and all five sections (Problem / Insight pull-quote / Explored / Strategic direction + initiatives / Outcomes / Key learning) — proving content uniqueness across URLs.

## Out of scope

- No route, component, or styling changes.
- No new fields on the `CaseStudy` type (current schema already supports everything in your copy).
