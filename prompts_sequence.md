# Sequence of Prompts for AI-Assisted Development

This document records the chronological sequence of structured prompts and workflow stages used during the AI-native development of the **Airbnb-Clone App (Playpower Labs Take-Home Assessment)**.

---

## Stage 1: Assessment Ingestion & Requirements Discovery

### Prompt 1.1: Document Parsing & Scope Analysis
> **Prompt**:
> "Read the assignment PDF document `Playpower Labs Assignment_ Airbnb-Clone App.pdf`. Identify the exact listing to recreate, the 3 required desktop screens, visual and behavioural parity criteria, technical stack suggestions, architecture diagram deliverables, and submission constraints."
>
> **Model Action & Outcome**:
> - Extracted target listing: *"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"*.
> - Extracted 3 required views:
>   1. **Listing Page**: Full property page with hero photo grid, host details, amenities, calendar, reviews breakdown, location map, and sticky reservation sidebar.
>   2. **Photo Tour**: Full-screen modal opened from "Show all photos" with category tabs (*Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos*).
>   3. **Lightbox**: Single-photo modal viewer with counter (`1 of 43`), navigation arrows (`<` / `>`), and keyboard controls.
> - Noted desktop-only scope requirement.
> - Identified anti-plagiarism and zero public GitHub repository guidelines.

---

## Stage 2: Visual Parity & Reference Screenshot Analysis

### Prompt 2.1: Inspection of Reference Website
> **Prompt**:
> "Inspect the reference website `https://airbnb-clone-umber-two.vercel.app`. Analyze the route parameters, URL structure, exact layout, button placements, and visual design tokens."
>
> **Model Action & Outcome**:
> - Discovered Vercel Bot Mitigation challenge on raw curl/headless fetch.
> - Analyzed 17 high-resolution user-uploaded screenshots directly from the reference app.
> - Extracted route parameters:
>   - Photo Tour modal: `/?modal=PHOTO_TOUR_SCROLLABLE`
>   - Lightbox modal: `/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000`
> - Discovered crucial behavioral interactions:
>   - Check-in, checkout, and guest inputs act as display elements in the reservation sidebar.
>   - Clicking the **Reserve** button displays the dark bottom-center toast: `"You won't be charged yet"`.
>   - Lightbox has a 9-dot grid button on top-left to return directly to the Photo Tour grid.

---

## Stage 3: Architecture Planning & Technical Design

### Prompt 3.1: Implementation Plan Formulation
> **Prompt**:
> "Generate a comprehensive implementation plan adhering to Planning Mode. Define the frontend stack (React, TypeScript, Tailwind CSS, Lucide icons), the component hierarchy, data models for 43 categorized room photos, the 3 interactive views, and the production vacation-rental marketplace system design."
>
> **Model Action & Outcome**:
> - Authored `implementation_plan.md` with complete technical specifications, component hierarchy, verification plan, and deliverables list.
> - Received user confirmation to proceed with pure frontend static-deployable architecture (compatible with GitHub Pages / Vercel).

---

## Stage 4: Project Scaffolding & Design System Tokens

