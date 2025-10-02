# Overview

This is a full-stack web application for Michael's Shoe & Watch Repair, a local repair shop in Brooklyn. The application serves as a business website featuring information about services, pricing, testimonials, and a contact form. It includes modern web technologies with a React frontend, Express backend, and is designed for deployment on Vercel with email functionality through SendGrid.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and standard React hooks for local state
- **Animations**: Custom intersection observer hooks for scroll-triggered animations and Framer Motion for video components

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite middleware in development
- **Production**: Compiled to ESM bundle via esbuild
- **API Design**: RESTful endpoints under `/api` prefix

## Database and Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL)
- **Schema**: Simple user table structure with plans for future expansion
- **Storage**: In-memory storage implementation for development with database interface ready for production

## Deployment Architecture
- **Platform**: Vercel with serverless functions
- **Static Assets**: Served from `/dist/public` directory
- **API Routes**: Serverless functions in `/api` directory for Vercel deployment
- **Environment**: Development/production environment detection with conditional behavior

## Email Service Integration
- **Provider**: SendGrid for transactional email
- **Implementation**: Dedicated email service module with error handling
- **Security**: API key management through environment variables
- **Features**: Contact form submissions routed to business email

## Development Workflow
- **Hot Reload**: Vite dev server with Express middleware integration
- **Type Safety**: Shared TypeScript interfaces between client and server
- **Error Handling**: Runtime error overlay in development via Replit plugin
- **Debugging**: Debug utilities and API test endpoints for troubleshooting

# External Dependencies

## Email Services
- **SendGrid**: Transactional email service for contact form submissions
- **Configuration**: Requires `SENDGRID_API_KEY` environment variable
- **Verified Sender**: Must use verified sender domain for production

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Configuration**: Requires `DATABASE_URL` environment variable
- **Connection**: Managed through Drizzle ORM with connection pooling

## UI Component Libraries
- **Radix UI**: Headless UI components for accessibility and behavior
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling

## Development Tools
- **Replit Integration**: Development environment with error overlay and cartographer plugins
- **TypeScript**: Type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)

## Deployment Platform
- **Vercel**: Hosting platform with serverless function support
- **Environment Variables**: Managed through Vercel dashboard
- **Domain Management**: Custom domain configuration support

## Third-Party Assets
- **Google Fonts**: IBM Plex Sans, Inter, Playfair Display, and compressed font alternatives
- **Media Assets**: Local storage in `attached_assets` directory for images and videos
- **Video Content**: MP4 files for service demonstrations with fallback handling