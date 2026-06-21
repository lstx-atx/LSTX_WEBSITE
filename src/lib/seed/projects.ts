import type { Project } from '../types';

// Built-in portfolio. Mirrors the prototype's five projects + case studies.
// Real photography drops into `heroImageUrl` / media[].imageUrl (or Sanity)
// later; until then the color-aware "after dark" placeholders carry the look.
export const seedProjects: Project[] = [
  // ----------------------------------------------------------------- Ways2Well
  {
    slug: 'ways2well',
    title: 'Ways2Well',
    badge: 'Commercial',
    category: 'commercial',
    location: 'Hill Country, TX',
    locationMeta: 'RGBW Facade',
    projectType: 'Commercial Architectural',
    system: 'RGBW · Colorscaping®',
    detailBase: 'case-studies',
    excerpt:
      'Dynamic RGBW washes in blue, purple, and magenta sweep the facade; green LED accents trace the ramps and handrails; an illuminated fountain anchors the courtyard. Turnkey, brand-forward, every evening of the week.',
    heroNight: { glow: '30% 60%', c1: 'rgba(46,86,200,0.5)', glow2: '74% 40%', c2: 'rgba(193,59,143,0.46)' },
    cardNight: { glow: '30% 70%', c1: 'rgba(46,86,200,0.48)', glow2: '74% 30%', c2: 'rgba(193,59,143,0.42)' },
    heroImageUrl: '/media/projects/ways2well/ways2well-facade-blue.jpg',
    lead: 'Ways2Well wanted its Hill Country facility to make a statement, and Lighting Source TX delivered a complete commercial architectural lighting system to do it.',
    intro: {
      heading: 'A Brand That Glows After Dark',
      body: 'Dynamic RGBW washes in blue, purple, and magenta sweep across the building’s facade, while integrated green LED accent lighting traces the ramps and handrails for both safety and dramatic effect. At the center of the property, an illuminated fountain anchors the courtyard as a glowing focal point.',
    },
    mediaLayout: 'gallery',
    media: [
      {
        label: 'Facade · Blue & Purple',
        imageUrl: '/media/projects/ways2well/ways2well-facade-blue.jpg',
        alt: 'Commercial building facade at night lit with blue and purple color-changing light, with US and Texas flags out front.',
      },
      {
        label: 'Facade · Magenta & Purple',
        imageUrl: '/media/projects/ways2well/ways2well-facade-magenta.jpg',
        alt: 'Commercial facility exterior washed in magenta and purple light at night.',
      },
      {
        label: 'Branded Glass Entry',
        imageUrl: '/media/projects/ways2well/ways2well-branded-entry.jpg',
        alt: 'Glass building entrance at night with the Ways2Well "W" logo, lit with color-changing architectural light.',
      },
      {
        label: 'Green LED · Ramps & Handrails',
        imageUrl: '/media/projects/ways2well/ways2well-green-ramps.jpg',
        alt: 'Exterior ramp and handrails lit with green LED accent lighting at night.',
      },
      {
        label: 'Cool Blue Scene',
        imageUrl: '/media/projects/ways2well/ways2well-blue-scene.jpg',
        alt: 'Commercial building exterior lit entirely in blue light at night.',
      },
    ],
    specs: [
      { value: 'RGBW', label: 'Dynamic Facade Washes' },
      { value: 'LED', label: 'Green Ramp & Handrail Accents' },
      { value: 'Fountain', label: 'Illuminated Courtyard Feature' },
      { value: 'Wireless', label: 'Brand- & Event-Ready Scenes' },
    ],
    body: [
      {
        heading: 'Built On Colorscaping®',
        body: 'The system is built on the same Colorscaping® color-control platform behind our most demanding projects, letting Ways2Well shift scenes for branding moments, events, or seasons from a simple wireless controller. From facade to fountain to handrail, this is turnkey commercial lighting that elevates the architecture and amplifies the brand, every evening of the week.',
      },
    ],
    capabilities: [
      'Commercial architectural lighting design and installation',
      'Dynamic RGBW facade washes (blue, purple, magenta)',
      'Integrated green LED ramp and handrail accent lighting',
      'Illuminated courtyard fountain feature',
      'Colorscaping® wireless color-control platform',
      'Brand- and event-ready programmable scenes',
    ],
    partners: ['WAC Lighting', 'Colorscaping® by WAC'],
    isCaseStudy: true,
    caseStudyOrder: 1,
    metric: { big: 'RGBW', label: 'Facade, Fountain & Handrail System' },
    featured: true,
    featuredOrder: 1,
    featuredBlurb:
      'Dynamic RGBW facade washes, green LED-traced ramps, and an illuminated courtyard fountain turn a business facility into a brand-forward landmark.',
    featuredLinkLabel: 'View Case Study',
    order: 1,
    cta: {
      eyebrow: 'Worth Telling',
      heading: 'Want Your Brand To Glow After Dark?',
      body: 'Tell us about the property. We will walk it with you.',
      estimatorType: 'commercial',
    },
    seo: {
      title: 'Ways2Well — Lighting Source TX',
      description:
        'A Hill Country commercial facility turned into a brand-forward landmark — dynamic RGBW facade washes, green LED-accented ramps, and an illuminated courtyard fountain.',
    },
  },

  // --------------------------------------------------------------- Stardust Ranch
  {
    slug: 'stardust-ranch',
    title: 'Stardust Ranch',
    badge: 'Landscape',
    category: 'landscape',
    location: 'Texas Hill Country',
    locationMeta: 'Estate',
    projectType: 'Estate Landscape',
    system: 'Colorscaping® by WAC',
    detailBase: 'projects',
    excerpt:
      'A sweeping Hill Country estate made the centerpiece after dark — heritage live oaks uplit in warm white, gazebo, pool, and structures layered into one continuous composition across the grounds.',
    heroNight: { glow: '40% 72%', c1: 'rgba(240,210,150,0.42)', glow2: '70% 38%', c2: 'rgba(204,120,40,0.28)' },
    cardNight: { glow: '40% 72%', c1: 'rgba(240,210,150,0.42)', glow2: '70% 38%', c2: 'rgba(204,120,40,0.28)' },
    heroImageUrl: '/media/projects/stardust-ranch/stardust-hero.jpg',
    lead: 'A signature Lighting Source TX landscape project — a sweeping Hill Country estate where the goal was to make the land itself the centerpiece after dark.',
    intro: {
      heading: 'The Property',
      body: 'Working across the grounds, our team designed and installed a layered architectural and landscape lighting system that draws the eye from the gazebo and pool out to the property’s mature live oaks. Massive heritage oaks are uplit in rich, warm white that reveals every limb and leaf canopy, while the gazebo, pool surround, and ranch structures receive their own balanced accent treatment.',
    },
    mediaLayout: 'stack',
    media: [
      {
        label: 'Estate grounds · oaks & structures',
        imageUrl: '/media/projects/stardust-ranch/stardust-grounds-1.jpg',
        alt: 'Large live oak trees uplit in warm white on a Hill Country estate at night with a ranch building to the side.',
      },
      {
        label: 'Grounds · driveway & buildings',
        imageUrl: '/media/projects/stardust-ranch/stardust-grounds-2.jpg',
        alt: 'Wide nighttime view of Hill Country ranch grounds with uplit oak trees, illuminated buildings, and a driveway.',
      },
      {
        label: 'Heritage oaks in warm white',
        imageUrl: '/media/projects/stardust-ranch/stardust-grounds-3.jpg',
        alt: 'Two large live oak trees uplit in warm white at night with a ranch building behind them.',
      },
    ],
    quote: {
      text: 'Depth and dimension — a property that reads as one continuous, intentional composition rather than a scatter of fixtures.',
      source: '— Lighting Source TX',
    },
    capabilities: [
      'Large-scale landscape and architectural lighting design',
      'Warm-white uplighting on heritage live oaks',
      'Gazebo, pool, and structure accent lighting',
      'Layered, full-property nighttime composition',
      'Turnkey design, installation, aiming, and control programming',
    ],
    partners: ['WAC Lighting', 'Colorscaping® by WAC'],
    isCaseStudy: true,
    caseStudyOrder: 3,
    metric: { big: 'Estate', label: 'Full-Property Landscape Scheme' },
    featured: true,
    featuredOrder: 2,
    featuredBlurb:
      'Heritage live oaks uplit in warm white, with the gazebo, pool, and ranch structures layered into one continuous nighttime composition.',
    featuredLinkLabel: 'View Project',
    order: 2,
    cta: {
      eyebrow: 'Worth Telling',
      heading: 'Have Grounds Worth Lighting?',
      body: 'Tell us about the property. We will walk it with you.',
      estimatorType: 'landscape',
    },
    seo: {
      title: 'Stardust Ranch — Lighting Source TX',
      description:
        'A sweeping Texas Hill Country estate transformed into a nighttime destination — heritage live oaks uplit in warm white with layered landscape and architectural lighting.',
    },
  },

  // -------------------------------------------------------- Sts. Peter & Paul Church
  {
    slug: 'sts-peter-paul',
    title: 'Sts. Peter & Paul Catholic Church',
    badge: 'Architectural',
    category: 'architectural',
    location: 'New Braunfels, TX',
    locationMeta: 'RGBW Facade',
    projectType: 'Architectural Facade',
    system: 'RGBW · Colorscaping®',
    detailBase: 'case-studies',
    excerpt:
      'A historic stone facade given a full-color Colorscaping® system — warm white for ordinary time, liturgical purple and red, festive red and green, patriotic red-white-and-blue. One install, limitless scenes.',
    heroNight: { spectrum: true },
    cardNight: { spectrum: true },
    heroImageUrl: '/media/projects/sts-peter-paul/church-purple.jpg',
    lead: 'The historic stone facade of Sts. Peter and Paul is a community landmark — and Lighting Source TX gave it a lighting system as versatile as the calendar it serves.',
    intro: {
      heading: 'One Facade, Endless Occasions',
      body: 'Using a full-color RGBW Colorscaping® system, the church can dress its architecture for any moment: serene warm white for ordinary time, deep purple and red for the liturgical seasons, festive red and green at Christmas, and red-white-and-blue for patriotic holidays. Beyond the facade, accent lighting highlights the interior dome — a Good Friday display that drew hundreds of engagements online.',
    },
    mediaLayout: 'gallery',
    media: [
      {
        label: 'Warm White · Everyday',
        imageUrl: '/media/projects/sts-peter-paul/church-warm-white.jpg',
        alt: 'Historic stone Catholic church facade at night lit in warm white light, highlighting the steeple and arched entry.',
      },
      {
        label: 'Deep Red',
        imageUrl: '/media/projects/sts-peter-paul/church-red.jpg',
        alt: 'Stone Catholic church facade illuminated entirely in red light at night.',
      },
      {
        label: 'Cool Blue',
        imageUrl: '/media/projects/sts-peter-paul/church-blue.jpg',
        alt: 'Stone Catholic church facade washed in blue light against a dark night sky.',
      },
      {
        label: 'Christmas Red & Green',
        imageUrl: '/media/projects/sts-peter-paul/church-christmas.jpg',
        alt: 'Stone church facade illuminated in alternating red and green Christmas lighting at night.',
      },
      {
        label: 'Patriotic Red, White & Blue',
        imageUrl: '/media/projects/sts-peter-paul/church-patriotic.jpg',
        alt: 'Church facade lit in red, white, and blue light sections for a patriotic display.',
      },
    ],
    specs: [
      { value: 'RGBW', label: 'Full-Color Facade System' },
      { value: '2.4GHz', label: 'Wireless Color Control' },
      { value: '∞', label: 'Programmable Presets' },
      { value: 'Turnkey', label: 'Fixtures · Pavers · Commissioning' },
    ],
    body: [
      {
        heading: 'What We Handled',
        body: 'Our crew handled the full scope on site, from fixture placement and paver work to commissioning the wireless color-control system. The result is a single, durable installation that lets the parish change the mood of its sanctuary at the touch of a button.',
      },
    ],
    capabilities: [
      'Full-color RGBW (Colorscaping®) architectural facade lighting',
      'Programmable scenes: liturgical, seasonal, and patriotic',
      'Warm-white "everyday" preset plus unlimited color options',
      'Interior dome and architectural accent lighting',
      '2.4GHz wireless color control, app/remote driven',
      'Complete on-site install: fixtures, paver work, commissioning',
    ],
    partners: ['WAC Lighting', 'Colorscaping® by WAC'],
    isCaseStudy: true,
    caseStudyOrder: 2,
    metric: { big: '∞', label: 'Programmable Scenes — One Wireless System' },
    featured: true,
    featuredOrder: 3,
    featuredBlurb:
      'A historic stone facade on a full-color RGBW system — warm white for everyday reverence, liturgical and seasonal color at the touch of a button.',
    featuredLinkLabel: 'View Case Study',
    order: 3,
    cta: {
      eyebrow: 'Worth Telling',
      heading: 'Have Architecture Worth Showing?',
      body: 'Tell us about the property. We will walk it with you.',
      estimatorType: 'commercial',
    },
    seo: {
      title: 'Sts. Peter & Paul Catholic Church — Lighting Source TX',
      description:
        'A historic stone church facade in New Braunfels given a full-color RGBW Colorscaping system — warm white for everyday, liturgical, seasonal, and patriotic scenes at the touch of a button.',
    },
  },

  // -------------------------------------------------------- Comal County Landa Annex
  {
    slug: 'comal-landa-annex',
    title: 'Comal County Landa Annex',
    badge: 'Civic',
    category: 'civic',
    location: 'New Braunfels, TX',
    locationMeta: 'Civic',
    projectType: 'Civic Architectural',
    system: 'RGBW · Colorscaping®',
    detailBase: 'projects',
    excerpt:
      'Architectural accent uplighting with full-color RGBW capability — clean by default, blue for awareness causes, patriotic for national holidays, seasonal year-round. A public landmark that shines for the community.',
    heroNight: { glow: '50% 60%', c1: 'rgba(46,86,200,0.52)' },
    cardNight: { glow: '50% 60%', c1: 'rgba(46,86,200,0.5)' },
    heroImageUrl: '/media/projects/comal-landa-annex/comal-blue.jpg',
    lead: 'Public buildings are community landmarks, and the Comal County Landa Annex deserved lighting to match.',
    intro: {
      heading: 'A Public Landmark That Shines',
      body: 'Lighting Source TX installed an architectural accent and color-changing system that highlights the building’s structure and gives the county a flexible, programmable canvas. By default, clean accent uplighting emphasizes the architecture; when the occasion calls for it, the full-color RGBW system lets the annex go blue for civic and awareness events, patriotic for national holidays, or seasonal throughout the year.',
    },
    mediaLayout: 'gallery',
    media: [
      {
        label: 'Green · Awareness Causes',
        imageUrl: '/media/projects/comal-landa-annex/comal-green.jpg',
        alt: 'Comal County Landa Annex building with a large oak tree uplit in green at night.',
      },
      {
        label: 'Color For Events',
        imageUrl: '/media/projects/comal-landa-annex/comal-purple.jpg',
        alt: 'A large oak tree uplit in purple at night near a civic building in downtown New Braunfels.',
      },
      {
        label: 'Colorscaping® Controller',
        imageUrl: '/media/projects/comal-landa-annex/comal-controller.jpg',
        alt: 'Stainless steel Colorscaping by WAC Lighting controller mounted on a stake against a brick wall.',
      },
    ],
    body: [
      {
        heading: 'Same Technology, Civic Scale',
        body: 'It’s the same Colorscaping® technology behind our church and commercial projects, applied to a civic setting where durability and easy operation matter most — turnkey from design through commissioning, and built to perform season after season.',
      },
    ],
    capabilities: [
      'Architectural accent uplighting for a civic building',
      'Full-color RGBW (Colorscaping®) for events and awareness causes',
      'Wireless, easy-to-operate control system',
      'Durable, low-maintenance commercial-grade install',
      'Turnkey design, installation, and commissioning',
    ],
    partners: ['WAC Lighting', 'Colorscaping® by WAC'],
    isCaseStudy: true,
    caseStudyOrder: 4,
    metric: { big: 'Civic', label: 'Color For Events & Awareness Causes' },
    order: 4,
    cta: {
      eyebrow: 'Worth Telling',
      heading: 'Lighting A Public Landmark?',
      body: 'Tell us about the property. We will walk it with you.',
      estimatorType: 'commercial',
    },
    seo: {
      title: 'Comal County Landa Annex — Lighting Source TX',
      description:
        'Programmable architectural lighting for a New Braunfels public building — clean accent uplighting plus full-color RGBW for holidays, awareness causes, and community events.',
    },
  },

  // ----------------------------------------------------- Private Hill Country Estates
  {
    slug: 'private-estates',
    title: 'Private Hill Country Estates',
    badge: 'Residential',
    category: 'residential',
    location: 'Texas Hill Country',
    locationMeta: 'Luxury Homes',
    projectType: 'Luxury Residential',
    system: 'RGBW · Colorscaping®',
    detailBase: 'projects',
    excerpt:
      'Complete residential landscape and architectural lighting for the Hill Country’s finest private homes — facade grazing, path and tree uplighting, pool accents, and full-color holiday scenes.',
    heroNight: { glow: '38% 70%', c1: 'rgba(240,210,150,0.42)', glow2: '68% 40%', c2: 'rgba(204,120,40,0.24)' },
    cardNight: { glow: '38% 74%', c1: 'rgba(240,210,150,0.4)', glow2: '68% 40%', c2: 'rgba(204,120,40,0.24)' },
    heroImageUrl: '/media/projects/private-estates/estate-front-blue-hour.jpg',
    lead: 'Lighting Source TX designs and installs landscape and architectural lighting for some of the Hill Country’s finest private residences.',
    intro: {
      heading: 'From Curb to Canopy',
      body: 'Warm-white grazing rakes across limestone facades and columns to reveal every course of cut stone; crisp recessed soffit lighting frames the architecture; path and step lights guide guests safely; and precision uplighting brings mature live oaks and specimen plantings to life after dark. Pool and patio areas receive their own balanced accent treatment — including dramatic in-water lighting visible from above.',
    },
    mediaLayout: 'gallery',
    media: [
      {
        label: 'Front Elevation · Full Dark',
        imageUrl: '/media/projects/private-estates/estate-front-dark.jpg',
        alt: 'Modern stone home at night with warm-white architectural lighting on the facade, entry, and surrounding plantings.',
      },
      {
        label: 'Stone Column Grazing',
        imageUrl: '/media/projects/private-estates/estate-column-grazing.jpg',
        alt: 'Close-up of a rough-cut limestone column lit from below with warm-white grazing light between two dark windows.',
      },
      {
        label: 'Heritage Oak Uplighting',
        imageUrl: '/media/projects/private-estates/estate-oak-uplighting.jpg',
        alt: 'Large live oak tree uplit in warm white at dusk with a planting bed of softly lit shrubs.',
      },
      {
        label: 'Colorscaping® Controller',
        imageUrl: '/media/projects/private-estates/estate-controller.jpg',
        alt: 'Stainless Colorscaping by WAC Lighting transformer with a Texas-flag cap on a stake by a fence.',
      },
    ],
    body: [
      {
        heading: 'One System, Every Night Of The Year',
        body: 'Because these systems are full-color RGBW where the owner wants it, the same fixtures that glow warm white on a Tuesday can turn festive red and green for the holidays — no add-on strings of lights required. Every install is turnkey: designed, installed, aimed, and programmed on the Colorscaping® by WAC Lighting platform, then handed off with simple wireless control.',
      },
    ],
    note: 'Private residences shown anonymously at the client’s request.',
    capabilities: [
      'Full-property residential landscape lighting design',
      'Warm-white facade grazing and architectural accents',
      'Path, step, and safety lighting',
      'Recessed soffit and architectural accent lighting',
      'Live oak and specimen tree uplighting',
      'Pool, patio, and in-water accent lighting',
      'Full-color RGBW holiday scenes on the same system',
      'Wireless, programmable control, fully turnkey',
    ],
    partners: ['WAC Lighting', 'Colorscaping® by WAC', 'Modern Forms'],
    isCaseStudy: false,
    order: 5,
    cta: {
      eyebrow: 'Worth Telling',
      heading: 'Ready To Light Your Home?',
      body: 'Tell us about the property. We will walk it with you.',
      estimatorType: 'residential',
    },
    seo: {
      title: 'Private Hill Country Estates — Lighting Source TX',
      description:
        'Complete residential landscape and architectural lighting for the Hill Country’s finest private homes — facade grazing, path and tree uplighting, pool accents, and full-color holiday scenes.',
    },
  },
];
