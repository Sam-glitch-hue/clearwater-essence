

## Update How It Works Section Images

Replace the current generic Unsplash images for each treatment stage with contextually relevant water treatment images from Unsplash/Pexels.

### Image Replacements

| Step | Current | New Image Theme |
|------|---------|----------------|
| 100 Micron Automatic Filtration | Generic lab image | Industrial automatic strainer/mesh filter equipment |
| Clintoptilolite Filtration | Generic filter | Natural zeolite mineral media / granular filter bed |
| Alumino Silicate Filter | Generic | Glass bead media / sand filtration vessel |
| Initial pH Correction | Generic chemistry | pH meter / chemical dosing panel |
| Antiscalant Dosing System | Generic pharma | Chemical dosing pump / metering system |
| Micron Filtration Stage 1 | Generic filter | Cartridge filter housing / sediment filters |
| Micron Filtration Stage 2 | Generic | Pleated cartridge filters close-up |
| XFR Membrane Filtration | Generic | RO membrane modules / pressure vessels |
| Final pH Correction | Generic lab | pH testing / water quality lab analysis |
| Disinfection System | Generic | UV disinfection chamber / UV water treatment |

### Technical Details

- Update the `img` URLs in the `methodologyStages` array (lines 406-416 in `src/pages/Index.tsx`)
- Each image will be sourced from Unsplash with `auto=format&fit=crop&q=80&w=800` parameters for consistent sizing
- Odour Reduction Filter (line 410) is not mentioned in the request, so it will remain unchanged
- No structural code changes needed -- only URL string replacements

