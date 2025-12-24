# Zarespace Digital Website - Project Context

## Project Overview

Zarespace Digital is a Next.js 15 website built for a digital agency that specializes in web development, graphics design, video editing, and digital marketing services. The site features a modern, animated UI with a focus on showcasing services, portfolio projects, and providing multiple contact options.

### Key Technologies & Features
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Motion library for smooth transitions and effects
- **Design System**: Custom UI components with gradient accents and modern aesthetics
- **Color Scheme**: Primary color #b6ff1c (lime green) with dark/light mode support
- **Fonts**: Inter (Google Font) and TTLakes (custom font)

### Project Architecture

The website follows a modern Next.js 13+ app router structure:

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx          # Global layout with Header/Footer
│   ├── page.tsx            # Home page with all sections
│   ├── services/           # Services page
│   ├── projects/           # Projects/portfolio page
│   ├── pricing/            # Pricing page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── Header.tsx          # Dynamic header with scroll behavior
│   ├── Footer.tsx          # Footer with Magic UI component
│   ├── ui/                 # shadcn/ui components
│   ├── magicui/            # Magic UI components
│   └── theme-provider.tsx  # Theme provider
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
```

### Current Implementation Status

The website includes these main sections:
1. **Hero Section** - With Aurora background and 3D interactive mockup
2. **Services Section** - Carousel showcasing 4 main services
3. **Portfolio Section** - Grid of project examples with modal details
4. **Why Choose Us** - Differentiators section
5. **Process Section** - Timeline showing work process
6. **Contact Section** - Multiple contact options with social links

### Key Components & Features

#### Header Component
- Dynamic scroll behavior: transparent when at top, becomes floating header on scroll
- Responsive design with mobile hamburger menu
- Theme toggle functionality
- Active link highlighting with animated underline

#### Footer Component
- Multi-column layout with company info, services, and contact options
- Newsletter subscription form
- Social media links
- Magic UI Scroll Based Velocity component for animated text

#### UI Components
- Aurora background effect for hero section
- Interactive 3D mockup component
- Apple cards carousel for services
- Timeline component for process visualization
- Portfolio grid with modal project details
- Animated theme toggler

### Development Conventions

#### Styling
- Uses Tailwind CSS utility classes with custom color palette
- Component styling follows shadcn/ui patterns
- Custom animations implemented with Motion library
- Responsive design with mobile-first approach

#### Naming Conventions
- Component files use PascalCase (e.g., `Header.tsx`)
- Utility functions use camelCase
- CSS classes follow BEM methodology where appropriate
- File paths use kebab-case for URL routes

#### Code Structure
- Components are organized in the `src/components` directory
- UI-specific components are in `src/components/ui`
- Magic UI components are in `src/components/magicui`
- Page-specific logic is in the `src/app` directory
- Shared utilities are in `src/lib`

### Building and Running

#### Development
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The development server runs with Turbopack for faster builds.

#### Production
```bash
npm run build
npm start
```

#### Linting
```bash
npm run lint
```

### Project Goals & Vision

Based on the `ZARESPACE_WEBSITE_PLAN.md` file, the project aims to:
- Showcase services: Web Development, Graphics Design, Video Editing, Digital Marketing
- Target startups and SMEs looking for digital transformation
- Emphasize fast delivery (2-week average turnaround)
- Highlight direct communication with founders
- Use modern tech stack with transparent pricing

### Future Pages to Implement
- `/services` - Detailed breakdown of all 4 services
- `/projects` - Complete portfolio showcase
- `/pricing` - Service packages and pricing tiers
- `/resources` - Tools, technologies, and resources used
- `/about` - Company story and team information

### Special Considerations
- The site is designed with startup/SME-focused messaging
- Uses "Helping businesses grow since 2024" messaging (as no client logos yet)
- Focuses on capabilities and expertise rather than client count
- Implements modern web practices like performance optimization and SEO