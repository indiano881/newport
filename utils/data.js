export const projects = [
  {
    title: 'Nuxtermind',
    slug: 'nuxtermind',
    subtitle:
      'My own modern intepretation of a classic Code-Breaking Puzzle Game',
    description:
      'A modern twist on the classic Mastermind game with characters and real-time multiplayer.',
    content:
      'Nuxtermind is a very modern version of the Mastermind/secret code game with a touch of some modern features. Players can choose unique characters with special abilities and engage in timed, real-time multiplayer battles. One of the biggest strengths was integrating Supabase and Socket.io to handle matchmaking and real-time communication between players. The challenge came in synchronizing game state updates across different users while keeping the experience smooth and bug-free. Designing the game logic to be scalable and reusable for future game modes also required careful planning.',
    tech: 'Vue 3, Nuxt, Supabase, Socket.io, Pug, Tailwind',
    image: 'nuxtermind1.png',
    order: 1,
    siteLink: 'https://nuxtermind.vercel.app/',
    githubLink: 'https://nuxtermind.vercel.app/',
  },
  {
    title: 'Parking Time',
    slug: 'parking-time',
    subtitle: "Company's Homepage",
    description:
      'A multilingual company website built with Next.js and Sanity.',
    content:
      'A real-world project developed in collaboration with Agile and UI/UX design students. Parking Time was built with the help of three other frontend developers, and we had weekly presentations with the client. The main strengths include its internationalization setup using next-intl, interactive components, smooth animations, and dynamic content fetching via Sanity and GROQ. One of the trickiest parts was implementing localization properly across all pages and ensuring SEO compatibility in different languages. We also faced performance challenges due to large media files and had to optimize image loading and build caching.',
    tech: 'TypeScript, Next.js, React, Tailwind, Google Recaptcha V3, Sanity, Groq, Internationalization',
    image: 'parking.png',
    order: 2,
    siteLink: 'https://parking-time.vercel.app/en',
    githubLink: 'https://github.com/indiano881/Parking-time',
  },
  {
    title: 'Pandorum',
    slug: 'pandorum',
    subtitle: 'E-commerce',
    description: 'A basic e-commerce store with wishlist functionality.',
    content:
      'This is a simple Next.js project where users can explore a curated collection of luxury and futuristic products. You can log in using a test username (Davide) and try the wishlist functionality, powered by React’s useContext API. A key highlight was building the wishlist state management from scratch, ensuring it was persistent across components. The challenge was designing an engaging UX despite limited content and simulating a realistic product browsing flow. Additionally, setting up a smooth splash screen animation added a nice polish but took trial-and-error to implement correctly across all screen sizes.',
    tech: 'Next.js, Tailwind CSS, useContenxt, Splashscreen animation',
    image: 'pandorum.png',
    order: 3,
    siteLink: 'https://store-context.vercel.app/',
    githubLink: 'https://github.com/indiano881/store-context/tree/main',
  },
  {
    title: 'Economic MUI',
    slug: 'economic-mui',
    subtitle: 'Dashboard',
    description:
      'An interactive dashboard to explore economic data using charts.',
    content:
      'A SPA dashboard built with Material-UI (MUI) that allows users to visualize and analyze economic data through interactive charts and graphs. It includes filtering options, real-time updates, and customizable layouts. The strength of the project was its clean, modular code structure and responsive design powered by MUI’s Grid system. Implementing dynamic charting and integrating real-time data from multiple APIs presented the biggest challenge, especially in handling different formats and keeping performance smooth. Managing re-renders with React hooks also required careful optimization to avoid lag on chart updates.',
    tech: 'TypeScript, React, Material-UI, Single Page Application',
    image: 'economic.png',
    order: 4,
    siteLink: 'https://economi-mui.netlify.app/',
    githubLink: 'https://github.com/indiano881/economicMUI',
  },
]