### Prompt 4.1: Project Setup & Tailwind Configuration
> **Prompt**:
> "Initialize a modern Vite + React + TypeScript application with relative base path (`base: './'`) for static hosting. Configure Tailwind CSS with authentic Airbnb design system tokens: Airbnb Rose `#FF385C`, text colors `#222222` and `#717171`, border tokens `#DDDDDD` and `#EBEBEB`, and custom shadows."
>
> **Model Action & Outcome**:
> - Initialized Vite + React 19 + TypeScript.
> - Installed `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `clsx`, `tailwind-merge`, and `canvas-confetti`.
> - Created `tailwind.config.js` and `src/index.css` with Google Font (Plus Jakarta Sans) and custom scrollbar styling.
> - Created SVG Airbnb favicon in `public/favicon.svg`.

---

## Stage 5: Asset Extraction & Data Modeling

### Prompt 5.1: High-Resolution Photo Pipeline & Dataset Creation
> **Prompt**:
> "Extract the high-resolution room photos, category thumbnails, co-host avatars, map preview, and stays nearby cards directly from the reference screenshots. Structure `src/data/listing.ts` containing the full 43-photo categorized catalog, reviews breakdown, host credentials, and pricing data."
>
> **Model Action & Outcome**:
> - Programmatically cropped and optimized all room photos into `public/photos/`, `public/category-thumbs/`, and `public/avatars/`.
> - Built comprehensive `src/data/listing.ts` containing the 9 room categories (*Living room 1*, *Living room 2*, *Full kitchen*, *Bedroom*, *Full bathroom*, *Gym*, *Exterior*, *Pool*, *Additional photos*) and flat list of 43 photos with IDs `1000` to `1042`.

---

## Stage 6: Component Development & Behavioral Parity

### Prompt 6.1: Building Screen 1 (Listing Page) & Sticky Header
> **Prompt**:
> "Implement the complete Listing Page components: `Navbar`, `StickyNavHeader` (revealed on scroll > 520px with active tab indicators), `ListingHeader`, `HeroPhotoGrid` (5-photo asymmetric layout with hover effects and 'Show all photos' overlay button), `PromoBanner` (with confetti claim interaction), `GuestFavoriteCard` (laurel branches with 4.95 score), `HostOverview`, `Description`, `WhereYouSleep`, `AmenitiesSection` (with 50-amenity categorized modal), `CalendarSection` (2-month interactive date selector), `ReviewsSection` (giant laurel 4.95 header, 6 category rating bars, tag filter pills, 6 review cards), `LocationSection` (interactive map), `HostSection`, `ThingsToKnow`, and `MoreStaysNearby`."
>
> **Model Action & Outcome**:
> - Built modular, clean components adhering to single responsibility principles.
> - Added smooth scroll-to-section navigation from the sticky navigation header.

### Prompt 6.2: Building Screen 2 (Photo Tour) & Screen 3 (Lightbox)
> **Prompt**:
> "Implement `PhotoTourModal` (`/?modal=PHOTO_TOUR_SCROLLABLE`) with horizontal category navigation tabs that smoothly scroll to room sections. Implement `LightboxModal` (`/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=[id]`) with 9-dot grid icon, room title, '1 of 43' counter, circular arrow navigation buttons, and full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`). Wire URL synchronization with `window.history.pushState` and `popstate`."
>
> **Model Action & Outcome**:
> - Implemented seamless URL route synchronization between Listing, Photo Tour, and Lightbox.
> - Verified keyboard accessibility and focus management.

---

## Stage 7: System Architecture Deliverable

### Prompt 7.1: Production-Scale Architecture Diagram & Specification
> **Prompt**:
> "Generate a publication-grade architecture diagram and technical paper for a production-scale vacation-rental marketplace (handling 100M+ MAU, 100k+ QPS search, zero double-booking concurrency). Illustrate the multi-tier scaling strategy for frontend, microservices, Kafka event streaming, Redis Redlock distributed locks, CockroachDB/Aurora PostgreSQL storage, OpenSearch geospatial search, and Kubernetes multi-region deployment."
>
> **Model Action & Outcome**:
> - Generated `architecture/vacation_rental_architecture.svg` vector graphic.
> - Rendered high-resolution image `architecture/vacation_rental_architecture.png` (1.54 MB).
> - Authored `architecture/ARCHITECTURE.md` design document.

---

## Stage 8: Sub-agent & Skill Configurations

### Prompt 8.1: AI Workflow Configs
> **Prompt**:
> "Create specialized subagent skills in `.agents/skills/` documenting modern AI coding workflows: `code-quality`, `pixel-perfect-reviewer`, `accessibility-auditor`, and `architecture-evaluator`."
>
> **Model Action & Outcome**:
> - Authored 4 comprehensive skill configuration files for engineering standards and code quality.

---

## Stage 9: Build Verification & Automated Packaging

### Prompt 9.1: Production Compilation & Submission Script
> **Prompt**:
> "Validate TypeScript compilation with `npm run build`. Create an automated packaging script `package-submission.sh` that bundles the code, architecture diagram, prompt sequence, and subagent configs into a clean submission zip excluding `node_modules` and build artifacts."
>
> **Model Action & Outcome**:
> - `npm run build` compiled with 0 errors in 592ms.
> - Generated `package-submission.sh` and verified the final zip bundle.
