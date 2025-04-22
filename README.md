# Electronic Music Council Website

A modern, responsive website for the Electronic Music Council built with Next.js and TypeScript. This site showcases Cork's electronic music scene through events, artist profiles, news, and community initiatives.

## Features

- Modern, responsive design optimized for all device sizes
- Interactive particles background with vibrant purple aesthetics
- Complete set of pages including Home, About, Community, Events, News, Artists, Merch, and Contact
- Beat Battle page with interactive tabbed interface for competitions
- TypeScript components with proper type definitions
- Next.js routing system for seamless navigation

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: CSS with modern layout techniques
- **Animation**: Custom canvas-based particle system
- **Development**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/EMCwebsite_react.git
   cd EMCwebsite_react
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Project Structure

- `components/` - Reusable UI components
  - `Header.tsx` - Site navigation
  - `Footer.tsx` - Site footer
  - `ParticlesBackground.tsx` - Interactive background animation
  - Other reusable components...
- `pages/` - Next.js page components and routing
  - `index.tsx` - Homepage
  - `about.tsx` - About page
  - `community.tsx` - Community initiatives page
  - Other page components...
- `public/` - Static assets including images
- `styles/` - CSS styling with globals.css preserving the original look

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Follow the Vercel deployment steps

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Electronic Music Council Cork for the original design and content
- All artists and community members featured on the site
