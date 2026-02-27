

## Add Video/Images Toggle to Media Gallery

### Overview
Add a toggle button (Videos / Images) to the Media Gallery section. When "Videos" is selected, show the existing YouTube video grid. When "Images" is selected, show a gallery of images sourced from bosonwhitewater.com.

### Changes (single file: `src/pages/Index.tsx`)

#### 1. Update VideoGallery component to support toggle

Replace the current `VideoGallery` component with a `MediaGallery` component that includes:
- A toggle button group (Videos | Images) centered below the section header
- State management for the active tab (`videos` or `images`)
- Conditional rendering of either the video grid or image grid

#### 2. Image gallery data

Add an `imageData` array with images sourced from bosonwhitewater.com (using their S3 CDN URLs at 600px resolution for good quality):

| Image | Alt Text | Source URL |
|-------|----------|------------|
| Reduce Water Cost infographic | BosonWhiteWater Reduce Water Cost | `simpleji-websites.s3...gallery/600/...BosonWhiteWater---Reduce-Water-Cost--1-.webp` |
| How It Works infographic | Boson How It Works | `simpleji-websites.s3...600/...infographic1--1-.webp` |
| Water Quality report | Boson Water Quality | `simpleji-websites.s3...gallery/600/...WhatsApp-Image-2023-04-24-at-20.48.36.webp` |
| BP Ravi site visit | Government of Karnataka Visit | `simpleji-websites.s3...gallery/600/...BAF-site-visit---4.webp` |
| Satish Mallya BAF visit | BAF Site Visit | `simpleji-websites.s3...gallery/600/...BAF-Site-Visit-5.webp` |
| Post-STP system | Boson Whitewater System | `simpleji-websites.s3...gallery/600/...BosonWhitewaterSystem-Post-STP.webp` |
| Real-time monitoring | Real-time Water Monitoring | `simpleji-websites.s3...gallery/600/...real.webp` |
| OPEX model | OPEX Model | `simpleji-websites.s3...gallery/600/...opex.webp` |
| Turnkey solution | Turnkey Solution | `simpleji-websites.s3...gallery/600/...turn.webp` |
| World class expertise | World Class Expertise | `simpleji-websites.s3...gallery/600/...ww.webp` |
| Times of India article | Times of India Coverage | `simpleji-websites.s3...gallery/1000/...paper.webp` |
| Social Story article | YourStory Coverage | `simpleji-websites.s3...gallery/300/...story.webp` |
| WRI Cohort | WRI Cities Hub | `simpleji-websites.s3...gallery/300/...hub.webp` |
| INK WASH | INK at WASH Hyderabad | `simpleji-websites.s3...gallery/300/...INKWASH.webp` |

#### 3. Toggle UI design

- Two side-by-side buttons styled as pills/tabs: "Videos" and "Images"
- Active state: solid blue background with white text
- Inactive state: transparent with border, slate text
- Smooth transition between tabs
- Icons: Video icon for Videos, Image icon for Images (from Lucide)

#### 4. Image grid layout

- Same 3-column responsive grid as videos (`sm:grid-cols-2 lg:grid-cols-3`)
- Each image card: white background, rounded corners, shadow, hover effect
- Images displayed with `object-cover` and `aspect-video` ratio
- Click-to-enlarge: clicking an image opens it in a Dialog/modal at full size
- "Load More" button with same pattern as videos (show 6 at a time)

#### 5. Update MediaPage reference

Update the `MediaPage` component to use the new `MediaGallery` component instead of `VideoGallery`.

### Technical Details

- Add `useState` for `activeTab` ("videos" | "images") defaulting to "videos"
- Add `useState` for `visibleImageCount` (start at 6, load 6 more)
- Add a Dialog component for image lightbox (already imported in the project)
- Use `Image` icon from lucide-react alongside existing `Youtube` icon
- All image URLs point to bosonwhitewater.com's S3 CDN -- no local assets needed

