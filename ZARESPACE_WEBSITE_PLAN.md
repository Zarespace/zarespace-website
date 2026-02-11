# Zarespace Digital Website Structure Plan

## Website Sections Overview

### 1. Header
- Logo (with company name on laptop/desktop)
- Navigation links:
  - **Services** - List of all services (dedicated page)
  - **Projects** - List of all projects/portfolio (dedicated page)
  - **Pricing** - List of all pricing packages (dedicated page)
  - **Resources** - List of all resources used/tools (dedicated page)
- CTA button
- **Dynamic Header Behavior**:
  - **Initial State**: Transparent background, overlays hero content
  - **On Scroll**: Transforms to floating header with background
  - **Floating Style**: Rounded corners, shadow, not attached to screen edges
  - **Smooth Animation**: Transition between states using Motion library

### 2. Hero Section
- **Layout**: Split-screen design (text left, visual right)
- **Headline**: "Empowering Businesses, Digitally."
- **Subheadline**: Supporting text about digital transformation
- **Visual Element Options** (right side):
  - 3D animated sphere/orb with digital particles (similar to reference)
  - Floating geometric shapes with lime green accents
  - Abstract digital network visualization
  - Animated code/data visualization sphere
- **Background**: Dark gradient with subtle patterns
- **Two CTA buttons**: Primary and secondary actions
- **Social Proof**: "Trusted by growing businesses" or client logos when available

### 3. Services Section
- 4 main services in grid layout:
  1. **Web Development** - Custom websites and web applications
  2. **Graphics Design** - Brand identity, logos, and visual assets
  3. **Video Editing** - Professional video content and post-production
  4. **Digital Marketing** - SEO, social media, and online advertising
- Brief description for each service
- "Learn More" button for each service

### 4. Why Choose Us
- 3-4 key differentiators for new agency:
  - **Fresh Perspective** - Latest trends and technologies
  - **Personalized Service** - Direct access to founders, no middlemen
  - **Startup-Friendly Pricing** - Flexible packages for growing businesses
  - **Full-Service Approach** - All digital needs under one roof
- Focus on startup/SME benefits
- Local market understanding emphasis

### 5. Social Proof & Recent Work/Portfolio Preview
- **Startup-friendly messaging** (since no client logos yet):
  - "Trusted by growing businesses" or "Helping startups scale digitally"
  - Focus on capabilities and expertise rather than client count
- 3-4 best project examples (can be personal projects, case studies, or concept work)
- "View All Work" CTA leading to portfolio page

### 6. Process Overview
- How we work (3-4 simple steps)
- Clear workflow visualization

### 7. About Us (Brief) & Contact/CTA Section
- Founder story or team intro
- Why we started Zarespace
- Contact form + phone/email
- "Ready to grow your business?" messaging

### 8. Footer
- Links and navigation
- Social media links
- Contact information
- Services links
- Legal pages
- "Scroll Based Velocity" component from Magic UI
- Component URL: https://magicui.design/docs/components/scroll-based-velocity

## Technical Implementation Notes
- Built with Next.js 15 + React 19
- Styled with Tailwind CSS + shadcn/ui components
- Animations with Motion library
- Primary color: #b6ff1c (lime green)
- Inter font family
- Responsive design for mobile/tablet/desktop

## Component Architecture
- **Header Component** (`src/components/Header.tsx`):
  - Reusable across all pages
  - Contains dynamic scroll behavior logic
  - Handles navigation state and mobile menu
  - Imported in layout.tsx for global usage

- **Footer Component** (`src/components/Footer.tsx`):
  - Reusable across all pages
  - Contains Magic UI Scroll Based Velocity component
  - Consistent across all page layouts
  - Imported in layout.tsx for global usage

## Status
- ✅ Foundation setup complete
- ✅ Color scheme implemented
- ✅ Font system fixed
- 🔄 Ready to begin section-by-section implementation

## Service Details for Implementation

### Web Development
- Custom websites and web applications
- E-commerce solutions
- Responsive design
- Performance optimization

### Graphics Design
- Brand identity and logo design
- Marketing materials
- Social media graphics
- Print design

### Video Editing
- Professional video content
- Social media video content
- Corporate videos
- Post-production services

### Digital Marketing
- SEO optimization
- Social media management
- Online advertising (Google Ads, Facebook Ads)
- Content marketing strategy

## Startup-Focused Messaging Strategy
- Emphasize agility and fresh approach
- Highlight cost-effectiveness
- Focus on growth partnership rather than just service provision
- Use "growing with you" messaging
- Showcase modern tools and techniques

## Hero Background Implementation Options
1. **Animated CSS/SVG**: Shooting stars, floating geometric shapes
2. **Video Background**: Professional, subtle motion (low opacity overlay)
3. **Particle System**: Interactive dots/connections using Motion library
4. **Gradient Animation**: Dynamic color transitions with your lime green theme

## Website Architecture & Navigation Structure

