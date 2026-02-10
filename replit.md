# Overview

This is a band website for Melodious Gaeng, a creative music project founded by brothers Harrison and Liam Gaeng. The application is built as a full-stack web application showcasing the project's music, press coverage, social media presence, and providing ways for fans to connect. The site features a modern, responsive design with a dark/gold color scheme.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes (February 2026)

## Full Site Conversion: DCSS to Melodious Gaeng
- **Branding**: Complete rebrand from Deer Creek Sharp Shooters to Melodious Gaeng
- **Color scheme**: Dark (#121212) + Gold (#D4944C) + Light (#FAFAFA) theme replacing old green/orange
- **Pages kept**: Home, About, Music, Contact (all rewritten for Melodious Gaeng)
- **Pages added**: Socials (Instagram embed + social links), Press (media coverage + press info)
- **Pages removed**: Shows, Videos, EPK, Merch
- **Images**: Hero/About use Google Drive image (1L1782QKoXoQQEMSLmaNUXMlfCEgPLl3f), Contact uses separate photo (1mPQnqpbUZy6sd17ec8yRuJoHyZTZre4U)
- **Links**: Spotify artist embed, YouTube channel, Instagram, Facebook, contact email johngaengmusic@gmail.com

## Deployment
- **Hash-based routing**: Using Wouter's `useHashLocation` for SPA compatibility
- **Development**: `npm run dev` starts Express + Vite dev server

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **Routing**: Wouter with hash-based routing for pages: Home, About, Music, Socials, Press, Contact
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Styling**: Custom CSS variables (mg-dark, mg-gold, mg-light, mg-warm, mg-muted) and typography (Oswald headings, Merriweather body)

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Vite middleware for HMR

## Key External Links
- Spotify: https://open.spotify.com/artist/4fbu4uj2jCKMf0XrhyGbHL
- YouTube: https://www.youtube.com/channel/UCPjBfP9MkLN4Im3TUBXws1g
- Instagram: https://www.instagram.com/melodious_gaeng
- Facebook: https://www.facebook.com/melodiousgaeng/
- Email: johngaengmusic@gmail.com
