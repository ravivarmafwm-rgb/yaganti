# Asset Requirements — Yaganti Signature Suites

## Status: PENDING — Images need to be extracted from brochure PDFs

---

## Instructions for Asset Preparation

Extract images from the supplied brochure PDFs using Adobe Acrobat, PDF expert, or a similar tool.

For each image, export at the highest available resolution.
Save in WebP format for photographs.
Save floor plans as PNG or SVG for maximum clarity.

---

## Required Image Assets

### Directory: public/images/elevations/

| Filename | Source | Brochure Page | Recommended Dimensions |
|----------|--------|---------------|------------------------|
| elevation-entrance.webp | Main building entrance with porch | Page 3 | 1920×1080 min |
| elevation-front.webp | Full building front elevation | Page 6 | 1920×1080 min |
| elevation-side.webp | Side elevation with car/driveway | Page 7 | 1920×1080 min |

### Directory: public/images/interiors/

| Filename | Source | Brochure Page | Recommended Dimensions |
|----------|--------|---------------|------------------------|
| master-bedroom.webp | Master bedroom with floral wallpaper | Page 8 | 1920×1080 min |
| master-bedroom-alt.webp | Master bedroom with toilet/WIC panels | Page 9 | 1920×1080 min |
| kids-bedroom.webp | Kids bedroom with blue headboard | Page 11 | 1920×1080 min |
| kids-bedroom-alt.webp | Kids room panels with toilet | Page 10 | 1920×1080 min |
| guest-bedroom.webp | Guest bedroom with grey pendant lights | Page 12 | 1920×1080 min |
| guest-bedroom-alt.webp | Guest bedroom layout with toilet/wardrobe | Page 13 | 1920×1080 min |
| balcony.webp | Balcony with rattan chairs and plants | Page 14 | 1920×1080 min |
| living-room.webp | Living room with golden ceiling | Page 16 | 1920×1080 min |
| living-room-alt.webp | Living and dining overview | Page 17 | 1920×1080 min |
| visitors-lounge.webp | Visitor's lounge with wooden door wall | Page 15 | 1920×1080 min |
| corridor.webp | Building corridor with lift doors | Page 18 | 1920×1080 min |
| corridor-wide.webp | Wide corridor render looking toward window | Page 19 | 1920×1080 min |
| home-theatre.webp | Home theatre room 1 (screen + chairs) | Page 20 | 1920×1080 min |
| home-theatre-alt.webp | Home theatre room 2 (recliners) | Page 20 | 1920×1080 min |
| kitchen.webp | Kitchen with grey cabinets | Page 21 | 1920×1080 min |
| dining.webp | Dining area with yellow chairs | Page 21 | 1920×1080 min |

### Directory: public/images/amenities/

| Filename | Source | Brochure Page | Recommended Dimensions |
|----------|--------|---------------|------------------------|
| carrom.webp | Carrom board game play | Page 23 | 800×800 min |
| gym.webp | Gym with people exercising | Page 23 | 800×800 min |
| library.webp | Library with boy reading | Page 23 | 800×800 min |
| snooker.webp | Snooker table with group | Page 23 | 800×800 min |

### Directory: public/images/floor-plans/

| Filename | Source | Brochure Page | Recommended Dimensions |
|----------|--------|---------------|------------------------|
| master-layout.png | Full floor master plan with flat numbers | Page 24 | 2400×1800 min |
| east-facing-plan.png | East facing unit plan with dimensions | Page 25 (left) | 2400×3000 min |
| west-facing-plan.png | West facing unit plan with dimensions | Page 25 (right) | 2400×3000 min |

### Directory: public/images/location/

| Filename | Source | Brochure Page | Recommended Dimensions |
|----------|--------|---------------|------------------------|
| location-map.webp | Location map with landmarks | Page 27 | 1600×1200 min |

### Directory: public/images/branding/

| Filename | Description |
|----------|-------------|
| yaganti-constructions-logo.png | Yaganti Constructions logo (blue/gold house icon) |

### Directory: public/documents/

| Filename | Description |
|----------|-------------|
| yaganti-signature-suites-brochure.pdf | Individual page brochure for download |

---

## Temporary Placeholder Strategy

Until actual assets are uploaded, the website uses:
- CSS gradient backgrounds matching the brochure's gold/ivory color palette
- Descriptive alt text for all images
- Placeholder overlays with room/space labels

---

## Image Optimization Guidelines

- Use next/image for all images
- Provide width and height attributes
- Use priority={true} for above-the-fold images
- Use lazy loading for below-fold images
- Provide responsive sizes attribute
- WebP format for all photographs
- PNG for floor plans (line drawings need sharp edges)

---

Last Updated: 2026-11-24