### Main Pages Structure
1. **Home Page** (/) - Landing page with all 8 sections
2. **Services Page** (/services) - Detailed breakdown of all 4 services
3. **Projects Page** (/projects) - Complete portfolio showcase
4. **Pricing Page** (/pricing) - Service packages and pricing tiers
5. **Resources Page** (/resources) - Tools, technologies, and resources used

### Navigation Strategy
- **Clean 4-link navigation** for easy mobile experience
- **Descriptive naming** that clearly indicates page content
- **Logical user journey**: Services → Projects → Pricing → Resources
- **CTA button** separate from main nav for conversion focus

### Page Content Planning

#### Services Page (/services)
- Detailed service descriptions
- Process for each service
- Technology stack used
- Pricing starting points
- Case studies per service

#### Projects Page (/projects)
- Portfolio gallery
- Project categories/filters
- Case study details
- Client testimonials (when available)
- "Start Your Project" CTA

#### Pricing Page (/pricing)
- Service packages
- Custom quote options
- Feature comparisons
- FAQ section
- "Get Started" CTA

#### Resources Page (/resources)
- Tools and technologies we use
- Industry insights/blog posts
- Free resources for clients
- Partner integrations
- Knowledge base

## Header Implementation Details

### Dynamic Header Behavior
- **Transparent State** (scroll position: 0):
  - Fully transparent background
  - White/light text for contrast against hero
  - Fixed position at top of viewport
  - No shadow or border

- **Floating State** (scroll position: >50px):
  - Semi-transparent background with blur effect
  - Rounded corners (border-radius: 12-16px)
  - Subtle shadow for depth
  - Margin from screen edges (not full width)
  - Smooth color transition for text/logo

### Technical Implementation
- **Scroll Detection**: Use `useEffect` with scroll event listener
- **State Management**: React state to track scroll position
- **Animation**: Motion library for smooth transitions
- **Backdrop Filter**: CSS `backdrop-filter: blur()` for modern glass effect
- **Z-index**: High z-index to stay above all content

### Visual Specifications
- **Floating Header Styling**:
  - Background: `bg-background/80 backdrop-blur-md`
  - Border radius: `rounded-2xl`
  - Shadow: `shadow-lg`
  - Margin: `mx-4 md:mx-8` (responsive spacing from edges)
  - Max width: `max-w-7xl mx-auto` (centered with max width)

### Responsive Behavior
- **Mobile**: Smaller margins, compact spacing
- **Tablet/Desktop**: Larger margins, full navigation visible
- **Logo**: Always visible, company name shows on larger screens
- **Navigation**: Hamburger menu on mobile, full nav on desktop

## File Structure for Components

### Global Layout Components
```
src/
├── components/
│   ├── Header.tsx          # Dynamic header with scroll behavior
│   ├── Footer.tsx          # Footer with Magic UI component
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   └── resources/
│       └── page.tsx        # Resources page
```

### Layout Implementation Strategy
- **Root Layout** (`layout.tsx`):
  - Import Header and Footer components
  - Wrap all pages with consistent layout
  - Handle global styles and metadata

- **Page-Specific Content**:
  - Each page focuses only on its unique content
  - Header and Footer automatically included
  - Consistent user experience across all pages

### Component Benefits
- **Maintainability**: Single source of truth for header/footer
- **Consistency**: Same navigation and footer across all pages
- **Performance**: Components cached and reused
- **Development Speed**: No need to recreate header/footer per page## 
Hero Section Design Analysis

### What Works from the Reference
- **Split Layout**: Text on left, visual on right creates perfect balance
- **Dark Background**: Professional, modern feel that makes content pop
- **3D Visual Element**: Eye-catching without being distracting
- **Clear Hierarchy**: Large headline, supporting text, clear CTAs
- **Social Proof**: Company logos build immediate credibility

### Zarespace Adaptations

#### Visual Element Options (Right Side)
1. **Digital Transformation Sphere**:
   - 3D orb with swirling digital elements
   - Lime green (#b6ff1c) particles and accents
   - Represents data, connectivity, growth

2. **Service Integration Visual**:
   - Four interconnected elements representing your services
   - Web dev (code brackets), Design (palette), Video (play icon), Marketing (graph)
   - Animated connections between elements

3. **Growth Visualization**:
   - Abstract representation of business growth
   - Rising charts, network connections
   - Particle effects in your brand colors

#### Content Structure
- **Main Headline**: "Empowering Businesses, Digitally."
- **Supporting Text**: "We help startups and SMEs transform their digital presence with cutting-edge web development, design, video, and marketing solutions."
- **CTA Buttons**: 
  - Primary: "Start Your Project"
  - Secondary: "View Our Services"
- **Trust Indicators**: "Helping businesses grow since 2024" or capability highlights

#### Technical Implementation
- **3D Library**: Three.js or React Three Fiber for 3D elements
- **Animations**: Motion library for smooth interactions
- **Responsive**: Visual scales appropriately on mobile
- **Performance**: Optimized 3D rendering, fallback for low-end devices


i'm dumb