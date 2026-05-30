// Service catalog — the authoritative list of consulting offerings.
// Each entry powers both the Services page and the Home overview cards,
// and is referenced by slug in the Contact form's "service of interest" select.

export type Service = {
  slug: string;
  title: string;
  short: string;        // one-line summary for cards
  description: string;  // 2-4 sentence paragraph for the Services page
  idealFor: string;     // "Ideal for: ..." line for the Services page
  highlights: string[]; // 3-5 bullet deliverables / specifics
};

export const services: Service[] = [
  {
    slug: "tree-risk-assessment",
    title: "Tree Risk Assessment",
    short:
      "TRAQ based evaluation of likelihood of failure, targets, and consequences, with defensible mitigation options.",
    description:
      "A systematic, ISA TRAQ methodology assessment that examines each tree's structure, defects, site conditions, and the targets within striking distance. You receive a written report categorizing risk (low, moderate, high, extreme), the reasoning behind each rating, and tiered mitigation options ranging from monitoring to pruning, cabling, or removal.",
    idealFor:
      "Property managers, HOAs, municipalities, insurers, and owners of mature trees near homes, walkways, or play areas.",
    highlights: [
      "Individual tree risk ratings with photo documentation",
      "Targets and occupancy analysis",
      "Prioritized mitigation recommendations",
      "Reinspection interval recommendations",
    ],
  },
  {
    slug: "tree-health-diagnosis",
    title: "Tree Health & Diagnosis",
    short:
      "Field diagnosis of pests, pathogens, decline, and decay, with a clear, evidence based treatment plan.",
    description:
      "Trees in decline rarely have a single cause. We work through the differential, including soil and drainage, root health, pests, pathogens, prior wounds, and cultural practices, to identify what is actually driving the symptoms. The report explains findings in plain language and recommends targeted interventions, not blanket treatments.",
    idealFor:
      "Owners of declining specimen trees, properties with recurring tree health issues, or anyone who has been told to remove a tree and wants confirmation.",
    highlights: [
      "Site, soil, and root collar evaluation",
      "Pest and disease identification",
      "Decay assessment (visual and, where warranted, instrument assisted)",
      "Plain language treatment recommendations",
    ],
  },
  {
    slug: "tree-inventory-management-plans",
    title: "Tree Inventory & Management Plans",
    short:
      "Geolocated tree inventories and multiyear management plans for portfolios, campuses, and communities.",
    description:
      "A working document, not a one time deliverable. We inventory each tree with species, size, condition, and risk rating, then build a phased management plan that aligns with your budget cycle. Plans typically include pruning rotations, replacement strategy, species diversification targets, and storm readiness priorities.",
    idealFor:
      "HOAs, condominium associations, school and corporate campuses, municipalities, and large estates.",
    highlights: [
      "Geolocated tree inventory (CSV and GIS ready data)",
      "Condition, risk, and value per tree",
      "Multiyear, budgeted management plan",
      "Storm preparation and recovery protocols",
    ],
  },
  {
    slug: "municipal-consulting",
    title: "Municipal Consulting",
    short:
      "Capacity building support for public agency urban forestry programs: ordinances, SOPs, training, inventory strategy, permitting workflows, and program audits.",
    description:
      "Public agencies often need more than a single arborist report. They need the policy, procedure, and trained staff to manage trees consistently across an entire jurisdiction. We help cities, counties, and special districts build that capacity from the inside: drafting and revising ordinance language, writing the standard operating procedures that turn policy into routine practice, preparing staff for ISA certification, and auditing existing programs to find the gaps before a storm or a lawsuit does. Engagements draw on direct experience inside a major South Florida municipal urban forestry program.",
    idealFor:
      "Municipalities, counties, special districts, public works and parks and recreation departments, tree boards and urban forestry committees, and quasi public authorities (port, transit, and airport agencies).",
    highlights: [
      "Ordinance review and revision",
      "Standard operating procedure (SOP) development",
      "Staff training",
      "Tree inventory strategy",
      "Permitting workflow setup",
      "Staff certification preparation",
      "Urban forestry program audits",
    ],
  },
  {
    slug: "construction-development-consulting",
    title: "Construction & Development Consulting",
    short:
      "Tree protection plans, preconstruction assessments, and arborist reports for permitting and design review.",
    description:
      "Most tree losses on construction sites are preventable, and most happen before a single shovel hits the ground. We work alongside architects, landscape architects, civil engineers, and contractors during design to identify which trees can realistically be saved, what protection they require, and how site logistics need to adjust. Deliverables meet local permitting and tree preservation ordinance requirements.",
    idealFor:
      "Architects, landscape architects, civil engineers, developers, land use attorneys, general contractors, and private owners.",
    highlights: [
      "Preconstruction tree assessment and disposition table",
      "Tree Protection Plans and CRZ or TPZ delineation",
      "Permitting and ordinance compliant arborist reports",
      "Construction phase site visits and contractor briefings",
    ],
  },
  {
    slug: "tree-appraisal-valuation",
    title: "Tree Appraisal & Valuation",
    short:
      "Defensible monetary valuations for insurance claims, casualty loss, and litigation, following CTLA methodology.",
    description:
      "When a tree is damaged, removed without authorization, or lost to a covered event, the question becomes: what was it worth? We prepare appraisals using the Council of Tree and Landscape Appraisers (CTLA) Guide for Plant Appraisal, the methodology recognized by courts, insurers, and the IRS, and document the basis of value, condition adjustments, and depreciation in a report that holds up to scrutiny.",
    idealFor:
      "Property owners filing insurance claims, attorneys, adjusters, and CPAs handling casualty loss deductions.",
    highlights: [
      "CTLA methodology trunk formula and cost approaches",
      "Condition, location, and species ratings documented",
      "Written report suitable for insurance and tax filings",
      "Supporting photographs and market data",
    ],
  },
  {
    slug: "tree-preservation-mitigation",
    title: "Tree Preservation & Mitigation",
    short:
      "Hands on preservation strategy during active construction, including root zone protection, monitoring, and recovery care.",
    description:
      "When a tree worth saving is inside the work zone, preservation is an ongoing engagement, not a checkbox. We specify root zone protection measures, monitor compliance during construction, and prescribe postconstruction care to address compaction, root loss, and grade change. Where preservation is not feasible, we document mitigation per local ordinance.",
    idealFor:
      "Owners and contractors managing construction near significant trees, and projects subject to tree mitigation requirements.",
    highlights: [
      "Root zone protection specifications",
      "Construction phase monitoring visits",
      "Postconstruction recovery care plans",
      "Mitigation calculations and replacement specifications",
    ],
  },
  {
    slug: "second-opinions",
    title: "Second Opinions",
    short:
      "An independent review before you authorize removal or accept a costly treatment recommendation.",
    description:
      "A tree service that quotes removal is not impartial. It earns more from removal than from preservation. When the stakes are a mature, irreplaceable tree, a second opinion from a consultant who does not perform tree work is inexpensive insurance. We review the existing recommendation, inspect the tree, and tell you plainly whether removal is warranted, whether a less invasive option exists, or whether further investigation is needed.",
    idealFor:
      "Any owner facing a removal recommendation, a large estimate for treatment, or pressure to act quickly.",
    highlights: [
      "Independent inspection and written opinion",
      "Review of prior recommendations or estimates",
      "Identification of less invasive alternatives where appropriate",
      "No upsell. We do not perform removals or treatments.",
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
