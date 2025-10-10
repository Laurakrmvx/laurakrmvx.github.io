# Beauty Shop — Midterm Project (Static Website)

This repository contains a static, multi-page website for a fictional cosmetics store called "Rom&nd" It was built to satisfy the midterm project requirements for the web development course and demonstrates semantic HTML, modern CSS layout (Flexbox and Grid), responsive design, and consistent styling.

Project pages

- Home (`index.html`) — hero section and featured product cards
- Products (`products.html`) — product listing (static)
- About (`about.html`) — information about the store
- Contact (`contact.html`) — contact form layout
- Cart (`cart.html`) — static cart layout

Requirements checklist (how this project maps to the midterm rules)

1. General structure

- 5+ pages included and linked via a consistent navigation bar visible on all pages — Done
- Each page uses semantic sections: `<header>`, `<main>`, and `<footer>` — Done

2. HTML requirements

- Proper use of headings, paragraphs, lists, links, and images — Done
- At least one table included (e.g., pricing or comparison) — Please add in `products.html` if required (not currently present)
- At least one form included (contact form on `contact.html`) — Done
- Use of `div` and `span` for structure where appropriate — Done

3. CSS requirements

- External stylesheet used: `style.css` in the project root — Done
- CSS variables defined in `:root` (colors, font-size, etc.) — Done
- Uses Flexbox (header navigation) and Grid (product cards grid) — Done
- At least one positioning technique used (e.g., relative/absolute) — Done (see header and/or other components)
- Uses `:hover` on buttons/links and `:nth-child()` on repeating items — Done
- Google Font applied via import in the stylesheet — Done (check `style.css` for font import)
- Images below the fold include `loading="lazy"` where applicable — Add `loading="lazy"` to product images in `index.html`/`products.html` to improve performance

4. Responsive design

- Media queries implemented for at least two breakpoints (mobile/tablet/desktop) — Done
- Navigation responds on small screens (stacking) and grid items stack on smaller viewports — Done

5. Creativity & presentation

- Consistent theme and colors across pages — Done
- Intuitive navigation and clean layout — Done

Files in this repo

- `index.html` — Home page
- `products.html` — Products listing
- `about.html` — About page
- `contact.html` — Contact form
- `cart.html` — Cart layout
- `style.css` — Central stylesheet
- `README.md` — Project description and mapping to the midterm requirements

How to preview locally

From the file explorer: open `index.html` in your browser.
