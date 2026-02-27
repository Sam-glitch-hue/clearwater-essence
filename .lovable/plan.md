

## Fix Broken Gallery Images

### Problem
The `imageData` array in `src/pages/Index.tsx` (lines 625-640) uses incorrect S3 URLs. The current URLs follow the pattern:
`simpleji-websites.s3.ap-south-1.amazonaws.com/bosonwhitewater.com/gallery/600/...`

But the actual URLs on bosonwhitewater.com use:
`simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/...`

The filenames also include additional prefixes (e.g., `lwvvgouqdyc50s27xe-lsyfvnlmhbt9v6o3sqv-` before the actual filename).

### Fix

Replace all 14 image URLs in the `imageData` array (lines 625-640) with the correct URLs extracted from the live bosonwhitewater.com website:

| # | Alt Text | Correct 600px URL |
|---|----------|-------------------|
| 1 | BosonWhiteWater Reduce Water Cost | `.../gallery/600/lwvvgouqdyc50s27xe-lsyfvnlmhbt9v6o3sqv-BosonWhiteWater---Reduce-Water-Cost--1-.webp` |
| 2 | Boson How It Works | `.../600/lui111298xsyqw5jyif-infographic1--1-.webp` |
| 3 | Boson Water Quality | `.../gallery/600/lwvvgpf7jmrjm1rpjap-lsyfvo3m0xzdhwbwaol-WhatsApp-Image-2023-04-24-at-20.48.36.webp` |
| 4 | Government of Karnataka Visit | `.../gallery/600/lwvvgnyeyt7c81k1i7p-lsyfvn7ugh1gubjwo15-BAF-site-visit---4.webp` |
| 5 | BAF Site Visit | `.../gallery/600/lwvvgolw4item9blht-lsyfvneo2wvo1b2f3px-BAF-Site-Visit-5.webp` |
| 6 | Boson Whitewater System | `.../gallery/600/lwvvgpa0e9drpxkzw3l-lsyfvny13hdv5noja2r-BosonWhitewaterSystem-Post-STP.webp` |
| 7 | Real-time Water Monitoring | `.../gallery/600/luhxm66piyumlclnk-real.webp` |
| 8 | OPEX Model | `.../gallery/600/luhxm4x7eclfqegikp-opex.webp` |
| 9 | Turnkey Solution | `.../gallery/600/lugn9776yebr0cen8y-turn.webp` |
| 10 | World Class Expertise | `.../gallery/600/luhxm8ta71oiae4jhe5-ww.webp` |
| 11 | Times of India Coverage | `.../Media/1000/lx33hrinynhyw629yh-5.webp` |
| 12 | YourStory Coverage | `.../Media/300/lx33hrdvm8kt30neya-4.webp` |
| 13 | Better India Coverage | `.../Media/300/lx4bsf8neh7trdc5kse-better-india-logo.webp` |
| 14 | Udaya News Coverage | `.../Media/300/lx33hr8vljsvmwtutmc-3.webp` |

All URLs share the base: `https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/`

### Technical Details
- Single file change: `src/pages/Index.tsx`, lines 625-640
- Replace all 14 `src` strings with the correct URLs
- Update the last 4 entries (media logos) to use the correct Media folder paths and alt text
- No structural or logic changes needed

