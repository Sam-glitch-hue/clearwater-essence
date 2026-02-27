

## Replace Icons with Images in Benefits Section

Replace the Lucide icon boxes in each of the 6 benefit cards with relevant water treatment images, making the cards more visually impactful.

### Changes (single file: `src/pages/Index.tsx`)

**Lines 291-297** — Update the benefits data array:
- Remove the `Icon` and `iconClass` properties from each benefit object
- Keep existing `bgImg` URLs as the subtle background
- Add a new `img` property with a prominent, contextually relevant image URL for each card:
  - **Zero CapEx** -- pay-per-use / industrial equipment image
  - **65% Chemical Reduction** -- chemical lab / water testing image
  - **Real-Time Monitoring** -- IoT dashboard / digital monitoring image
  - **Extended Asset Life** -- clean cooling tower / pristine equipment image
  - **ZLD Compliant** -- water recycling / treatment plant image
  - **Reduced Blowdown** -- water conservation / flow image

**Lines 302-304** — Replace the icon container with an image element:
- Remove the `<div>` containing `<ben.Icon>` 
- Replace with a rounded image element (e.g., `<img src={ben.img} className="w-16 h-16 rounded-2xl object-cover ...">`) styled to match the current icon box dimensions and rounded corners
- Keep the hover scale animation on the image container

### Result
Each benefit card will show a small, relevant water treatment photo where the icon used to be, while keeping the subtle background image overlay, title, and description unchanged.

