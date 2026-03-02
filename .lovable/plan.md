

## Add Solutions, Apartments, Malls, and Industries Pages

### Overview
Create 4 new pages within the existing single-page app architecture (using `currentPage` state routing in `Index.tsx`). Add a "Solutions" dropdown in the navbar linking to all four sub-pages. Each page follows the existing pattern of section components.

### File Changes

**All changes in `src/pages/Index.tsx`** (the app is a single-file SPA):

---

### 1. Update Navbar with Solutions Dropdown

Add a "Solutions" dropdown menu to both desktop and mobile navs containing links to:
- Solutions (overview)
- Apartments
- Malls
- Industries

Desktop: hover dropdown with the 4 options.
Mobile: expandable accordion-style sub-menu.

---

### 2. Solutions Page Component

Content from bosonwhitewater.com/solutions:
- Hero banner with "Solutions" title and water-themed background
- Intro paragraph about custom solutions for buildings with STPs
- **Flowchart section**: A clean, CSS-based visual flowchart showing the water flow cycle:
  - Apartment Complex / Malls / Industry --> Waste Water Treatment Facility (STP) --> Water is drained/disposed (80%) + used for Flushing & Garden
  - Bore-well Line --> Sump Tank --> Tanker --> Boson White Water system --> back to building
- Monitoring section with description of real-time IoT parameters (TDS, flow rate, pH, turbidity)
- System images from CDN (infographic, sol-tank, sol-tank1, 150KL system, RMZ installation)
- Solution cards linking to Apartments, Malls, and Industries pages (using the CDN card images)

---

### 3. Apartments Page Component

Content from bosonwhitewater.com/apartments:
- Hero banner with water droplet background
- Problem statement about vertical growth and STP challenges
- Solutions list with check icons:
  - Upgrade STP water to potable quality
  - Optimize garden water usage
  - Shallow well recharge systems
  - Groundwater recharge practices
  - Self-sufficiency in water management
- Eligibility criteria section (50+ KLD STPs, underutilized treated water, 150+ unit complexes)
- Apartment building image from CDN
- Current Installations section with client logos (3 logos from CDN)
- CTA to contact/booking

---

### 4. Malls Page Component

Content from bosonwhitewater.com/malls:
- Hero banner
- Problem statement about mall water challenges (cooling towers, fountains)
- Boson support description
- Benefits list with check icons:
  - Zero capital investment
  - Maintenance-free operation
  - Consistent water availability
  - Chemical reduction for cooling towers
  - Prolonged cooling tower/chiller lifespan
  - Lower water purchase costs
  - Enhanced customer experience
  - Improved fountain aesthetics
- Requirements section (space near STP, plumbing lines, 3-phase power)
- Mall interior image from CDN
- Current Clients section with logos (2 logos from CDN)
- CTA to contact/booking

---

### 5. Industries Page Component (New Content)

Custom page based on user's specifications:
- Hero banner with industrial theme
- **Customer Segments** section: Cards for Apartments, Commercial Parks, and Industries
- **Product Types** section: Two product cards:
  - White Water: Treated recycled water for general use (cooling, gardening, flushing)
  - DM Water: Demineralized water for industrial processes (boilers, manufacturing)
- **Clean Flowchart**: CSS-based visual flow:
  - Source (STP/Raw Water) --> Treat (Boson System) --> Test (Quality Check) --> Store (Treated Water Tank) --> Deliver (Tanker or Bulk Supply)
- **Tanker Booking Flow** section: Step cards showing:
  1. Request via WhatsApp or Email
  2. Confirmation sent back
  3. Tanker dispatched
  4. Delivery completed
- **IoT Monitoring** section: Dashboard preview showing real-time parameters (TDS, pH, flow rate, turbidity)
- CTA buttons for WhatsApp booking and email inquiry

---

### 6. Wire Up Page Routing

In the `Index` component, add page state mappings:
```
{currentPage === 'solutions' && <SolutionsPage />}
{currentPage === 'apartments' && <ApartmentsPage />}
{currentPage === 'malls' && <MallsPage />}
{currentPage === 'industries' && <IndustriesPage />}
```

Pass `setCurrentPage` to Solutions page so cards can navigate to sub-pages.

---

### Design Approach
- All pages use the same design system (slate/blue/cyan palette, font-sans)
- Hero banners use gradient overlays consistent with existing pages
- Flowcharts built with CSS flexbox/grid and Lucide icons (no external diagram libraries)
- Images loaded from Boson's S3 CDN with fallback via existing `handleImgError`
- Check icons use the existing cyan checkmark style from the reference site
- Mobile responsive with the existing Tailwind breakpoint patterns

### Technical Details
- No new dependencies needed
- No new files -- all components added to `Index.tsx` following existing pattern
- Images referenced via CDN URLs (no downloads needed)
- Flowcharts are pure CSS with Tailwind classes and Lucide icons for arrows/icons

