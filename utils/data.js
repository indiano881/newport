export const projects = [
  {
    title: 'Nuxtermind',
    slug: 'nuxtermind',
    subtitle: 'Real-time multiplayer game with WebSocket architecture',
    description:
      'A real-time multiplayer code-breaking game built on event-driven WebSocket architecture.',
    content:
      'Nuxtermind is a modern take on the classic Mastermind game, rebuilt as a real-time multiplayer experience. The core technical challenge was designing an event-driven architecture using Socket.io to handle matchmaking, game state synchronization, and conflict resolution across concurrent sessions. Supabase provides the persistence layer for user data and match history. The game logic was designed to be stateless on the client and authoritative on the server, preventing desync issues and enabling future game modes without architectural changes. Character selection and timed rounds add gameplay depth while stress-testing the real-time pipeline under load.',
    tech: 'Vue 3, Nuxt, Supabase, Socket.io, Pug, Tailwind',
    image: 'nuxtermind1.png',
    order: 1,
    siteLink: 'https://nuxtermind.vercel.app/',
    githubLink: 'https://nuxtermind.vercel.app/',
    tags: ['Web', 'Fullstack'],
    featured: true,
    hackathon: null,
  },
  {
    title: 'Parking Time',
    slug: 'parking-time',
    subtitle: 'Production company website with CMS integration and i18n',
    description:
      'A multilingual production website with headless CMS, SEO optimization, and internationalization.',
    content:
      "Parking Time is a production company website delivered through a full agile process with weekly client presentations. The architecture uses Next.js with next-intl for internationalization across all routes, and Sanity as a headless CMS so the client can manage content independently. GROQ queries power dynamic content fetching with minimal payloads. Key engineering decisions included structuring the i18n routing to preserve SEO across languages, implementing Google reCAPTCHA v3 for form protection, and optimizing build caching and image loading to handle the client's media-heavy content. Shipped on schedule with a team of four developers collaborating alongside UX designers.",
    tech: 'TypeScript, Next.js, React, Tailwind, Google Recaptcha V3, Sanity, GROQ, Internationalization',
    image: 'parking.png',
    order: 2,
    siteLink: 'https://parking-time.vercel.app/en',
    githubLink: 'https://github.com/indiano881/Parking-time',
    tags: ['Web'],
    featured: true,
    hackathon: null,
  },
  {
    title: 'Pandorum',
    slug: 'pandorum',
    subtitle: 'E-commerce platform with client-side state management',
    description:
      'An e-commerce storefront with wishlist functionality powered by React Context API.',
    content:
      "Pandorum is an e-commerce platform where users browse a curated product catalog with wishlist functionality. The state management layer was built from scratch using React's Context API — a deliberate architectural choice to keep the bundle lean and avoid external dependencies for a contained state graph. Context providers handle authentication, cart, and wishlist state with clean separation of concerns. The UI features a splash screen animation calibrated across breakpoints and a product browsing flow designed around engagement metrics. The project demonstrates that lightweight state solutions can be the right tool when the complexity profile fits.",
    tech: 'Next.js, Tailwind CSS, React Context API, Splash Screen Animation',
    image: 'pandorum.png',
    order: 3,
    siteLink: 'https://store-context.vercel.app/',
    githubLink: 'https://github.com/indiano881/store-context/tree/main',
    tags: ['Web'],
    featured: false,
    hackathon: null,
  },
  {
    title: 'Economic MUI',
    slug: 'economic-mui',
    subtitle: 'Data visualization dashboard with real-time API integration',
    description:
      'An interactive dashboard for economic data analysis with dynamic charting and real-time API feeds.',
    content:
      "Economic MUI is a single-page dashboard that visualizes economic data through interactive charts and configurable layouts. The architecture separates data fetching, transformation, and rendering into distinct layers — API responses are normalized into a common schema before hitting the charting components, making it straightforward to add new data sources. Material-UI's Grid system handles the responsive layout. The main performance challenge was managing React re-renders during real-time data updates; this was solved with memoization strategies and selective state subscriptions to keep chart interactions smooth even with frequent data refreshes.",
    tech: 'TypeScript, React, Material-UI, Single Page Application',
    image: 'economic.png',
    order: 4,
    siteLink: 'https://economi-mui.netlify.app/',
    githubLink: 'https://github.com/indiano881/economicMUI',
    tags: ['Data', 'Web'],
    featured: false,
    hackathon: null,
  },
  {
    title: 'AIX Token Season 2 Dashboard',
    slug: 'aix-token-dashboard',
    subtitle: 'On-chain analytics dashboard for AIX token ecosystem',
    description:
      'A Dune Analytics dashboard tracking AIX token bridging, TVL, migration, staking pools, and transactions.',
    content:
      'Built a comprehensive on-chain analytics dashboard for the AIX token Season 2 launch using Dune Analytics. The dashboard tracks key metrics across the token ecosystem: bridging activity, total value locked (TVL), token migration flows, staking pool performance, and transaction volumes. All queries were written in SQL against blockchain data, leveraging Dune\'s MCP server for data access. The dashboard provides real-time visibility into token health and user activity, serving as a monitoring tool for the PlanetIX team and community.',
    tech: 'Dune Analytics, SQL, MCP Server, Ethereum, Base, Polygon, Chainlink CCIP, Web3, Tokenomics',
    image: 'dune1.png',
    order: 5,
    siteLink: 'https://dune.com/planetix_team_official/aix-token-season-2',
    githubLink: 'https://dune.com/planetix_team_official/aix-token-season-2',
    tags: ['Data'],
    featured: true,
    hackathon: null,
  },
]
