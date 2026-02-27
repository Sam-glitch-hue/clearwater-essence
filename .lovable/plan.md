

## Make WhatsApp Button Mobile-Friendly for iPhone

### Problem
The WhatsApp floating button is currently sized for desktop (`p-4`, icon `size={32}`, positioned `bottom-8 right-8`) which can feel oversized and awkwardly placed on smaller iPhone screens.

### Changes (single file: `src/pages/Index.tsx`)

#### WhatsApp Button (lines 1131-1142)

Make the button compact on mobile with responsive sizing:

- **Position**: `bottom-5 right-5` on mobile, `sm:bottom-8 sm:right-8` on desktop
- **Padding**: `p-3` on mobile, `sm:p-4` on desktop
- **Icon size**: Reduce to `size={24}` on mobile using a responsive approach (use `w-6 h-6 sm:w-8 sm:h-8` classes instead of fixed size prop)
- **Shadow**: Slightly smaller shadow on mobile for subtlety
- **Ripple blobs**: Scale down proportionally on mobile (`w-7 h-7` and `w-4 h-4` vs current `w-10 h-10` and `w-6 h-6`)
- **Border**: Thinner on mobile (`border` vs `border-2`)

This keeps the button visible and tappable (meets 44x44pt minimum touch target) while not dominating the screen on iPhone-sized devices.

### Technical Details
- All changes in `WhatsAppButton` component, lines 1131-1142
- Uses Tailwind responsive prefixes (`sm:`) for clean mobile-first approach
- No new dependencies or components needed

