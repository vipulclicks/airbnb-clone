# Airbnb Listing Clone — Playpower Labs Take-Home Task

A pixel-perfect, desktop-optimized clone of the Airbnb listing page: **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"**, engineered with complete visual fidelity, authentic motion design, keyboard accessibility, and production architecture thinking.

---

## 🌟 Key Features & Views

### 1. Screen 1: The Listing Page (`/`)
- **Authentic Airbnb Navigation**: Top header with the brand rose logo (`#FF385C`), search pill widget (*Anywhere | Anytime | Add guests*), and user profile menu.
- **Sticky Navigation Bar**: Appears automatically upon scrolling past 520px with smooth scroll-to-section navigation (*Photos*, *Amenities*, *Reviews*, *Location*) and quick reservation summary.
- **Hero Photo Grid**: Asymmetric 5-photo layout with hover transitions and a floating **"Show all photos"** trigger button.
- **10% Off Promo Banner**: Interactive discount banner with animated confetti celebration on claim.
- **Guest Favourite Laurel Card**: Authentic laurel wreath badge celebrating the property's **4.95 rating** and **19 reviews**.
- **Space Description**: Expandable space overview with modal dialog.
- **Where You'll Sleep**: Bedroom and living room cards with room photography.
- **What This Place Offers**: 2-column amenities list + full **50-amenity categorized modal**.
- **Interactive Calendar**: 2-month view (*October 2026* & *November 2026*) with active date range selection (`18 Oct 2026 - 23 Oct 2026`) and date clearance.
- **Reviews & Ratings**: Giant laurel **4.95** heading, 6-category rating breakdown (*Cleanliness 5.0, Accuracy 5.0, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.8*), emoji tag filters (*Comfort, Hot tub, Hospitality, etc.*), and authentic guest review cards.
- **Where You'll Be**: Interactive Candolim, Goa map container with pan/zoom controls.
- **Meet Your Host**: Mirashya Homes host profile (1,463 reviews, Superhost, co-hosts avatars, response rate 100%, and contact CTA).
- **Things to Know**: 3-column house rules, safety policies, and cancellation terms.
- **Sticky Reservation Card**: Floating sidebar widget with dates, guest counter, and dark floating toast notification upon clicking **Reserve** (*"You won't be charged yet"*).

### 2. Screen 2: Photo Tour Modal (`/?modal=PHOTO_TOUR_SCROLLABLE`)
- Opened from **"Show all photos"** or any hero photo.
- Synchronized via query parameters (`?modal=PHOTO_TOUR_SCROLLABLE`).
- Sticky top bar with back navigation (`<`), title, and share/save buttons.
- Horizontal category navigation bar with thumbnail previews for all 9 rooms:
  *Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos*.
- Room sections with feature taglines (*Sofa · Air conditioning · Ceiling fan · TV*).
- Clicking any photo transitions seamlessly into Screen 3 (Lightbox).

### 3. Screen 3: Lightbox Single-Photo Viewer (`/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=[id]`)
- Immersive single-photo viewer with URL sync (`&modalItem=1000`).
- **9-dot grid button** on top-left to return instantly to the Photo Tour grid.
- Room title and counter indicator (`1 of 43`).
- Circular left/right arrow buttons with smooth image transitions.
- **Full Keyboard Navigation**:
  - `ArrowLeft`: Previous photo
  - `ArrowRight`: Next photo
  - `Escape`: Close lightbox
- Close button (`✕`) returns to the main listing page.

---

## 🏛️ Production Architecture Diagram

Alongside the frontend application, a high-level system architecture diagram for a production-scale vacation-rental marketplace is included:

- **Diagram (High-Res Image)**: `architecture/vacation_rental_architecture.png`
- **Diagram (Vector SVG)**: `architecture/vacation_rental_architecture.svg`
- **Technical Specification**: `architecture/ARCHITECTURE.md`

### Architecture Highlights
1. **Frontend Tier**: Edge SSR, static asset distribution, Cloudflare Anycast DDoS/WAF protection.
2. **Domain Microservices**: Search (OpenSearch / H3 spatial index), Listing & Content, Booking & Reservation (Saga Pattern), Pricing & Inventory, Payments (PCI-DSS Vault), and Reviews.
3. **Double-Booking Elimination**: Redis Redlock distributed locking on date ranges during the reservation hold window + strict serializability transactions in CockroachDB / AWS Aurora.
4. **Event Streaming**: Apache Kafka partitioned by `listing_id` for zero-message-loss async workflows.
5. **Deployment & Scaling**: Kubernetes (AWS EKS / GKE) with Karpenter autoscaling, Istio Service Mesh, and ArgoCD GitOps.

---

## 🤖 Modern AI Workflow & Sub-agent Configurations

Adhering to modern AI-native engineering principles, specialized sub-agent and skill configurations are provided in `.agents/skills/`:

- `.agents/skills/code-quality/SKILL.md`: Strict TypeScript typing, component modularity, and clean architecture standards.
- `.agents/skills/pixel-perfect-reviewer/SKILL.md`: Geometry, spacing, typography, and motion evaluation against Airbnb benchmarks.
- `.agents/skills/accessibility-auditor/SKILL.md`: WCAG 2.1 AA keyboard traps, ARIA attributes, and contrast ratios.
- `.agents/skills/architecture-evaluator/SKILL.md`: Concurrency control, distributed locks, and multi-region resilience evaluation.
- `prompts_sequence.md`: Chronological log of prompts and reasoning stages used throughout development.

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Builds the static bundle into the `dist/` directory in < 1 second.

### 4. Create Submission Zip
```bash
bash package-submission.sh
```
Automatically generates `airbnb_clone_submission.zip` containing all code, architecture diagrams, prompt logs, and sub-agent configs.

---

## 🌐 Deploying to GitHub Pages

The application is configured with `base: './'` in `vite.config.ts`, making it 100% compatible with static hosting on GitHub Pages:

1. Create a **Private** repository on GitHub (per the take-home submission instructions).
2. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: airbnb clone implementation"
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_PRIVATE_REPO.git
   git push -u origin main
   ```
3. In GitHub Repository Settings -> **Pages** -> Source: **GitHub Actions** (using the standard Vite static deploy workflow).
